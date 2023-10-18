import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class rootResolver {
  @Query(() => String)
  getHello(): string {
    return 'Hello World!';
  }
}
