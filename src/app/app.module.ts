import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './service/app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from '../user/user.module';
import { rootResolver } from '../graphql/resolver/root.resolver';
import { TaskModule } from '../task/Task.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/graphql/schema.gql',
      context: ({ req }) => ({ req }),
    }),
    UserModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService, rootResolver],
})
export class AppModule {}
