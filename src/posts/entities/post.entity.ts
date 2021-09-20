import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { File } from '../../files/entities/file.entity';

@ObjectType()
@Schema({ timestamps: true })
export class Post {
  @Field(() => ID, { description: 'ID do post' })
  readonly _id: string;

  @Field(() => Int, {
    description: 'ID numérico do imóvel, mais fácil para utilizar apesar de ser apenas um contador',
    nullable: true,
  })
  readonly postId?: number;

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

  @Field(() => [File], { description: 'Imagem principal do post' })
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: File.name })
  readonly imagemPrincipal: MongooseSchema.Types.ObjectId[] | File[];

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
