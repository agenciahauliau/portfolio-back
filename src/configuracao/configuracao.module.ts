import { Module } from '@nestjs/common';
import { ConfiguracaoService } from './configuracao.service';
import { ConfiguracaoResolver } from './configuracao.resolver';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';
import { Configuracao, ConfiguracaoSchema } from './entities/configuracao.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Configuracao.name,
        useFactory: (connection: Connection) => {
          const schema = ConfiguracaoSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(require('mongoose-unique-validator'));
          schema.plugin(AutoIncrement, { inc_field: 'configId', start_seq: 1 });
          return schema;
        },
        inject: [getConnectionToken()],
      },
    ]),
  ],
  providers: [ConfiguracaoResolver, ConfiguracaoService],
})
export class ConfiguracaoModule {}
