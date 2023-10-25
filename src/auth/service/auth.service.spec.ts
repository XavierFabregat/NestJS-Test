import { MockProxy, mock } from 'jest-mock-extended';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/service/user.service';
import { mockUsers } from '../../../test/mock.data';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let users = [...mockUsers];
  let authService: AuthService;
  let mockJWTService: MockProxy<JwtService>;
  let mockUserService: MockProxy<UserService>;

  beforeEach(async () => {
    mockUserService = mock<UserService>({
      getUser: jest.fn(() => new Promise((res) => res(users[0]))),
      getUsers: jest.fn(() => new Promise((res) => res([users[0]]))),
    });

    mockJWTService = mock<JwtService>({
      signAsync: jest.fn(() => new Promise((res) => res('i_am_a_teapot'))),
    });

    authService = new AuthService(mockUserService, mockJWTService);
  });

  describe('login', () => {
    beforeEach(() => {
      users = [...mockUsers];
    });
    it('should return object containing jwt if password given is correct', async () => {
      const result = await authService.signIn(
        users[0].email,
        users[0].password,
      );
      expect(result).toHaveProperty('access_token');
      expect(typeof result.access_token).toBe('string');
      expect(mockJWTService.signAsync).toHaveBeenCalledTimes(1);
    });

    it('should also work with username', async () => {
      const result = await authService.signIn(
        users[0].username,
        users[0].password,
      );

      expect(result).toHaveProperty('access_token');
      expect(typeof result.access_token).toBe('string');
      expect(mockJWTService.signAsync).toHaveBeenCalledTimes(1);
    });
    it('should throw an error if password given is incorrect', async () => {
      try {
        await authService.signIn(users[0].email, 'wrong_password');
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
      }
    });

    it('should throw an error if no password given', async () => {
      try {
        await authService.signIn(users[0].email, '');
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
      }
    });

    it('should throw an error if no email/username s given', async () => {
      try {
        await authService.signIn('', users[0].password);
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
      }
    });
  });

  describe('logout', () => {
    it('should return an object with no jwt', async () => {
      const result = await authService.signOut();

      expect(result).toHaveProperty('access_token');
      expect(typeof result.access_token).toBe('string');
      expect(result.access_token).toBe('');
    });
  });
});
