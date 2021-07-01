import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Imovel } from '../../imoveis/entities/imovel.entity';

@ObjectType()
@Schema({ timestamps: true })
export class Lead {
  @Field(() => ID, { description: 'ID do lead' })
  readonly _id: string;

  @Field(() => Int, {
    description: 'ID numérico do lead, mais fácil para utilizar apesar de ser apenas um contador',
    nullable: true,
  })
  readonly leadId?: number;

  @Field(() => String, { description: 'Tipo do lead', nullable: true })
  @Prop()
  tipoLead: string;

  @Field(() => String, { description: 'Campo nome do lead', nullable: true })
  @Prop()
  nome: string;

  @Field(() => String, { description: 'Campo email do lead', nullable: true })
  @Prop()
  email: string;

  @Field(() => Float, { description: 'Campo telefone do lead', nullable: true })
  @Prop()
  telefone: number;

  @Field(() => String, { description: 'Campo de comentário', nullable: true })
  @Prop()
  comentarios: string;

  @Field(() => String, { description: 'Campo de preferência de contato', nullable: true })
  @Prop()
  preferenciaDeContato: string;

  @Field(() => [Imovel], { nullable: true })
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Imovel.name })
  imoveis: MongooseSchema.Types.ObjectId[] | Imovel[];

  @Field({ description: 'Quando foi criado', nullable: true })
  @Prop({ default: Date.now })
  readonly createdAt: number;

  @Field({ description: 'Quando foi atualizado', nullable: true })
  @Prop()
  readonly updatedAt: number;
}

export type LeadDocument = Lead & Document;

export const LeadSchema = SchemaFactory.createForClass(Lead);
