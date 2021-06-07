import { CreatePostInput } from './create-post.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

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

  @Field({ nullable: true })
  imagemPrincipal?: string;

  @Field(() => [String], { nullable: true })
  categoria?: string[];

  @Field(() => [String], { nullable: true })
  tags?: string[];
}
