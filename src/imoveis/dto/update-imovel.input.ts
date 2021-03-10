import { CreateImovelInput } from './create-imovel.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateImovelInput extends PartialType(CreateImovelInput) {
  @Field(() => String, { nullable: true })
  @IsOptional()
  categoriaImovel: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  descricaoImovel: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  tipoNegociacao: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  statusImovel: string;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  aceitaPermuta: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  mobiliado: boolean;

  @Field(() => String, { nullable: true })
  @IsOptional()
  valorImovel: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  valorIPTU: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  valorCondominio: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  areaTotal: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  areaConstruida: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  andarImovel: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  qtdeQuarto: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  qtdeBanheiro: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  qtdeSuites: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  qtdeVagas: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  nomeConstrutora: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  bairro: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  logradouro: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  numeroLogradouro?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  complemento?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  cep: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  cidade: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  uf: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  comodiadesImovel?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  comodidadesCondominio?: string;

  /*   @Field(() => [])
  imagensImovel?: ImgImovel[];

  @Field(() => [])
  videosImovel?: VideoImovel[]; */
}
