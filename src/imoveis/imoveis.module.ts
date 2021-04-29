import { Module } from '@nestjs/common';
import { ImoveisService } from './imoveis.service';
import { ImoveisResolver } from './imoveis.resolver';
import { Imovel, ImovelSchema } from './entities/imovel.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Imovel.name,
        useFactory: () => {
          const schema = ImovelSchema;
          schema.plugin(require('mongoose-unique-validator'));
          schema.plugin(require('mongoose-update-versioning'));
          return schema;
        },
      },
    ]),
  ],
  providers: [ImoveisResolver, ImoveisService],
  exports: [ImoveisService],
})
export class ImoveisModule {}
