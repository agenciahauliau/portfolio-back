import { NotFoundException, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
//import { PubSub } from 'apollo-server-express';

import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { SearchUserInput } from './dto/search-user.input';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CurrentUser } from 'src/auth/current-user.decorator';

//const pubSub = new PubSub();

@Resolver(() => User)
export class UsersResolver {
  private readonly respostaDeErro = 'Usuário não encontrato';
  constructor(private readonly usersService: UsersService) {}

  /* Criar usuário */
  @Mutation(() => User)
  async createUser(
    @Args('dados')
    createUserInput: CreateUserInput,
  ): Promise<User> {
    const result = await this.usersService.create(createUserInput);
    //pubSub.publish('userAdded', { userAdded: result });
    return result;
  }

  @Query(() => User, { name: 'me' })
  @UseGuards(GqlAuthGuard)
  async getMe(@CurrentUser('user') user: User): Promise<User> {
    return user;
  }

  @Query(() => Boolean, { name: 'check' })
  @UseGuards(GqlAuthGuard)
  async logado(): Promise<boolean> {
    return true;
  }

  /* Pesquisar por todos ususários */
  @Query(() => [User], { name: 'users' })
  @UseGuards(GqlAuthGuard)
  findAll(@Args('quantidade', { nullable: true }) qtde: Number): Promise<User[]> {
    return this.usersService.findAll(qtde);
  }

  /* Pesquisar por um usuário */
  @Query(() => User, { name: 'user' })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args('dados') searchUser: SearchUserInput): Promise<User> {
    const resultado = await this.usersService.findOne(searchUser);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${JSON.stringify(searchUser)}`);
    }
    return resultado;
  }

  /* Atualizar usuário */
  @Mutation(() => User, { name: 'updateUser' })
  @UseGuards(GqlAuthGuard)
  async updateUser(
    @Args('username', { type: () => String }) username: string,
    @Args('dados') updateUserInput: UpdateUserInput,
  ) {
    const resultado = await this.usersService.update(username, updateUserInput);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${username}`);
    }
    return resultado;
  }

  /* Remover usuário */
  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async removeUser(@Args('username', { type: () => String }) username: string) {
    const resultado = await this.usersService.remove(username);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${username}`);
    }
    return resultado;
  }

  /*
  Subscription para receber mensagens sem necessidade de enviar solicitação
  AINDA A SER IMPLEMENTADO
  * ATUALIZAÇÃO 27 DE AGOSTO: Com a chegada do apollo-server 3, a subscription não é
  * mais contemplada dentro do mesmo.
  * TODO: Implementar a subscription nova
  @Subscription(() => User)
  userAdded() {
    return pubSub.asyncIterator('userAdded');
  }*/
}
