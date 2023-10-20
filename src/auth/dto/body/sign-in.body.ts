import { IsString } from 'class-validator';

export class SignInBody {
  @IsString()
  usernameOrEmail: string;

  @IsString()
  password: string;
}
