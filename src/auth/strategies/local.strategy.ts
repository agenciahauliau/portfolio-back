import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from '../../users/entities/user.entity';
import { AuthService } from '../auth.service';
import { AuthInput } from '../dto/auth.input';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authServices: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'senha',
    });
    /* this.executaTudo(); */
  }

  async validate(email: string, senha: string): Promise<User> {
    Logger.log(`validate: email:${email}, senha: ${senha}`);
    const user = await this.authServices.validateUser(email, senha);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  /* async executaTudo(): Promise<any> {
    let validate = await this.validate({
      email: 'eduardo@rangell.com',
      senha: '1234567890',
    });
    Logger.log(`validate ${validate}`);
  } */
}
