import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { PrismaService } from '../prisma/service/prisma.service';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  providers: [UserService, UserResolver, PrismaService],
  exports: [UserService],
})
export class UserModule {}
