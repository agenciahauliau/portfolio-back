import { UnauthorizedException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth.input';
@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => String)
  public async login(@Args('data') data: AuthInput): Promise<string> {
    const user = await this.authService.validateUser(data.email, data.senha);
    if (!user) {
      throw new UnauthorizedException();
    }
    const response = await this.authService.login(user);
    return response;
  }
}
