import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { ImgImovel } from '../entities/imagens.entity';
import { VideoImovel } from '../entities/videos.entity';

@InputType()
export class CreateImovelInput {
  @Field(() => String, { description: 'Categoria do imóvel' })
  categoriaImovel: string;

  @Field(() => Boolean, {
    description: 'É um empreendimento Jardins?',
    nullable: true,
  })
  @IsOptional()
  jardins?: boolean;

  @Field(() => String, { description: 'Descrição do imóvel' })
  descricaoImovel: string;

  @Field(() => String, {
    description: 'Tipo de necociação (R) Revenda, (A) Aluguel, (L) Lançamento',
  })
  tipoNegociacao: string;

  @Field(() => String, { description: 'Status do imóvel' })
  statusImovel: string;

  @Field(() => Boolean, { description: 'Aceita permuta?' })
  aceitaPermuta: boolean;

  @Field(() => Boolean, { description: 'É mobiliado?' })
  mobiliado: boolean;

  @Field(() => Float, { description: 'Valor do imóvel. Ex: 324000.56' })
  valorImovel: number;

  @Field(() => Float, { description: 'Valor do IPTU. Ex: 324000.56' })
  valorIPTU: number;

  @Field(() => Float, { description: 'Valor do Condomínio. Ex: 324000.56' })
  valorCondominio: number;

  @Field(() => Float, { description: 'Área total do imóvel. Ex: 224.56' })
  areaTotal: number;

  @Field(() => Float, { description: 'Área construída. Ex: 300.5' })
  areaConstruida: number;

  @Field(() => Int, {
    description: 'Andar do imóvel, se for prédio',
    nullable: true,
  })
  @IsOptional()
  andarImovel?: number;

  @Field(() => Int, { description: 'Quantidade de quartos' })
  qtdeQuarto: number;

  @Field(() => Int, { description: 'Quantidade de banheiros' })
  qtdeBanheiro: number;

  @Field(() => Int, { description: 'Quantidade de Suítes', nullable: true })
  @IsOptional()
  qtdeSuites?: number;

  @Field(() => Int, { description: 'Quantidade de Vagas', nullable: true })
  @IsOptional()
  qtdeVagas?: number;

  @Field(() => String, { description: 'Nome da Construtora' })
  nomeConstrutora: string;

  @Field(() => String, { description: 'Bairro do imóvel' })
  bairro: string;

  @Field(() => String, { description: 'Endereço. Ex. Rua, Avenida' })
  logradouro: string;

  @Field(() => String, { description: 'Número do endereço', nullable: true })
  @IsOptional()
  numeroLogradouro?: string;

  @Field(() => String, {
    description: 'Campo para complemento',
    nullable: true,
  })
  @IsOptional()
  complemento?: string;

  @Field(() => Int, { description: 'CEP do endereço' })
  cep: number;

  @Field(() => String, { description: 'Cidade do imóvel' })
  cidade: string;

  @Field(() => String, {
    description: 'UF (unidade federativa) ou estado mesmo',
  })
  uf: string;

  @Field(() => [String], {
    description: 'Detalhes do condomínio. Segurança 24hs, Academia,',
    nullable: true,
  })
  @IsOptional()
  comodidadesImovel?: [string];

  @Field(() => [String], {
    description:
      'Detalhes a mais do imóvel. Ex: Jardim, Espaço Gourmet, Piscina',
    nullable: true,
  })
  @IsOptional()
  comodidadesCondominio?: [string];
}
