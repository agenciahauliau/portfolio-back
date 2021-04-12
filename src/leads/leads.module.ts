import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsResolver } from './leads.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Lead } from './entities/lead.entity';
import { GaleriaSchema } from 'src/galeria/entities/galeria.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Lead.name,
        useFactory: () => {
          const schema = GaleriaSchema;
          schema.plugin(require('mongoose-unique-validator'));
          return schema;
        },
      },
    ]),
  ],
  providers: [LeadsResolver, LeadsService],
})
export class LeadsModule {}
