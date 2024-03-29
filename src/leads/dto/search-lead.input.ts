import { InputType, Field, ID } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class SearchLeadInput {
  @Field(() => ID, { nullable: true })
  @IsOptional()
  _id: string;

  @Field({ nullable: true })
  @IsOptional()
  tipoLead: string;

  @Field({ nullable: true })
  @IsOptional()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  nome: string;

  @Field({ nullable: true })
  @IsOptional()
  telefone: number;

  @Field({ nullable: true })
  @IsOptional()
  comentarios: string;

  @Field({ nullable: true })
  @IsOptional()
  preferenciaDeContato: string;
}
