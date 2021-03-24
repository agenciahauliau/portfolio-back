import { InputType, Field, ID } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class SearchGaleriaInput {
  @Field(() => ID, { nullable: true })
  @IsOptional()
  _id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  nomeGaleria: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  arquivoDestaque: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  url: [string];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  idImovel: [string];
}
