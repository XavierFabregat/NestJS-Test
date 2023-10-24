import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../dto/models/user.model';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../service/user.service';
import { GetUsersArgs } from '../dto/args/get-users.args';
import { CreateUserInput } from '../dto/inputs/create-user.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { GraphQLContext } from '../../types';

@ApiTags('v1/user')
@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @UseGuards(AuthGuard)
  @Query(() => User, { nullable: true })
  async getUser(@Context() Ctx: GraphQLContext): Promise<User | null> {
    return this.userService.getUser({ id: Ctx.req.user.sub });
  }

  @UseGuards(AuthGuard)
  @Query(() => [User], { nullable: true })
  async getUsers(@Args() getUsersArgs: GetUsersArgs): Promise<User[]> {
    return this.userService.getUsers(getUsersArgs);
  }

  @UseGuards(AuthGuard)
  @Mutation(() => User)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<User> {
    return this.userService.createUser(createUserData);
  }
}
