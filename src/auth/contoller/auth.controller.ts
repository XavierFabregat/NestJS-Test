import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { SignInBody } from '../dto/body/sign-in.body';
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInBody) {
    if (!signInDto || !signInDto.password || !signInDto.usernameOrEmail)
      throw new UnauthorizedException();
    const { usernameOrEmail, password } = signInDto;
    return this.authService.signIn(usernameOrEmail, password);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('logout')
  signOut() {
    return this.authService.signOut();
  }
}
