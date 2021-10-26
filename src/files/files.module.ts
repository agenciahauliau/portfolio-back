import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesResolver } from './files.resolver';
import { FilesController } from './files.controller';
import { File, FileSchema } from './entities/file.entity';

import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: File.name,
        useFactory: (connection: Connection) => {
          const schema = FileSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(require('mongoose-unique-validator'));
          schema.plugin(AutoIncrement, {
            inc_field: 'fileId',
            start_seq: 1,
          });
          return schema;
        },
        inject: [getConnectionToken()],
      },
    ]),
  ],
  providers: [FilesResolver, FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
