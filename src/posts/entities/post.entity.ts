import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Post {
  @Field(() => ID, { description: 'ID do post' })
  readonly _id: string;

  @Field(() => String, { description: 'Status do lead: [publicado|rascunho]' })
  @Prop()
  readonly status: string;

  @Field(() => String, { description: 'Título do post' })
  @Prop()
  readonly titulo: string;

  @Field(() => String, { description: 'Breve descrição do post' })
  @Prop()
  readonly descricao: string;

  @Field(() => String, { description: 'Conteúdo do post' })
  @Prop()
  readonly conteudo: string;

  @Field(() => String, { description: 'Imagem principal do post' })
  @Prop()
  readonly imagemPrincipal: string;

  @Field(() => [String], { description: 'Categoria do post' })
  @Prop()
  readonly categoria: string[];

  @Field(() => [String], { description: 'Tags do post' })
  @Prop()
  readonly tags: string[];

  @Field({ description: 'Quando foi criado' })
  @Prop({ default: Date.now })
  readonly createdAt: number;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: number;
}

export type PostDocument = Post & Document;

export const PostSchema = SchemaFactory.createForClass(Post);
