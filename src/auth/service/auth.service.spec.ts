import { MockProxy, mock } from 'jest-mock-extended';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/service/user.service';
import { mockUsers } from '../../../test/mock.data';

describe('AuthService', () => {
  let authService: AuthService;
  let mockJWTService: MockProxy<JwtService>;
  let mockUserService: MockProxy<UserService>;

  beforeEach(async () => {
    mockUserService = mock<UserService>({
      getUser: jest.fn(() => new Promise((res) => res(mockUsers[0]))),
      getUsers: jest.fn(() => new Promise((res) => res([mockUsers[0]]))),
    });

    mockJWTService = mock<JwtService>({
      signAsync: jest.fn(() => new Promise((res) => res('i_am_a_teapot'))),
    });

    authService = new AuthService(mockUserService, mockJWTService);
  });

  describe('login', () => {
    it('should return object containing jwt', async () => {
      const result = await authService.signIn(
        mockUsers[0].email,
        mockUsers[0].password,
      );

      expect(result).toHaveProperty('access_token');
      expect(typeof result.access_token).toBe('string');
      expect(mockJWTService.signAsync).toHaveBeenCalledTimes(1);
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
