import { Module } from '@nestjs/common';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { Post, PostSchema } from './entities/post.entity';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Post.name,
        useFactory: (connection: Connection) => {
          const schema = PostSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(require('mongoose-unique-validator'));
          schema.plugin(require('mongoose-update-versioning'));
          schema.plugin(AutoIncrement, {
            inc_field: 'postId',
            start_seq: 1,
          });
          return schema;
        },
        inject: [getConnectionToken()],
      },
    ]),
  ],
  providers: [PostsResolver, PostsService],
})
export class PostsModule {}
