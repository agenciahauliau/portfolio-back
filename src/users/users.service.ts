import { Model } from 'mongoose';
import { Logger, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as bcrypt from 'bcrypt';
import { SearchUserInput } from './dto/search-user.input';

@Injectable()
export class UsersService {
  private readonly saltOrRounds = 10;

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    //Cria o Salt
    const salt = await bcrypt.genSalt(this.saltOrRounds);

    //Faz o hash da senha
    const hash = await bcrypt.hash(createUserInput.senha, salt);

    //Armazena a senha no objeto do tipo userModel
    const createdUser = new this.userModel({
      username: createUserInput.username,
      email: createUserInput.email,
      senha: hash,
    });
    return await createdUser
      .save()
      .then((res) => {
        Logger.log(`create: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`create: ${err}`);
        return err;
      });
  }

  /* Listar mais de um ususário */
  async findAll(qtde?: any) {
    return await this.userModel
      .find()
      .limit(qtde)
      .then((res) => {
        Logger.log(`findAll: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`findAll: ${err}`);
        return err;
      });
  }

  /* Função para procurar por um usuário */
  async findOne(userParam: SearchUserInput): Promise<User> {
    return await this.userModel
      .findOne(userParam)
      .then((res) => {
        Logger.log(`findOne: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`findOne: ${err}`);
        return err;
      });
  }

  /* Função para atualizar os dados de um usuário */
  async update(param: string, updateUserInput: UpdateUserInput): Promise<User> {
    return await this.userModel
      .findOneAndUpdate({ username: param }, updateUserInput, {
        new: true,
        useFindAndModify: true,
      })
      .then((res) => {
        Logger.log(`update: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`update: ${err}`);
        return err;
      });
  }

  /* Função para remover um usuário */
  async remove(param: string): Promise<boolean> {
    return await this.userModel
      .findOneAndDelete({ username: param }, { useFindAndModify: true })
      .then((res) => {
        Logger.log(`remove: ${res}`);
        return res ? true : false;
      })
      .catch((err) => {
        Logger.log(`remove: ${err}`);
        return err;
      });
  }
}
