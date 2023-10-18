import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Max, Min } from 'class-validator';
import GraphQLJSON from 'graphql-type-json';

export class WhereArgs {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  email?: string;
}

@ArgsType()
export class GetUsersArgs {
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
  cursor?: Prisma.UserWhereUniqueInput;

  @Field(() => String, { nullable: true })
  orderBy: Prisma.UserOrderByWithRelationInput;
}
