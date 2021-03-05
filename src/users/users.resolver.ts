import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { SearchUserInput } from './dto/search-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(
    @Args('userData')
    createUserInput: CreateUserInput,
  ) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('dados') searchUser: SearchUserInput) {
    return this.usersService.findOne(searchUser);
  }

  @Mutation(() => User, { name: 'updateUser' })
  async updateUser(
    @Args('username', { type: () => String }) username: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return await this.usersService.update(username, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('username', { type: () => String }) username: string) {
    return this.usersService.remove(username);
  }
}
