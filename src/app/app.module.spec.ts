import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from '../user/user.module';
import { TaskModule } from '../task/Task.module';
import { AppController } from './controllers/app.controller';
import { AppService } from './service/app.service';
import { RootResolver } from '../graphql/resolver/root.resolver';
import { ApolloDriver } from '@nestjs/apollo';
import { AppModule } from './app.module';

describe('AppModule', () => {
  let appModule: TestingModule;

  beforeEach(async () => {
    appModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  });

  it('should be defined w/ all the correct import, providers and controllers', () => {
    expect(appModule).toBeDefined();
    expect(appModule.get<ConfigModule>(ConfigModule)).toBeDefined();
    expect(appModule.get<AuthModule>(AuthModule)).toBeDefined();

    const gqlModule = appModule.get<GraphQLModule>(GraphQLModule);
    expect(gqlModule).toBeDefined();
    // @ts-expect-error test needs to verify config via private property
    expect(gqlModule.options.driver).toEqual(ApolloDriver);
    // @ts-expect-error test needs to verify config via private property
    expect(gqlModule.options.autoSchemaFile).toBe('src/graphql/schema.gql');
    // @ts-expect-error test needs to verify config via private property
    expect(gqlModule.options.context({ req: 'test' })).toEqual({ req: 'test' });

    expect(appModule.get<UserModule>(UserModule)).toBeDefined();
    expect(appModule.get<TaskModule>(TaskModule)).toBeDefined();
    expect(appModule.get<AppController>(AppController)).toBeDefined();
    expect(appModule.get<AppService>(AppService)).toBeDefined();
    expect(appModule.get<RootResolver>(RootResolver)).toBeDefined();
  });
});
