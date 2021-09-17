import { InputType, Field, ID } from '@nestjs/graphql';
import { Filtro } from '@shared';
import { IsOptional } from 'class-validator';

@InputType()
export class SearchFileInput {
  @Field(() => ID, { nullable: true })
  @IsOptional()
  _id?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  name?: string;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  tipo?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  altText?: object;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  createdAt?: object | number;

  @Field(() => Filtro, { nullable: true })
  @IsOptional()
  updatedAt?: object | number;
}
