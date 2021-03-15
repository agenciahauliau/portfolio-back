import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from '../../users/entities/user.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authServices: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'senha',
    });
  }

  async validate(email: string, senha: string): Promise<User> {
    Logger.log(`validate: email:${email}, senha: ${senha}`);
    const user = await this.authServices.validateUser(email, senha);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
