import { Field, ObjectType } from '@nestjs/graphql';
import { User as UserModel } from '@prisma/client';
import { Task } from '../../../task/dto/models/task.model';

@ObjectType({ description: 'user' })
export class User {
  @Field(() => String)
  id: UserModel['id'] = '';

  @Field(() => String, { nullable: true })
  username: UserModel['username'] = '';

  @Field(() => String)
  email: UserModel['email'] = '';

  password: string; // not exposed to GraphQL

  @Field(() => Date)
  createdAt: UserModel['createdAt'];

  @Field(() => Date)
  updatedAt: UserModel['updatedAt'];

  @Field(() => [Task])
  tasks?: Task[] = [];
}
