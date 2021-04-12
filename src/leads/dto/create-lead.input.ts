import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsInt, IsOptional, IsString, Min } from 'class-validator';
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
  nome?: string;

  @Field(() => Int, { description: 'Campo telefone do lead', nullable: true })
  @IsInt({ message: '$property têm que ser do tipo integer' })
  @Min(0, { message: '$property não pode ser menor que 0' })
  telefone?: number;

  @Field(() => String, { description: 'Campo de comentário', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  comentarios?: string;

  @Field(() => String, { description: 'Campo de preferência de contato', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  preferenciaDeContato?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  imoveis?: MongooseSchema.Types.ObjectId[] | Imovel[];
}
