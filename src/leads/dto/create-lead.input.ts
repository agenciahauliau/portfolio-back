import { InputType, Field, Float } from '@nestjs/graphql';
import { IsEmail, IsInt, IsOptional, IsString, Min, Max } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { Imovel } from '../../imoveis/entities/imovel.entity';

@InputType()
export class CreateLeadInput {
  @Field(() => String, { description: 'Tipo do Lead' })
  @IsString({ message: '$property têm que ser do tipo string' })
  tipoLead: string;

  @Field(() => String, { description: 'Campo email do lead' })
  @IsString({ message: '$property têm que ser do tipo string' })
  @IsEmail()
  email: string;

  @Field(() => String, { description: 'Campo nome do lead', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  @IsOptional()
  nome: string;

  @Field(() => Float, { description: 'Campo telefone do lead', nullable: true })
  @IsInt({ message: '$property têm que ser do tipo integer' })
  @Min(0, { message: '$property não pode ser menor que 0' })
  @Max(999999999999, { message: '$property não pode ser maior que 13 dígitos' })
  @IsOptional()
  telefone: number;

  @Field(() => String, { description: 'Campo de comentário', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  @IsOptional()
  comentarios: string;

  @Field(() => String, { description: 'Campo de preferência de contato', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  @IsOptional()
  preferenciaDeContato: string;

  @Field(() => String, {
    description: 'Campo de tipo de negociação para criação de um imóvel.',
    nullable: true,
  })
  @IsString({ message: '$property têm que ser do tipo string' })
  @IsOptional()
  tipoNegociacao: string;

  @Field(() => String, {
    description: 'Campo da categoria do imovel para criação de um imovel.',
    nullable: true,
  })
  @IsString({ message: '$property têm que ser do tipo string' })
  @IsOptional()
  categoriaImovel: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  imoveis: MongooseSchema.Types.ObjectId[] | Imovel[];
}
