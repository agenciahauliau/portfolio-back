import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@ObjectType()
@Schema({ timestamps: true })
export class File {
  @Field(() => ID, { description: 'ID do arquivo', nullable: true })
  readonly _id: string;

  @Field(() => Int, {
    description:
      'ID numérico do documento do arquivo, mais fácil para utilizar apesar de ser apenas um contador',
    nullable: true,
  })
  readonly fileId?: number;

  @Field(() => String, { description: 'Nome do arquivo', nullable: true })
  @Prop()
  readonly name?: string;

  @Field(() => String, { description: 'Tipo do arquivo', nullable: true })
  @Prop()
  readonly tipo?: string;

  @Field(() => String, { description: 'Texto alternativo', nullable: true })
  @Prop()
  readonly altText?: string;

  @Field({ description: 'Quando foi criado' })
  @Prop({ default: Date.now })
  readonly createdAt: number;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: number;
}

export type FileDocument = File & Document;
export const FileSchema = SchemaFactory.createForClass(File);
