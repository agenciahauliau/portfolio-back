import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsLowercase,
  NotContains,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Nome de usuário' })
  @IsNotEmpty()
  @IsString()
  @IsLowercase()
  @NotContains(' ')
  username: String;

  @Field(() => String, { description: 'Endereço de email' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: String;

  @Field(() => String, { description: 'Senha (mínimo 8 caracteres)' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  senha: String;
}
