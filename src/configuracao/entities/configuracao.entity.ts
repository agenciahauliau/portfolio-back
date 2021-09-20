import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { File } from '../../files/entities/file.entity';

@ObjectType()
@Schema({ timestamps: true })
export class Configuracao {
  @Field(() => ID, { description: 'ID da configuração' })
  readonly _id: string;

  @Field(() => Int, {
    description: 'ID numérico da configuração, mais fácil para identificar',
    nullable: true,
  })
  readonly configId?: number;

  @Field(() => String, { description: 'Tipo da configuração', nullable: true })
  @Prop()
  readonly tipo?: string;

  @Field(() => String, { description: 'Título', nullable: true })
  @Prop()
  readonly titulo?: string;

  @Field(() => String, { description: 'Link do instagram', nullable: true })
  @Prop()
  readonly instagram?: string;

  @Field(() => String, { description: 'Link do facebook', nullable: true })
  @Prop()
  readonly facebook?: string;

  @Field(() => String, { description: 'Link do linkedin', nullable: true })
  @Prop()
  readonly linkedin?: string;

  @Field(() => String, { description: 'Link do whatsapp', nullable: true })
  @Prop()
  readonly whatsapp?: string;

  @Field(() => String, { description: 'Número de telefone', nullable: true })
  @Prop()
  readonly telefone?: string;

  @Field(() => String, { description: 'Campo de endereço', nullable: true })
  @Prop()
  readonly endereco?: string;

  @Field(() => [File], { description: 'Arquivo', nullable: true })
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: File.name })
  readonly arquivo?: MongooseSchema.Types.ObjectId[] | File[];

  @Field({ description: 'Quando foi criado' })
  @Prop({ default: Date.now })
  readonly createdAt: number;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: number;
}

export type ConfiguracaoDocument = Configuracao & Document;
export const ConfiguracaoSchema = SchemaFactory.createForClass(Configuracao);
