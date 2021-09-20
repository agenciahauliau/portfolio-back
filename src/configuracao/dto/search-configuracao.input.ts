import { InputType, Field, ID } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class SearchConfiguracaoInput {
  @Field(() => ID, { nullable: true })
  @IsOptional()
  _id?: string;

  @Field(() => Number, { nullable: true })
  @IsOptional()
  configId?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  tipo: string;
}
