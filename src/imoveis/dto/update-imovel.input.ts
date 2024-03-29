import { CreateImovelInput } from './create-imovel.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { Tipologia } from '../entities/tipologia.entity';
import { Galeria } from '../entities/galeria.entity';
import { File as FileTipo } from '../../files/entities/file.entity';

@InputType()
export class UpdateImovelInput extends PartialType(CreateImovelInput) {
  @Field({ nullable: true })
  @IsOptional()
  nomeImovel: string;

  @Field({ nullable: true })
  @IsOptional()
  destaque?: boolean;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  imagemPrincipal: MongooseSchema.Types.ObjectId[] | FileTipo[];

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
  nomeProprietario: string;

  @Field({ nullable: true })
  @IsOptional()
  telefoneProprietario: string;

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

  @Field(() => [Galeria], {
    nullable: true,
  })
  @IsOptional()
  galerias?: Galeria[];

  @Field({ nullable: true })
  @IsOptional()
  previsaoLancamento?: number;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  imgPlantaCondominio?: MongooseSchema.Types.ObjectId[] | FileTipo[];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  comodidadesImovel?: [string];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  comodidadesCondominio?: [string];

  @Field(() => [Tipologia], { nullable: true })
  @IsOptional()
  tipologias?: Tipologia[];
}
