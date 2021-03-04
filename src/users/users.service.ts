import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
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
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(param: string): Promise<User> {
    return await this.userModel.findOne({ username: param }).exec();
  }

  async update(param: string, updateUserInput: UpdateUserInput): Promise<User> {
    return await this.userModel
      .findOneAndUpdate({ username: param }, updateUserInput, {
        new: true,
        useFindAndModify: true,
      })
      .exec();
  }

  async remove(param: string) {
    return await this.userModel
      .findOneAndDelete({ username: param }, { useFindAndModify: true })
      .exec();
  }
}
