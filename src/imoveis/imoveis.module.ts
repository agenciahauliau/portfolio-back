import { Module } from '@nestjs/common';
import { ImoveisService } from './imoveis.service';
import { ImoveisResolver } from './imoveis.resolver';
import { Imovel, ImovelSchema } from './entities/imovel.entity';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [
    FilesModule,
    MongooseModule.forFeatureAsync([
      {
        name: Imovel.name,
        useFactory: (connection: Connection) => {
          const schema = ImovelSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(require('mongoose-unique-validator'));
          schema.plugin(require('mongoose-update-versioning'));
          schema.plugin(AutoIncrement, {
            inc_field: 'imovelId',
            start_seq: 1,
          });
          return schema;
        },
        inject: [getConnectionToken()],
      },
    ]),
  ],
  providers: [ImoveisResolver, ImoveisService],
  exports: [ImoveisService],
})
export class ImoveisModule {}
