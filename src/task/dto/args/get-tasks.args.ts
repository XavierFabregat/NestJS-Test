import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Max, Min } from 'class-validator';
import GraphQLJSON from 'graphql-type-json';

export class WhereArgs {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  progress?: 'todo' | 'in progress' | 'done';

  @Field(() => String, { nullable: true })
  userId?: string;
}

@ArgsType()
export class GetTasksArgs {
  @Field(() => Int, { nullable: true })
  @Min(0)
  skip?: number = 0;

  @Field(() => Int, { nullable: true })
  @Min(1)
  @Max(100)
  take? = 20;

  @Field(() => GraphQLJSON, {
    nullable: true,
    description:
      'Object with id (string), username (string) and/or email (string)',
  })
  where?: WhereArgs;

  @Field(() => String, { nullable: true })
  cursor?: Prisma.TaskWhereUniqueInput;

  @Field(() => String, { nullable: true })
  orderBy: Prisma.TaskOrderByWithRelationInput;
}
