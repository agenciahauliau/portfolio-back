import { InputType, Field } from '@nestjs/graphql';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsLowercase,
  NotContains,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Nome de usuário' })
  @IsNotEmpty()
  @IsString()
  @IsLowercase()
  @NotContains(' ', {
    message: 'Nome de usuário não pode conter espaços ou caracteres especiais',
  })
  username: String;

  @Field(() => String, { description: 'Endereço de email' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: String;

  @Field(() => String, { description: 'Senha (mínimo 8 caracteres)' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8, {
    message: 'Senha muito curta, o mínimo são $constraint1 caracteres',
  })
  @MaxLength(60, {
    message: 'Senha grande demais, o máximo são $constraint1 caracteres',
  })
  senha: String;
}
