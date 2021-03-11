import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { ImgImovel } from '../entities/imagens.entity';
import { VideoImovel } from '../entities/videos.entity';

@InputType()
export class CreateImovelInput {
  @Field(() => String, { description: 'Categoria do imóvel' })
  categoriaImovel: String;

  @Field(() => Boolean, { description: 'É um empreendimento Jardins?' })
  @IsOptional()
  jardins?: Boolean;

  @Field(() => String, { description: 'Descrição do imóvel' })
  descricaoImovel: String;

  @Field(() => String, {
    description: 'Tipo de necociação (R) Revenda, (A) Aluguel, (L) Lançamento',
  })
  tipoNegociacao: String;

  @Field(() => String, { description: 'Status do imóvel' })
  statusImovel: String;

  @Field(() => Boolean, { description: 'Aceita permuta?' })
  aceitaPermuta: Boolean;

  @Field(() => Boolean, { description: 'É mobiliado?' })
  mobiliado: Boolean;

  @Field(() => Float, { description: 'Valor do imóvel. Ex: 324000.56' })
  valorImovel: Number;

  @Field(() => Float, { description: 'Valor do IPTU. Ex: 324000.56' })
  valorIPTU: Number;

  @Field(() => Float, { description: 'Valor do Condomínio. Ex: 324000.56' })
  valorCondominio: Number;

  @Field(() => Float, { description: 'Área total do imóvel. Ex: 224.56' })
  areaTotal: Number;

  @Field(() => Float, { description: 'Área construída. Ex: 300.5' })
  areaConstruida: Number;

  @Field(() => Int, { description: 'Andar do imóvel, se for prédio' })
  @IsOptional()
  andarImovel?: Number;

  @Field(() => Int, { description: 'Quantidade de quartos' })
  qtdeQuarto: Number;

  @Field(() => Int, { description: 'Quantidade de banheiros' })
  qtdeBanheiro: Number;

  @Field(() => Int, { description: 'Quantidade de Suítes' })
  @IsOptional()
  qtdeSuites?: Number;

  @Field(() => Int, { description: 'Quantidade de Vagas' })
  @IsOptional()
  qtdeVagas?: Number;

  @Field(() => String, { description: 'Nome da Construtora' })
  nomeConstrutora: String;

  @Field(() => String, { description: 'Bairro do imóvel' })
  bairro: String;

  @Field(() => String, { description: 'Endereço. Ex. Rua, Avenida' })
  logradouro: String;

  @Field(() => String, { description: 'Número do endereço' })
  @IsOptional()
  numeroLogradouro?: String;

  @Field(() => String, { description: 'Campo para complemento' })
  @IsOptional()
  complemento?: String;

  @Field(() => Int, { description: 'CEP do endereço' })
  cep: Number;

  @Field(() => String, { description: 'Cidade do imóvel' })
  cidade: String;

  @Field(() => String, {
    description: 'UF (unidade federativa) ou estado mesmo',
  })
  uf: String;

  @Field(() => [String], {
    description: 'Detalhes do condomínio. Segurança 24hs, Academia,',
  })
  @IsOptional()
  comodidadesImovel?: [String];

  @Field(() => [String], {
    description:
      'Detalhes a mais do imóvel. Ex: Jardim, Espaço Gourmet, Piscina',
  })
  @IsOptional()
  comodidadesCondominio?: [String];
}
