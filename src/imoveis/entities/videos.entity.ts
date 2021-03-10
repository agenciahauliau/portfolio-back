import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class VideoImovel {
  @Field(() => ID, { description: 'ID, duh ¬¬' })
  readonly _id: String;

  @Field()
  @Prop()
  readonly urlVideo: String;

  @Field()
  @Prop()
  readonly nomeGaleria: String;
}

export type VideoImovelDocument = VideoImovel & Document;

export const VideoImovelSchema = SchemaFactory.createForClass(VideoImovel);
