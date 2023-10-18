import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../dto/models/user.model';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../service/user.service';
import { GetUserArgs } from '../dto/args/get-user.args';
import { GetUsersArgs } from '../dto/args/get-users.args';
import { CreateUserInput } from '../dto/inputs/create-user.input';

@ApiTags('v1/user')
@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => User, { nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User | null> {
    return this.userService.getUser(getUserArgs);
  }

  @Query(() => [User], { nullable: true })
  async getUsers(@Args() getUsersArgs: GetUsersArgs): Promise<User[]> {
    return this.userService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<User> {
    return this.userService.createUser(createUserData);
  }
}
