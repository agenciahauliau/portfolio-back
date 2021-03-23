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
  readonly nomeGaleria: string;

  @Field(() => [String])
  @Prop()
  readonly url: [string];

  @Field(() => String)
  @Prop()
  readonly arquivoDestaque: string;

  @Field(() => [String])
  @Prop()
  readonly idImovel: [string];
}

export type GaleriaDocument = Galeria & Document;

export const GaleriaSchema = SchemaFactory.createForClass(Galeria);
