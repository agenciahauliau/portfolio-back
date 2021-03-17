import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { ImgImovel } from './imagens.entity';
import { VideoImovel } from './videos.entity';

@ObjectType()
@Schema({ timestamps: true })
export class Imovel {
  @Field(() => ID, { description: 'ID do imóvel' })
  readonly _id: string;

  @Field(() => String, { description: 'Categoria do imóvel' })
  @Prop({ trim: true })
  readonly categoriaImovel: string;

  @Field(() => Boolean, {
    description: 'É um empreendimento Jardins?',
    nullable: true,
  })
  @Prop()
  readonly jardins: boolean;

  @Field(() => String, { description: 'Descrição do imóvel' })
  @Prop()
  readonly descricaoImovel: string;

  @Field(() => String, {
    description: 'Tipo de necociação (R) Revenda, (A) Aluguel, (L) Lançamento',
  })
  @Prop({ trim: true })
  readonly tipoNegociacao: string;

  @Field(() => String, { description: 'Status do imóvel' })
  @Prop({ trim: true })
  readonly statusImovel: string;

  @Field(() => Boolean, { description: 'Aceita permuta?' })
  @Prop()
  readonly aceitaPermuta: boolean;

  @Field(() => Boolean, { description: 'É mobiliado?' })
  @Prop()
  readonly mobiliado: boolean;

  @Field(() => Float, { description: 'Valor do imóvel. Ex: 324000.56' })
  @Prop()
  readonly valorImovel: number;

  @Field(() => Float, { description: 'Valor do IPTU. Ex: 324000.56' })
  @Prop()
  readonly valorIPTU: number;

  @Field(() => Float, { description: 'Valor do Condomínio. Ex: 324000.56' })
  @Prop()
  readonly valorCondominio: number;

  @Field(() => Float, { description: 'Área total do imóvel. Ex: 224.56' })
  @Prop()
  readonly areaTotal: number;

  @Field(() => Float, { description: 'Área construída. Ex: 300.5' })
  @Prop()
  readonly areaConstruida: number;

  @Field(() => Int, {
    description: 'Andar do imóvel, se for prédio',
    nullable: true,
  })
  @Prop()
  readonly andarImovel: number;

  @Field(() => Int, { description: 'Quantidade de quartos' })
  @Prop()
  readonly qtdeQuarto: number;

  @Field(() => Int, { description: 'Quantidade de banheiros' })
  @Prop()
  readonly qtdeBanheiro: number;

  @Field(() => Int, { description: 'Quantidade de Suítes', nullable: true })
  @Prop()
  readonly qtdeSuites: number;

  @Field(() => Int, { description: 'Quantidade de Vagas', nullable: true })
  @Prop()
  readonly qtdeVagas: number;

  @Field(() => String, { description: 'Nome da Construtora' })
  @Prop()
  readonly nomeConstrutora: string;

  @Field(() => String, { description: 'Bairro do imóvel' })
  @Prop()
  readonly bairro: string;

  @Field(() => String, { description: 'Endereço. Ex. Rua, Avenida' })
  @Prop()
  readonly logradouro: string;

  @Field(() => String, { description: 'Número do endereço', nullable: true })
  @Prop()
  readonly numeroLogradouro: string;

  @Field(() => String, {
    description: 'Campo para complemento',
    nullable: true,
  })
  @Prop()
  readonly complemento: string;

  @Field(() => Int, { description: 'CEP do endereço' })
  @Prop()
  readonly cep: number;

  @Field(() => String, { description: 'Cidade do imóvel' })
  @Prop()
  readonly cidade: string;

  @Field(() => String, {
    description: 'UF (unidade federativa) ou estado mesmo',
  })
  @Prop()
  readonly uf: string;

  @Field(() => [String], {
    description: 'Detalhes do condomínio. Segurança 24hs, Academia,',
    nullable: true,
  })
  @Prop()
  readonly comodidadesImovel: [string];

  @Field(() => [String], {
    description:
      'Detalhes a mais do imóvel. Ex: Jardim, Espaço Gourmet, Piscina',
    nullable: true,
  })
  @Prop()
  readonly comodidadesCondominio: [string];

  /*   @Field(() => [String])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: ImgImovel.name })
  readonly imagensImovel: ImgImovel[];

  @Field(() => [String])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: VideoImovel.name })
  readonly videosImovel: VideoImovel[]; */

  @Field({ description: 'Quando foi criado' })
  @Prop({ default: Date.now })
  readonly createdAt: number;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: number;
}

export type ImovelDocument = Imovel & Document;

export const ImovelSchema = SchemaFactory.createForClass(Imovel);
