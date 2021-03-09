import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { nullable: true })
  @IsOptional()
  username: String;

  @Field(() => String, { nullable: true })
  @IsOptional()
  email: String;

  @Field(() => String, { nullable: true })
  @IsOptional()
  senha: String;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  nivel: Number;
}
