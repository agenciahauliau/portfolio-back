import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { File } from '../../files/entities/file.entity';

@InputType()
export class CreateConfiguracaoInput {
  @Field(() => String, { description: 'Tipo da configuração: [rodapé|banner|slider|etc]' })
  @IsString({ message: '$property têm que ser do tipo string' })
  tipo: string;

  @Field(() => String, { description: 'Título, se for necessário', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  titulo?: string;

  @Field(() => String, { description: 'Link do Instagram', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  instagram?: string;

  @Field(() => String, { description: 'Campo para link do facebook', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  facebook?: string;

  @Field(() => String, { description: 'Campo para link do LinkedIn', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  linkedin?: string;

  @Field(() => String, { description: 'Campo para link do Whatsapp', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  whatsapp?: string;

  @Field(() => String, { description: 'Campo para número de telefone', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  telefone?: string;

  @Field(() => String, { description: 'Campo para endereço', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  endereco?: string;

  @Field(() => [String], { description: 'Campo para arquivo', nullable: true })
  @IsOptional()
  arquivos?: MongooseSchema.Types.ObjectId[] | File[];
}
