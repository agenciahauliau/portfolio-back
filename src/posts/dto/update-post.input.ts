import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { CreatePostInput } from './create-post.input';
import { File } from '../../files/entities/file.entity';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  titulo?: string;

  @Field({ nullable: true })
  descricao?: string;

  @Field({ nullable: true })
  conteudo?: string;

  @Field(() => [String], { nullable: true })
  imagemPrincipal?: MongooseSchema.Types.ObjectId[] | File[];

  @Field(() => [String], { nullable: true })
  categoria?: string[];

  @Field(() => [String], { nullable: true })
  tags?: string[];
}
