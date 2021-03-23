import { Module } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { GaleriaResolver } from './galeria.resolver';
import { Galeria, GaleriaSchema } from './entities/galeria.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Galeria.name,
        useFactory: () => {
          const schema = GaleriaSchema;
          schema.plugin(require('mongoose-unique-validator'));
          return schema;
        },
      },
    ]),
  ],
  providers: [GaleriaResolver, GaleriaService],
})
export class GaleriaModule {}
