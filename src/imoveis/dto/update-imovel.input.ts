import { CreateImovelInput } from './create-imovel.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { Galeria } from 'src/galeria/entities/galeria.entity';
import { Tipologia } from '../entities/tipologia.entity';

@InputType()
export class UpdateImovelInput extends PartialType(CreateImovelInput) {
  @Field({ nullable: true })
  @IsOptional()
  nomeImovel: string;

  @Field({ nullable: true })
  @IsOptional()
  imagemPrincipal: string;

  @Field({ nullable: true })
  @IsOptional()
  categoriaImovel: string;

  @Field({ nullable: true })
  @IsOptional()
  jardins?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  descricaoImovel: string;

  @Field({ nullable: true })
  @IsOptional()
  tipoNegociacao: string;

  @Field({ nullable: true })
  @IsOptional()
  statusLancamento: string;

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

  @Field(() => Int, { nullable: true })
  @IsOptional()
  andarImovel: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  qtdeQuarto: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  qtdeBanheiro: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  qtdeSuites: number;

  @Field(() => Int, { nullable: true })
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
  numeroLogradouro?: string;

  @Field({ nullable: true })
  @IsOptional()
  complemento?: string;

  @Field({ nullable: true })
  @IsOptional()
  cep: string;

  @Field({ nullable: true })
  @IsOptional()
  cidade: string;

  @Field({ nullable: true })
  @IsOptional()
  uf: string;

  @Field(() => [String], {
    nullable: true,
  })
  @IsOptional()
  imagensAdicionais?: [string];

  @Field({ nullable: true })
  @IsOptional()
  previsaoLancamento?: number;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  imgPlantaCondominio?: [string];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  comodidadesImovel?: [string];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  comodidadesCondominio?: [string];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  galerias?: MongooseSchema.Types.ObjectId[] | Galeria[];

  @Field(() => [Tipologia], { nullable: true })
  @IsOptional()
  tipologias?: Tipologia[];
}
