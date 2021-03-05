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
        Logger.log(res);
        return res;
      })
      .catch((err) => {
        Logger.log(err);
        return err;
      });
  }

  async findAll(): Promise<User[]> {
    return await this.userModel
      .find()
      .exec()
      .then((res) => {
        Logger.log(res);
        return res;
      })
      .catch((err) => {
        Logger.log(err);
        return err;
      });
  }

  async findOne(userParam: SearchUserInput): Promise<User[]> {
    return await this.userModel
      .findOne(userParam)
      .then((res) => {
        Logger.log(res);
        return res;
      })
      .catch((err) => {
        Logger.log(err);
        return err;
      });
  }

  async update(param: string, updateUserInput: UpdateUserInput): Promise<User> {
    return await this.userModel
      .findOneAndUpdate({ username: param }, updateUserInput, {
        new: true,
        useFindAndModify: true,
      })
      .then((res) => {
        Logger.log(res);
        return res;
      })
      .catch((err) => {
        Logger.log(err);
        return err;
      });
  }

  async remove(param: string) {
    return await this.userModel
      .findOneAndDelete({ username: param }, { useFindAndModify: true })
      .then((res) => {
        Logger.log(res);
        return res;
      })
      .catch((err) => {
        Logger.log(err);
        return err;
      });
  }
}
