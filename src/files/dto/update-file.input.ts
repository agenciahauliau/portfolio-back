import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateFileInput } from './create-file.input';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateFileInput extends PartialType(CreateFileInput) {
  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  tipo?: string;

  @Field({ nullable: true })
  @IsOptional()
  altText?: string;
}
