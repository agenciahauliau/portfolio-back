import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './entities/post.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Post.name,
        useFactory: () => {
          const schema = PostSchema;
          schema.plugin(require('mongoose-unique-validator'));
          schema.plugin(require('mongoose-update-versioning'));
          return schema;
        },
      },
    ]),
  ],
  providers: [PostsResolver, PostsService],
})
export class PostsModule {}
