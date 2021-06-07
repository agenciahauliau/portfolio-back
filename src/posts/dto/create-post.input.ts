import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'Status do lead: [publicado|rascunho]' })
  @IsString({ message: '$property têm que ser do tipo string' })
  status: string;

  @Field(() => String, { description: 'Título do Post', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  titulo: string;

  @Field(() => String, { description: 'Breve descrição do post', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  descricao: string;

  @Field(() => String, { description: 'Conteúdo do post', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  conteudo: string;

  @Field(() => String, { description: 'Imagem principal do post', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  imagemPrincipal: string;

  @Field(() => [String], { description: 'Categorias do post', nullable: true })
  @IsArray()
  categoria: string[];

  @Field(() => [String], { description: 'Tags do post', nullable: true })
  @IsArray()
  tags: string[];
}
