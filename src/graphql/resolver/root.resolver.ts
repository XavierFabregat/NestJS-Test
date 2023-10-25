import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class RootResolver {
  @Query(() => String)
  getHello(): string {
    return 'Hello World!';
  }
}
