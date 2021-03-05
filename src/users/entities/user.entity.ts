import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema({ timestamps: true })
export class User {
  @Field(() => ID)
  readonly _id: string;

  @Prop({ unique: true, trim: true, lowercase: true, query: true })
  @Field()
  readonly username: string;

  @Prop({ unique: true })
  @Field()
  readonly email: string;

  @Prop()
  readonly senha: string;

  @Field()
  @Prop()
  readonly createdAt: String;

  @Field()
  @Prop()
  readonly updatedAt: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
