import { CreateLeadInput } from './create-lead.input';
import { InputType, Field, Float, PartialType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { Imovel } from '../../imoveis/entities/imovel.entity';

@InputType()
export class UpdateLeadInput extends PartialType(CreateLeadInput) {
  @Field({ nullable: true })
  @IsOptional()
  tipoLead: string;

  @Field({ nullable: true })
  @IsOptional()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  nome: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  telefone: number;

  @Field({ nullable: true })
  @IsOptional()
  comentarios: string;

  @Field({ nullable: true })
  @IsOptional()
  preferenciaDeContato: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  imoveis?: MongooseSchema.Types.ObjectId[] | Imovel[];
}
