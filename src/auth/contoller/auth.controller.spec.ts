import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../service/auth.service';
import { mock } from 'jest-mock-extended';
import { mockUsers } from '../../../test/mock.data';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthController', () => {
  let authController: AuthController;
  let mockAuthService: AuthService;

  beforeEach(async () => {
    mockAuthService = mock<AuthService>({
      signIn: jest.fn(
        () => new Promise((res) => res({ access_token: 'rubber_duck' })),
      ),
      signOut: jest.fn(() => new Promise((res) => res({ access_token: '' }))),
    });

    authController = new AuthController(mockAuthService);
  });

  describe('POST /login', () => {
    it('should call authService login', () => {
      expect(
        authController.signIn({
          usernameOrEmail: mockUsers[0].email,
          password: mockUsers[0].password,
        }),
      ).resolves.toHaveProperty('access_token');
      expect(mockAuthService.signIn).toHaveBeenCalledTimes(1);
    });
  });

  it('should thorw UnauthorizedException if no body', async () => {
    try {
      // @ts-expect-error - we expect an error since we are not passing args
      await authController.signIn();
    } catch (error) {
      expect(error).toBeInstanceOf(UnauthorizedException);
    }
  });

  it('should throw UnauthorizedException if invalid payload', async () => {
    try {
      await authController.signIn({
        usernameOrEmail: '',
        password: '',
      });
    } catch (e) {
      expect(e).toBeInstanceOf(UnauthorizedException);
    }
  });
});
