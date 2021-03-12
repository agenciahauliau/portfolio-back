import { InputType, Field, ID } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class SearchImovelInput {
  @Field(() => ID, { nullable: true })
  @IsOptional()
  _id: string;

  @Field({ nullable: true })
  @IsOptional()
  categoriaImovel: String;

  @Field({ nullable: true })
  @IsOptional()
  jardins: Boolean;

  @Field({ nullable: true })
  @IsOptional()
  descricaoImovel: String;

  @Field({ nullable: true })
  @IsOptional()
  tipoNegociacao: String;

  @Field({ nullable: true })
  @IsOptional()
  statusImovel: String;

  @Field({ nullable: true })
  @IsOptional()
  aceitaPermuta: Boolean;

  @Field({ nullable: true })
  @IsOptional()
  mobiliado: Boolean;

  @Field({ nullable: true })
  @IsOptional()
  valorImovel: Number;

  @Field({ nullable: true })
  @IsOptional()
  valorIPTU: Number;

  @Field({ nullable: true })
  @IsOptional()
  valorCondominio: Number;

  @Field({ nullable: true })
  @IsOptional()
  areaTotal: Number;

  @Field({ nullable: true })
  @IsOptional()
  areaConstruida: Number;

  @Field({ nullable: true })
  @IsOptional()
  andarImovel: Number;

  @Field({ nullable: true })
  @IsOptional()
  qtdeQuarto: Number;

  @Field({ nullable: true })
  @IsOptional()
  qtdeBanheiro: Number;

  @Field({ nullable: true })
  @IsOptional()
  qtdeSuites: Number;

  @Field({ nullable: true })
  @IsOptional()
  qtdeVagas: Number;

  @Field({ nullable: true })
  @IsOptional()
  nomeConstrutora: String;

  @Field({ nullable: true })
  @IsOptional()
  bairro: String;

  @Field({ nullable: true })
  @IsOptional()
  logradouro: String;

  @Field({ nullable: true })
  @IsOptional()
  numeroLogradouro: String;

  @Field({ nullable: true })
  @IsOptional()
  complemento: String;

  @Field({ nullable: true })
  @IsOptional()
  cep: Number;

  @Field({ nullable: true })
  @IsOptional()
  cidade: String;

  @Field({ nullable: true })
  @IsOptional()
  uf: String;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  comodidadesImovel: [String];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  comodidadesCondominio: [String];

  /*   @Field(() => [])
  imagensImovel: ImgImovel[];

  @Field(() => [])
  videosImovel: VideoImovel[]; */
}
