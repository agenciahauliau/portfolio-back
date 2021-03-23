import { InputType, Field, ID } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class SearchImovelInput {
  @Field(() => ID, { nullable: true })
  @IsOptional()
  _id: string;

  @Field({ nullable: true })
  @IsOptional()
  nomeImovel: string;

  @Field({ nullable: true })
  @IsOptional()
  categoriaImovel: string;

  @Field({ nullable: true })
  @IsOptional()
  jardins: boolean;

  @Field({ nullable: true })
  @IsOptional()
  descricaoImovel: string;

  @Field({ nullable: true })
  @IsOptional()
  tipoNegociacao: string;

  @Field({ nullable: true })
  @IsOptional()
  statusImovel: string;

  @Field({ nullable: true })
  @IsOptional()
  aceitaPermuta: boolean;

  @Field({ nullable: true })
  @IsOptional()
  mobiliado: boolean;

  @Field({ nullable: true })
  @IsOptional()
  valorImovel: number;

  @Field({ nullable: true })
  @IsOptional()
  valorEntrada: number;

  @Field({ nullable: true })
  @IsOptional()
  valorParcela: number;

  @Field({ nullable: true })
  @IsOptional()
  valorIPTU: number;

  @Field({ nullable: true })
  @IsOptional()
  valorCondominio: number;

  @Field({ nullable: true })
  @IsOptional()
  areaTotal: number;

  @Field({ nullable: true })
  @IsOptional()
  areaConstruida: number;

  @Field({ nullable: true })
  @IsOptional()
  andarImovel: number;

  @Field({ nullable: true })
  @IsOptional()
  qtdeQuarto: number;

  @Field({ nullable: true })
  @IsOptional()
  qtdeBanheiro: number;

  @Field({ nullable: true })
  @IsOptional()
  qtdeSuites: number;

  @Field({ nullable: true })
  @IsOptional()
  qtdeVagas: number;

  @Field({ nullable: true })
  @IsOptional()
  nomeConstrutora: string;

  @Field({ nullable: true })
  @IsOptional()
  bairro: string;

  @Field({ nullable: true })
  @IsOptional()
  logradouro: string;

  @Field({ nullable: true })
  @IsOptional()
  numeroLogradouro: string;

  @Field({ nullable: true })
  @IsOptional()
  complemento: string;

  @Field({ nullable: true })
  @IsOptional()
  cep: number;

  @Field({ nullable: true })
  @IsOptional()
  cidade: string;

  @Field({ nullable: true })
  @IsOptional()
  uf: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  comodidadesImovel: [string];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  comodidadesCondominio: [string];

  /*   @Field(() => [])
  imagensImovel: ImgImovel[];

  @Field(() => [])
  videosImovel: VideoImovel[]; */
}
