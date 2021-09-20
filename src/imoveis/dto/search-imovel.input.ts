import { InputType, Field, ID } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Tipologia } from '../entities/tipologia.entity';
import { Filtro } from '@shared';
import GraphQLJSON from 'graphql-type-json';
@InputType()
export class SearchImovelInput {
  @Field(() => ID, { nullable: true })
  @IsOptional()
  _id?: string;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  nomeImovel?: object;

  @Field({ nullable: true })
  @IsOptional()
  destaque?: boolean;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  imagemPrincipal?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  categoriaImovel?: object;

  @Field({ nullable: true })
  @IsOptional()
  jardins?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  descricaoImovel?: string;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  tipoNegociacao?: object;

  @Field({ nullable: true })
  @IsOptional()
  statusLancamento?: string;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  statusImovel?: object;

  @Field({ nullable: true })
  @IsOptional()
  aceitaPermuta?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  mobiliado?: boolean;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  valorImovel?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  valorEntrada?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  valorParcela?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  valorIPTU?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  valorCondominio?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  areaTotal?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  areaConstruida?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  andarImovel?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  qtdeQuarto?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  qtdeBanheiro?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  qtdeSuites?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  qtdeVagas?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  nomeConstrutora?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  nomeProprietario?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  telefoneProprietario?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  bairro?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  logradouro?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  numeroLogradouro?: object;

  @Field({ nullable: true })
  @IsOptional()
  complemento?: string;

  @Field({ nullable: true })
  @IsOptional()
  cep?: string;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  cidade?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  uf?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  previsaoLancamento?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  comodidadesImovel?: object | string[];

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  comodidadesCondominio?: object | string[];

  @Field(() => [Tipologia], { nullable: true })
  @IsOptional()
  tipologias?: Tipologia[];

  @Field(() => GraphQLJSON, {
    description:
      'Opção para "OU". Exemplo: $or: [{ bairro: "Alphaville" }, { bairro: "Bela Vista" }]',
    nullable: true,
  })
  or?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  createdAt?: object | number;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  updatedAt?: object | number;
}
