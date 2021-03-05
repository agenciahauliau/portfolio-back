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
import { IsUserAlreadyExist } from '../validator/isUserAlreadyExist.validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Nome de usuário' })
  @IsNotEmpty()
  @IsString()
  @IsLowercase()
  @NotContains(' ', {
    message: 'Não pode conter espaços ou caracteres especiais',
  })
  @IsUserAlreadyExist({
    message: 'User $value already exists. Choose another name.',
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
    message: 'Senha muito curta, o mínimo é $constraint1 e você inseriu $value',
  })
  @MaxLength(60, {
    message:
      'Senha grande demais, o máximo é $constraint1 e você inseriu $value',
  })
  senha: String;
}
