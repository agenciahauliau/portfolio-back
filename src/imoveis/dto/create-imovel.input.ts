import { InputType, Int, Field } from '@nestjs/graphql';
import { ImgImovel } from '../entities/imagens.entity';
import { VideoImovel } from '../entities/videos.entity';

@InputType()
export class CreateImovelInput {
  @Field({ description: 'Categoria do imóvel' })
  categoriaImovel: String;

  @Field({ description: 'Descrição do imóvel' })
  descricaoImovel: String;

  @Field({
    description: 'Tipo de necociação (R) Revenda, (A) Aluguel, (L) Lançamento',
  })
  tipoNegociacao: String;

  @Field({ description: 'Status do imóvel' })
  statusImovel: String;

  @Field({ description: 'Aceita permuta?' })
  aceitaPermuta: Boolean;

  @Field({ description: 'É mobiliado?' })
  mobiliado: Boolean;

  @Field({ description: 'Valor do imóvel. Ex: 324000.56' })
  valorImovel: String;

  @Field({ description: 'Valor do IPTU. Ex: 324000.56' })
  valorIPTU: String;

  @Field({ description: 'Valor do Condomínio. Ex: 324000.56' })
  valorCondominio: String;

  @Field({ description: 'Área total do imóvel.' })
  areaTotal: String;

  @Field({ description: 'Área construída' })
  areaConstruida: String;

  @Field()
  andarImovel: String;

  @Field()
  qtdeQuarto: String;

  @Field()
  qtdeBanheiro: String;

  @Field()
  qtdeSuites: String;

  @Field()
  qtdeVagas: String;

  @Field()
  nomeConstrutora: String;

  @Field()
  bairro: String;

  @Field()
  logradouro: String;

  @Field()
  numeroLogradouro?: String;

  @Field()
  complemento?: String;

  @Field()
  cep: String;

  @Field()
  cidade: String;

  @Field({ description: 'UF (unidade federativa) ou estado mesmo' })
  uf: String;

  @Field()
  comodiadesImovel?: String;

  @Field()
  comodidadesCondominio?: String;

  /*   @Field(() => [])
  imagensImovel?: ImgImovel[];

  @Field(() => [])
  videosImovel?: VideoImovel[]; */
}
