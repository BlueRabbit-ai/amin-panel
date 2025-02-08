import { Resolver, Query, Mutation, Args } from "@nestjs/graphql"
import type { UserService } from "./user.service"
import { User } from "./user.model"

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  async users() {
    return this.userService.findAll()
  }

  @Query(() => User)
  async user(@Args('id') id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('name') name: string, @Args('email') email: string, @Args('password') password: string) {
    return this.userService.create({ name, email, password })
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: number,
    @Args('name', { nullable: true }) name?: string,
    @Args('email', { nullable: true }) email?: string,
  ) {
    return this.userService.update(id, { name, email })
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: number) {
    return this.userService.remove(id);
  }
}

