import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class ImgImovel {
  @Field(() => ID, { description: 'ID, duh ¬¬' })
  readonly _id: String;

  @Field()
  @Prop()
  readonly urlImagem: String;

  @Field()
  @Prop()
  readonly nomeGaleria: String;
}

export type ImgImovelDocument = ImgImovel & Document;

export const ImgImovelSchema = SchemaFactory.createForClass(ImgImovel);
