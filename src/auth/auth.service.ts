import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersServices: UsersService,
    private readonly jwtServices: JwtService,
  ) {}

  public async validateUser(email: string, senha: string): Promise<User | null> {
    //Pesquisa pelo usuário no BD
    Logger.log(`validateUser: email: ${email}, senha: ${senha}`);
    const user = await this.usersServices.findOne({ email: email });
    //Checa se é verdadeiro
    if (!user) {
      return null;
    }
    //Comparação de dados
    const senhaValida = bcrypt.compareSync(senha, user.senha);

    //Retorna resultado final
    return senhaValida ? user : null;
  }

  public async login(param: any): Promise<string> {
    Logger.log(`param: ${param}`);

    const payload = {
      email: param.email,
      sub: param._id,
    };

    Logger.log(`payload ${JSON.stringify(payload)}`);

    return this.jwtServices.sign(payload);
  }

  public async verify(token: string): Promise<User> {
    const decoded = this.jwtServices.verify(token, {
      secret: process.env.JWT_SECRET,
    });

    Logger.log(`decoded ${JSON.stringify(decoded)}`);

    const user = await this.usersServices.findOne({ email: decoded.email });

    if (!user) {
      throw new NotFoundException(`Não foi possível encontrar o ususário`);
    }
    return user;
  }
}
