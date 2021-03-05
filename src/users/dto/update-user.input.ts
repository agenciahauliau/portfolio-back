import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { nullable: true })
  @IsOptional()
  username: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  email: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  senha: string;
}
