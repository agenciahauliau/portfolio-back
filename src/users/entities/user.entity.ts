import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema({ timestamps: true })
export class User {
  @Field(() => ID, { description: 'ID, duh ¬¬' })
  readonly _id: String;

  @Field({ description: 'Nome de usuário' })
  @Prop({ unique: true, trim: true, lowercase: true, query: true })
  readonly username: String;

  @Field({ description: 'Endereço de email' })
  @Prop({ unique: true, trim: true, lowercase: true, query: true })
  readonly email: String;

  @Prop()
  readonly senha: String;

  @Field({ description: 'Nível de permissão' })
  @Prop({ min: 1, max: 8 })
  readonly nivel: Number;

  @Field({ description: 'Quando foi criado' })
  @Prop()
  readonly createdAt: String;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
