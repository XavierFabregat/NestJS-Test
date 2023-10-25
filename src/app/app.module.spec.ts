import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from '../user/user.module';
import { TaskModule } from '../task/Task.module';
import { AppController } from './controllers/app.controller';
import { AppService } from './service/app.service';
import { RootResolver } from '../graphql/resolver/root.resolver';

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
    expect(appModule.get<GraphQLModule>(GraphQLModule)).toBeDefined();
    expect(appModule.get<GraphQLModule>(GraphQLModule)).toBeDefined();
    expect(appModule.get<UserModule>(UserModule)).toBeDefined();
    expect(appModule.get<TaskModule>(TaskModule)).toBeDefined();
    expect(appModule.get<AppController>(AppController)).toBeDefined();
    expect(appModule.get<AppService>(AppService)).toBeDefined();
    expect(appModule.get<RootResolver>(RootResolver)).toBeDefined();
  });
});
