import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsResolver } from './leads.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Lead, LeadSchema } from './entities/lead.entity';
import { ImoveisModule } from 'src/imoveis/imoveis.module';

@Module({
  imports: [
    ImoveisModule,
    MongooseModule.forFeatureAsync([
      {
        name: Lead.name,
        useFactory: () => {
          const schema = LeadSchema;
          schema.plugin(require('mongoose-unique-validator'));
          schema.plugin(require('mongoose-update-versioning'));
          return schema;
        },
      },
    ]),
  ],
  providers: [LeadsResolver, LeadsService],
})
export class LeadsModule {}
