import { InputType, Int, Field, Float } from '@nestjs/graphql';
import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';
import { Galeria } from 'src/galeria/entities/galeria.entity';

@InputType()
export class CreateImovelInput {
  @Field(() => String, { description: 'Nome do imóvel' })
  @IsString({ message: '$property têm que ser do tipo string' })
  nomeImovel: string;

  @Field(() => String, { description: 'URL da imagem principal do imovel' })
  @IsString({ message: '$property têm que ser do tipo string' })
  imagemPrincipal: string;

  @Field(() => String, { description: 'Categoria do imóvel' })
  @IsString({ message: '$property têm que ser do tipo string' })
  categoriaImovel: string;

  @Field(() => Boolean, {
    description: 'É um empreendimento Jardins?',
    nullable: true,
  })
  @IsOptional()
  @IsBoolean({ message: '$property só pode ser true ou false' })
  jardins?: boolean;

  @Field(() => String, { description: 'Descrição do imóvel' })
  @IsString({ message: '$property têm que ser do tipo string' })
  descricaoImovel: string;

  @Field(() => String, {
    description: 'Tipo de necociação (R) Revenda, (A) Aluguel, (L) Lançamento',
  })
  @IsString({ message: '$property têm que ser do tipo string' })
  tipoNegociacao: string;

  @Field(() => String, {
    description:
      'Se é um Lançamento imobiliário, ele pode ter status aprovado, pendente e não aprovado',
  })
  @IsString({ message: '$property têm que ser do tipo string' })
  statusLancamento: string;

  @Field(() => String, { description: 'Status do imóvel' })
  @IsString({ message: '$property têm que ser do tipo string' })
  statusImovel: string;

  @Field(() => Boolean, { description: 'Aceita permuta?' })
  @IsBoolean({ message: '$property só pode ser true ou false' })
  aceitaPermuta: boolean;

  @Field(() => Boolean, { description: 'É mobiliado?' })
  @IsBoolean({ message: '$property só pode ser true ou false' })
  mobiliado: boolean;

  @Field(() => Float, { description: 'Valor do imóvel. Ex: 324000.56' })
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
  @Min(0, { message: '$property não pode ser menor que 0' })
  valorImovel: number;

  @Field(() => Float, { description: 'Valor de entrada do imóvel, quando for lançamento' })
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
  @Min(0, { message: '$property não pode ser menor que 0' })
  valorEntrada?: number;

  @Field(() => Float, { description: 'Valor de parcela do imóvel, quando for lançamento' })
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
  @Min(0, { message: '$property não pode ser menor que 0' })
  valorParcela?: number;

  @Field(() => Float, { description: 'Valor do IPTU. Ex: 324000.56' })
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
  @Min(0, { message: '$property não pode ser menor que 0' })
  valorIPTU: number;

  @Field(() => Float, { description: 'Valor do Condomínio. Ex: 324000.56' })
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
  @Min(0, { message: '$property não pode ser menor que 0' })
  valorCondominio: number;

  @Field(() => Float, { description: 'Área total do imóvel. Ex: 224.56' })
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
  @Min(0, { message: '$property não pode ser menor que 0' })
  areaTotal: number;

  @Field(() => Float, { description: 'Área construída. Ex: 300.5' })
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 })
  @Min(0, { message: '$property não pode ser menor que 0' })
  areaConstruida: number;

  @Field(() => Int, {
    description: 'Andar do imóvel, se for prédio',
    nullable: true,
  })
  @IsInt({ message: '$property tem que ser número inteiro' })
  @Min(0, { message: '$property não pode ser menor que 0' })
  @IsOptional()
  andarImovel?: number;

  @Field(() => Int, { description: 'Quantidade de quartos' })
  @IsInt({ message: '$property tem que ser número inteiro' })
  @Min(0, { message: '$property não pode ser menor que 0' })
  qtdeQuarto: number;

  @Field(() => Int, { description: 'Quantidade de banheiros' })
  @IsInt({ message: '$property tem que ser número inteiro' })
  @Min(0, { message: '$property não pode ser menor que 0' })
  qtdeBanheiro: number;

  @Field(() => Int, { description: 'Quantidade de Suítes', nullable: true })
  @IsInt({ message: '$property tem que ser número inteiro' })
  @IsOptional()
  @Min(0, { message: '$property não pode ser menor que 0' })
  qtdeSuites?: number;

  @Field(() => Int, { description: 'Quantidade de Vagas', nullable: true })
  @IsInt({ message: '$property tem que ser número inteiro' })
  @Min(0, { message: '$property não pode ser menor que 0' })
  @IsOptional()
  qtdeVagas?: number;

  @Field(() => String, { description: 'Nome da Construtora' })
  @IsString({ message: '$property têm que ser do tipo string' })
  nomeConstrutora: string;

  @Field(() => String, { description: 'Bairro do imóvel' })
  @IsString({ message: '$property têm que ser do tipo string' })
  bairro: string;

  @Field(() => String, { description: 'Endereço. Ex. Rua, Avenida' })
  @IsString({ message: '$property têm que ser do tipo string' })
  logradouro: string;

  @Field(() => String, { description: 'Número do endereço', nullable: true })
  @IsString({ message: '$property têm que ser do tipo string' })
  @IsOptional()
  numeroLogradouro?: string;

  @Field(() => String, {
    description: 'Campo para complemento',
    nullable: true,
  })
  @IsString({ message: '$property têm que ser do tipo string' })
  @IsOptional()
  complemento?: string;

  @Field(() => String, { description: 'CEP do endereço' })
  @MinLength(8, { message: '$property não pode ser menor que 8 dígitos' })
  @MaxLength(8, { message: ' $property não pode ser maior que 8 dígitos' })
  cep: string;

  @Field(() => String, { description: 'Cidade do imóvel' })
  @IsString({ message: '$property têm que ser do tipo string' })
  cidade: string;

  @Field(() => String, {
    description: 'UF (unidade federativa) ou estado mesmo',
  })
  @IsString({ message: '$property têm que ser do tipo string' })
  uf: string;

  @Field(() => [String], {
    description: 'Imagens adicionais',
    nullable: true,
  })
  imagensAdicionais?: [string];

  @Field(() => [String], { description: 'Imagem da planta do condomínio', nullable: true })
  @IsOptional()
  @IsArray()
  imgPlantaCondominio?: [string];

  @Field(() => [String], {
    description: 'Detalhes do condomínio. Segurança 24hs, Academia,',
    nullable: true,
  })
  @IsOptional()
  @IsArray()
  comodidadesImovel?: [string];

  @Field(() => [String], {
    description: 'Detalhes a mais do imóvel. Ex: Jardim, Espaço Gourmet, Piscina',
    nullable: true,
  })
  @IsOptional()
  @IsArray()
  comodidadesCondominio?: [string];

  @Field(() => Int, { description: 'Data provavel do lançamento', nullable: true })
  @IsNumber({ allowNaN: false, allowInfinity: false })
  @IsOptional()
  previsaoLancamento?: number;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  galerias?: MongooseSchema.Types.ObjectId[] | Galeria[];
}
