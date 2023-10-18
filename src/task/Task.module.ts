import { Module } from '@nestjs/common';
import { TaskService } from './service/Task.service';
import { TaskResolver } from './resolvers/Task.resolver';
import { PrismaService } from '../prisma/service/prisma.service';

@Module({
  providers: [TaskService, TaskResolver, PrismaService],
  exports: [TaskService],
})
export class TaskModule {}
