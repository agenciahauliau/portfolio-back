import { Logger, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  /*   @Mutation(() => AuthType)
  @UseGuards(LocalAuthGuard)
  public async login(@Args('data') data: AuthInput): Promise<AuthType> {
    Logger.log(data);
    const response = await this.authService.login(data);

    return {
      user: response.user,
      token: response.token
    };
  } */
}
