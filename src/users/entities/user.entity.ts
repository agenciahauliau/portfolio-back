import { ObjectType, Field, ID, HideField } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema({ timestamps: true })
export class User {
  @Field(() => ID, { description: 'ID, duh ¬¬' })
  readonly _id: string;

  @Field({ description: 'Nome de usuário' })
  @Prop({ unique: true, trim: true, lowercase: true, query: true })
  readonly username: string;

  @Field({ description: 'Endereço de email' })
  @Prop({ unique: true, trim: true, lowercase: true, query: true })
  readonly email: string;

  @HideField()
  @Prop()
  readonly senha: string;

  @Field({ description: 'Nível de permissão' })
  @Prop({ min: 1, max: 8 })
  readonly nivel: number;

  @Field({ description: 'Quando foi criado' })
  @Prop({ default: Date.now })
  readonly createdAt: number;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
