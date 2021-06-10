import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsResolver } from './leads.resolver';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import * as AutoIncrementFactory from 'mongoose-sequence';
import { Lead, LeadSchema } from './entities/lead.entity';
import { ImoveisModule } from 'src/imoveis/imoveis.module';

@Module({
  imports: [
    ImoveisModule,
    MongooseModule.forFeatureAsync([
      {
        name: Lead.name,
        useFactory: (connection: Connection) => {
          const schema = LeadSchema;
          const AutoIncrement = AutoIncrementFactory(connection);
          schema.plugin(require('mongoose-unique-validator'));
          schema.plugin(require('mongoose-update-versioning'));
          schema.plugin(AutoIncrement, {
            inc_field: 'leadId',
            start_seq: 1,
          });
          return schema;
        },
        inject: [getConnectionToken()],
      },
    ]),
  ],
  providers: [LeadsResolver, LeadsService],
})
export class LeadsModule {}
