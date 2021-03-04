import { Module } from '@nestjs/common';
import { ImoveisService } from './imoveis.service';
import { ImoveisResolver } from './imoveis.resolver';

@Module({
  providers: [ImoveisResolver, ImoveisService]
})
export class ImoveisModule {}
