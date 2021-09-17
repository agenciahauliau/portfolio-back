import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateFileInput {
  @Field(() => String, { description: 'Nome do arquivo' })
  @IsString({ message: '$property têm que ser do tipo string' })
  name?: string;

  @Field(() => String, { description: 'Tipo do arquivo' })
  @IsString({ message: '$property têm que ser do tipo string' })
  tipo?: string;

  @Field(() => String, { description: 'Texto alternativo', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  altText?: string;
}
