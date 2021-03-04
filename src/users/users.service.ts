import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const createdUser = new this.userModel(createUserInput);
    return await createdUser
      .save()
      .then((res) => res)
      .catch((err) => err);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel
      .find()
      .exec()
      .then((res) => res)
      .catch((err) => err);
  }

  async findOne(param: string): Promise<User> {
    return await this.userModel
      .findOne({ username: param })
      .then((res) => res)
      .catch((err) => err);
  }

  /* async update(param: string, updateUserInput: UpdateUserInput): Promise<User> {
    return await this.userModel
      .findOneAndUpdate({ username: param }, updateUserInput, {
        useFindAndModify: true,
      })
      .then((res) => res)
      .catch((err) => err);
  } */

  async update(param, updateUserInput: UpdateUserInput) {
    const updateUser = new this.userModel(updateUserInput);
    return await this.userModel.updateOne(
      { username: param },
      { $set: { updateUserInput } },
    );
  }

  async remove(param: string): Promise<User> {
    return await this.userModel
      .findOneAndDelete({ username: param })
      .then((res) => res)
      .catch((err) => err);
  }
}
