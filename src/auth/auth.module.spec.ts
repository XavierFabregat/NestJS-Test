import { Test, TestingModule } from '@nestjs/testing';
import { AuthModule } from './auth.module';
import { AuthService } from './service/auth.service';
import { AuthController } from './contoller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';

describe('AuthModule', () => {
  let authModule: TestingModule;

  beforeEach(async () => {
    authModule = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();
  });

  it('should have been defined correctly w/ all correct imports, providers and exports', () => {
    expect(authModule).toBeDefined();
    expect(authModule.get<AuthService>(AuthService)).toBeDefined();
    expect(authModule.get<AuthController>(AuthController)).toBeDefined();
    expect(authModule.get<JwtModule>(JwtModule)).toBeDefined();
    expect(authModule.get<UserModule>(UserModule)).toBeDefined();
  });
});
