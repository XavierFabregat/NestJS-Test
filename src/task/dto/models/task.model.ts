import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Task as TaskModel } from '@prisma/client';
import { User } from '../../../user/dto/models/user.model';

@ObjectType({ description: 'task' })
export class Task {
  @Field(() => ID)
  id: TaskModel['id'] = '';

  @Field(() => String)
  title: TaskModel['title'] = '';

  @Field(() => String)
  description: TaskModel['description'] = '';

  @Field(() => String)
  progress: 'todo' | 'in progress' | 'done';

  @Field(() => Date)
  createdAt: TaskModel['createdAt'];

  @Field(() => Date)
  updatedAt: TaskModel['updatedAt'];

  @Field(() => User)
  user: User;
}
