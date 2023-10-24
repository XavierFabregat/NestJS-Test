import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    usernameOrEmail: string,
    password: string,
  ): Promise<{ access_token: string }> {
    if (!usernameOrEmail || !password) throw new UnauthorizedException();
    const isEmail = usernameOrEmail.includes('@');
    const user = await this.userService.getUser(
      isEmail ? { email: usernameOrEmail } : { username: usernameOrEmail },
    );
    if (user && user.password === password) {
      delete user.password;
      const payload = { username: user.username, sub: user.id };
      return { access_token: await this.jwtService.signAsync(payload) };
    }
    throw new UnauthorizedException();
  }

  async signOut(): Promise<{ access_token: '' }> {
    return { access_token: '' };
  }
}
