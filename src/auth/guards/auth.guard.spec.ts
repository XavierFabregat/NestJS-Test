import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { MockProxy, mock } from 'jest-mock-extended';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { createMock } from '@golevelup/ts-jest';

describe('AuthController', () => {
  let authGuard: AuthGuard;
  let mockJwtService: MockProxy<JwtService>;
  let httpExecutionContext: ExecutionContext;
  let httpExecutionContextNoAuth: ExecutionContext;
  let gqlExecutionContext: ExecutionContext;
  let gqlExecutionContextNoAuth: ExecutionContext;

  beforeEach(async () => {
    mockJwtService = mock<JwtService>({
      verifyAsync: jest.fn(
        () => new Promise((res) => res({ email: 'foo@bar.com' } as any)),
      ),
    });

    authGuard = new AuthGuard(mockJwtService);
    const mockRequest = {
      headers: {
        authorization: 'Bearer aefeifaiefniae',
      },
      body: {},
    };

    // REST Ctx mocking
    httpExecutionContextNoAuth = createMock<ExecutionContext>({
      getType: () => 'http',
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {},
          body: {},
        }),
      }),
    });

    httpExecutionContext = createMock<ExecutionContext>({
      getType: () => 'http',
      switchToHttp: () => ({
        getRequest: () => mockRequest,
      }),
    });

    gqlExecutionContext = createMock<ExecutionContext>({
      getType: () => 'graphql',
      getArgs: () => [{}, {}, { req: mockRequest }, {}],
    });

    gqlExecutionContextNoAuth = createMock<ExecutionContext>({
      getType: () => 'graphql',
      getArgs: () => [{}, {}, { req: { headers: {}, body: {} } }, {}],
    });
  });

  describe('canActivate', () => {
    it('HTTP - should throw UnauthorizedException if no jwt token is provided in context req headers', async () => {
      try {
        await authGuard.canActivate(httpExecutionContextNoAuth);
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
      }
    });

    it('HTTP - should return true when jwt token is preset and verified', async () => {
      expect(await authGuard.canActivate(httpExecutionContext)).toBe(true);
      expect(mockJwtService.verifyAsync).toHaveBeenCalledTimes(1);
    });

    it('GraphQL - should throw UnauthorizedException if no jwt token is provided in context req headers', async () => {
      try {
        await authGuard.canActivate(gqlExecutionContextNoAuth);
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
      }
    });

    it('GraphQL - should return true when jwt token is preset and verified', async () => {
      expect(await authGuard.canActivate(gqlExecutionContext)).toBe(true);
      expect(mockJwtService.verifyAsync).toHaveBeenCalledTimes(1);
    });

    it('should throw UnauthorizedException if jwt token is invalid', async () => {
      try {
        mockJwtService.verifyAsync.mockImplementationOnce(() => {
          throw new Error();
        });
        await authGuard.canActivate(httpExecutionContext);
      } catch (error) {
        expect(error).toBeInstanceOf(UnauthorizedException);
        expect(mockJwtService.verifyAsync).toHaveBeenCalledTimes(1);
      }
    });
  });
});
