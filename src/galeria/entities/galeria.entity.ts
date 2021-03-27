import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Galeria {
  @Field(() => ID, { description: 'ID, duh ¬¬' })
  readonly _id: string;

  @Field(() => String)
  @Prop({ unique: true })
  nomeGaleria: string;

  @Field(() => [String])
  @Prop()
  url: [string];

  @Field(() => String)
  @Prop()
  arquivoDestaque: string;

  @Field(() => [String])
  @Prop()
  idImovel: [string];

  @Field({ description: 'Quando foi criado' })
  @Prop({ default: Date.now })
  readonly createdAt: number;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: number;
}

export type GaleriaDocument = Galeria & Document;

export const GaleriaSchema = SchemaFactory.createForClass(Galeria);
