import { CreateGaleriaInput } from './create-galeria.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateGaleriaInput extends PartialType(CreateGaleriaInput) {
  @Field(() => String, { nullable: true })
  @IsOptional()
  nomeGaleria: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  url: [string];

  @Field(() => String, { nullable: true })
  @IsOptional()
  arquivoDestaque: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  idImovel: [string];
}
