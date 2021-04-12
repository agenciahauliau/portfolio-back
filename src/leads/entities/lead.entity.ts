import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Imovel } from '../../imoveis/entities/imovel.entity';

@ObjectType()
@Schema({ timestamps: true })
export class Lead {
  @Field(() => ID, { description: 'ID do lead' })
  readonly _id: string;

  @Field(() => String, { description: 'Tipo do lead' })
  @Prop()
  tipoLead: string;

  @Field(() => String, { description: 'Campo nome do lead' })
  @Prop()
  nome: string;

  @Field(() => String, { description: 'Campo email do lead' })
  @Prop()
  email: string;

  @Field(() => Int, { description: 'Campo telefone do lead' })
  @Prop()
  telefone: number;

  @Field(() => String, { description: 'Campo de comentário' })
  @Prop()
  comentarios: string;

  @Field(() => String, { description: 'Campo de preferência de contato' })
  @Prop()
  preferenciaDeContato: string;

  @Field(() => [Imovel])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Imovel.name })
  imoveis: MongooseSchema.Types.ObjectId[] | Imovel[];

  @Field({ description: 'Quando foi criado' })
  @Prop({ default: Date.now })
  readonly createdAt: number;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: number;
}

export type LeadDocument = Lead & Document;

export const LeadSchema = SchemaFactory.createForClass(Lead);
