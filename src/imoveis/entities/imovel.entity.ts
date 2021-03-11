import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { ImgImovel } from './imagens.entity';
import { VideoImovel } from './videos.entity';

@ObjectType()
@Schema({ timestamps: true })
export class Imovel {
  @Field(() => ID, { description: 'ID do imóvel' })
  readonly _id: String;

  @Field(() => String, { description: 'Categoria do imóvel' })
  @Prop({ trim: true, lowercase: true })
  readonly categoriaImovel: String;

  @Field(() => Boolean, { description: 'É um empreendimento Jardins?' })
  @Prop()
  readonly jardins: Boolean;

  @Field(() => String, { description: 'Descrição do imóvel' })
  @Prop()
  readonly descricaoImovel: String;

  @Field(() => String, {
    description: 'Tipo de necociação (R) Revenda, (A) Aluguel, (L) Lançamento',
  })
  @Prop({ trim: true })
  readonly tipoNegociacao: String;

  @Field(() => String, { description: 'Status do imóvel' })
  @Prop({ trim: true, lowercase: true })
  readonly statusImovel: String;

  @Field(() => Boolean, { description: 'Aceita permuta?' })
  @Prop()
  readonly aceitaPermuta: Boolean;

  @Field(() => Boolean, { description: 'É mobiliado?' })
  @Prop()
  readonly mobiliado: Boolean;

  @Field(() => Float, { description: 'Valor do imóvel. Ex: 324000.56' })
  @Prop()
  readonly valorImovel: Number;

  @Field(() => Float, { description: 'Valor do IPTU. Ex: 324000.56' })
  @Prop()
  readonly valorIPTU: Number;

  @Field(() => Float, { description: 'Valor do Condomínio. Ex: 324000.56' })
  @Prop()
  readonly valorCondominio: Number;

  @Field(() => Float, { description: 'Área total do imóvel. Ex: 224.56' })
  @Prop()
  readonly areaTotal: Number;

  @Field(() => Float, { description: 'Área construída. Ex: 300.5' })
  @Prop()
  readonly areaConstruida: Number;

  @Field(() => Int, { description: 'Andar do imóvel, se for prédio' })
  @Prop()
  readonly andarImovel: Number;

  @Field(() => Int, { description: 'Quantidade de quartos' })
  @Prop()
  readonly qtdeQuarto: Number;

  @Field(() => Int, { description: 'Quantidade de banheiros' })
  @Prop()
  readonly qtdeBanheiro: Number;

  @Field(() => Int, { description: 'Quantidade de Suítes' })
  @Prop()
  readonly qtdeSuites: Number;

  @Field(() => Int, { description: 'Quantidade de Vagas' })
  @Prop()
  readonly qtdeVagas: Number;

  @Field(() => String, { description: 'Nome da Construtora' })
  @Prop()
  readonly nomeConstrutora: String;

  @Field(() => String, { description: 'Bairro do imóvel' })
  @Prop()
  readonly bairro: String;

  @Field(() => String, { description: 'Endereço. Ex. Rua, Avenida' })
  @Prop()
  readonly logradouro: String;

  @Field(() => String, { description: 'Número do endereço' })
  @Prop()
  readonly numeroLogradouro: String;

  @Field(() => String, { description: 'Campo para complemento' })
  @Prop()
  readonly complemento: String;

  @Field(() => Int, { description: 'CEP do endereço' })
  @Prop()
  readonly cep: Number;

  @Field(() => String, { description: 'Cidade do imóvel' })
  @Prop()
  readonly cidade: String;

  @Field(() => String, {
    description: 'UF (unidade federativa) ou estado mesmo',
  })
  @Prop()
  readonly uf: String;

  @Field(() => [String], {
    description: 'Detalhes do condomínio. Segurança 24hs, Academia,',
  })
  @Prop()
  readonly comodidadesImovel: [String];

  @Field(() => [String], {
    description:
      'Detalhes a mais do imóvel. Ex: Jardim, Espaço Gourmet, Piscina',
  })
  @Prop()
  readonly comodidadesCondominio: [String];

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
