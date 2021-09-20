import { CreateConfiguracaoInput } from './create-configuracao.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { File } from '../../files/entities/file.entity';

@InputType()
export class UpdateConfiguracaoInput extends PartialType(CreateConfiguracaoInput) {
  @Field({ nullable: true })
  @IsOptional()
  tipo: string;

  @Field({ nullable: true })
  @IsOptional()
  titulo: string;

  @Field({ nullable: true })
  @IsOptional()
  instagram: string;

  @Field({ nullable: true })
  @IsOptional()
  facebook: string;

  @Field({ nullable: true })
  @IsOptional()
  linkedin: string;

  @Field({ nullable: true })
  @IsOptional()
  whatsapp: string;

  @Field({ nullable: true })
  @IsOptional()
  telefone: string;

  @Field({ nullable: true })
  @IsOptional()
  endereco: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  arquivos: MongooseSchema.Types.ObjectId[] | File[];
}
