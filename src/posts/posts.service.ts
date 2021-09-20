import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { renameKey } from '@shared';
import { Model } from 'mongoose';
import { CreatePostInput } from './dto/create-post.input';
import { SearchPostCondInput } from './dto/search-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<PostDocument>,
  ) {}

  async create(createPostInput: CreatePostInput): Promise<Post> {
    const createdPost = new this.postModel(createPostInput);
    return await createdPost
      .save()
      .then((res) => {
        Logger.log(`create: post _id:${res._id}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`create: ${err}`);
        return err;
      });
  }

  async listarTudo(filters?: SearchPostCondInput, qtde?: any) {
    for (let item in filters) {
      if (!!filters[item]['in']) filters[item] = await renameKey(filters[item], 'in', '$in');
      if (!!filters[item]['gte']) filters[item] = await renameKey(filters[item], 'gte', '$gte');
      if (!!filters[item]['lte']) filters[item] = await renameKey(filters[item], 'lte', '$lte');
      if (!!filters[item]['lt']) filters[item] = await renameKey(filters[item], 'lt', '$lt');
      if (!!filters[item]['gt']) filters[item] = await renameKey(filters[item], 'gt', '$gt');
    }
    if (filters?.or != undefined && Object.keys(filters?.or)?.length === 0) filters.or = [{}];
    if (filters?.or != undefined) filters = await renameKey(filters, 'or', '$or');
    return await this.postModel
      .find({ ...filters })
      .limit(qtde)
      .then((res) => {
        res.forEach((el) => Logger.log(`findAll: ${el._id}`));
        return res;
      })
      .catch((err) => {
        Logger.log(`findAll: ${err}`);
        return err;
      });
  }

  async findOne(_id: string): Promise<Post> {
    return await this.postModel
      .findOne({ _id: _id })
      .then((res) => {
        Logger.log(`findOne: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`findOne: ${err}`);
        return err;
      });
  }

  async update(id: string, updatePostInput: UpdatePostInput): Promise<Post> {
    return await this.postModel
      .findByIdAndUpdate(id, updatePostInput, {
        new: true,
        useFindAndModify: false,
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

  async remove(id: string): Promise<boolean> {
    return await this.postModel
      .findByIdAndDelete(id)
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
