import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@ObjectType()
@Schema({ timestamps: true })
export class File {
  @Field(() => ID, { description: 'ID do arquivo' })
  readonly _id: string;

  @Field(() => String, { description: 'Nome do arquivo', nullable: true })
  @Prop()
  name?: string;

  @Field(() => String, { description: 'Tipo do arquivo', nullable: true })
  @Prop()
  tipo?: string;

  @Field(() => String, { description: 'Texto alternativo', nullable: true })
  @Prop()
  readonly altText?: string;

  @Field({ description: 'Secure URL', nullable: true })
  @Prop()
  secure_url?: string;
}

export type FileDocumnet = File & Document;
export const FileSchema = SchemaFactory.createForClass(File);
