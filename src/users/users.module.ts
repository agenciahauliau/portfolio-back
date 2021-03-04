import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.plugin(require('mongoose-unique-validator'));
          return schema;
        },
      },
    ]),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
