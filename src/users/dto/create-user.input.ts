import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsLowercase,
  NotContains,
  MaxLength,
  Min,
  Max,
  IsOptional,
  IsAlphanumeric,
  IsInt,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Nome de usuário' })
  @IsNotEmpty()
  @IsString()
  @IsLowercase()
  @IsAlphanumeric()
  @NotContains(' ', {
    message: 'Nome de usuário não pode conter espaços ou caracteres especiais',
  })
  username: string;

  @Field(() => String, { description: 'Endereço de email' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String, { description: 'Senha (mínimo 8 caracteres)' })
  @IsString()
  @IsNotEmpty()
  @NotContains(' ', { message: 'Não pode colocar espaço na senha.' })
  @MinLength(8, {
    message: 'Senha muito curta, o mínimo são $constraint1 caracteres',
  })
  @MaxLength(60, {
    message: 'Senha grande demais, o máximo são $constraint1 caracteres',
  })
  senha: string;

  @Field(() => Int, { description: 'Nível de permissão', nullable: true })
  @IsInt()
  @IsOptional()
  @Min(1, { message: 'Menor que 1 não pode, foi mal' })
  @Max(8, { message: 'Maior que 8 não pode, foi mal' })
  nivel: number;
}
