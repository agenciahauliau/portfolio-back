import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { ImgImovel } from './imagens.entity';
import { VideoImovel } from './videos.entity';

@ObjectType()
@Schema({ timestamps: true })
export class Imovel {
  @Field(() => ID, { description: 'ID do imóvel' })
  readonly _id: String;

  @Field({ description: 'Categoria do imóvel' })
  @Prop({ trim: true, lowercase: true })
  readonly categoriaImovel: String;

  @Field({ description: 'Descrição do imóvel' })
  @Prop()
  readonly descricaoImovel: String;

  @Field({
    description: 'Tipo de necociação (R) Revenda, (A) Aluguel, (L) Lançamento',
  })
  @Prop({ trim: true })
  readonly tipoNegociacao: String;

  @Field({ description: 'Status do imóvel' })
  @Prop({ trim: true, lowercase: true })
  readonly statusImovel: String;

  @Field({ description: 'Aceita permuta?' })
  @Prop()
  readonly aceitaPermuta: Boolean;

  @Field({ description: 'É mobiliado?' })
  @Prop()
  readonly mobiliado: Boolean;

  @Field({ description: 'Valor do imóvel. Ex: 324000.56' })
  @Prop()
  readonly valorImovel: String;

  @Field({ description: 'Valor do IPTU. Ex: 324000.56' })
  @Prop()
  readonly valorIPTU: String;

  @Field({ description: 'Valor do Condomínio. Ex: 324000.56' })
  @Prop()
  readonly valorCondominio: String;

  @Field({ description: 'Área total do imóvel.' })
  @Prop()
  readonly areaTotal: String;

  @Field({ description: 'Área construída' })
  @Prop()
  readonly areaConstruida: String;

  @Field()
  @Prop()
  readonly andarImovel: String;

  @Field()
  @Prop()
  readonly qtdeQuarto: String;

  @Field()
  @Prop()
  readonly qtdeBanheiro: String;

  @Field()
  @Prop()
  readonly qtdeSuites: String;

  @Field()
  @Prop()
  readonly qtdeVagas: String;

  @Field()
  @Prop()
  readonly nomeConstrutora: String;

  @Field()
  @Prop()
  readonly bairro: String;

  @Field()
  @Prop()
  readonly logradouro: String;

  @Field()
  @Prop()
  readonly numeroLogradouro: String;

  @Field()
  @Prop()
  readonly complemento: String;

  @Field()
  @Prop()
  readonly cep: String;

  @Field()
  @Prop()
  readonly cidade: String;

  @Field({ description: 'UF (unidade federativa) ou estado mesmo' })
  @Prop()
  readonly uf: String;

  @Field()
  @Prop()
  readonly comodiadesImovel: String;

  @Field()
  @Prop()
  readonly comodidadesCondominio: String;

  /*   @Field(() => [String])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: ImgImovel.name })
  readonly imagensImovel: ImgImovel[];

  @Field(() => [String])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: VideoImovel.name })
  readonly videosImovel: VideoImovel[]; */

  @Field({ description: 'Quando foi criado' })
  @Prop()
  readonly createdAt: String;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: String;
}

export type ImovelDocument = Imovel & Document;

export const ImovelSchema = SchemaFactory.createForClass(Imovel);
