import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(
    @Args('createUserInput')
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('username', { type: () => String }) username: string) {
    return this.usersService.findOne(username);
  }

  @Mutation(() => User, { name: 'update' })
  async updateUser(
    @Args('username', { type: () => String }) username: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return await this.usersService.update(username, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('delUser', { type: () => String }) username: string) {
    return this.usersService.remove(username);
  }
}
