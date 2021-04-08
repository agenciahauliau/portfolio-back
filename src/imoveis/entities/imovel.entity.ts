import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Galeria } from '../../galeria/entities/galeria.entity';

@ObjectType()
@Schema({ timestamps: true })
export class Imovel {
  @Field(() => ID, { description: 'ID do imóvel' })
  readonly _id: string;

  @Field(() => String, { description: 'Nome do imóvel' })
  @Prop()
  nomeImovel: string;

  @Field(() => String, { description: 'Foto principal' })
  @Prop()
  imagemPrincipal: string;

  @Field(() => String, { description: 'Categoria do imóvel' })
  @Prop({ trim: true })
  categoriaImovel: string;

  @Field(() => Boolean, {
    description: 'É um empreendimento Jardins?',
  })
  @Prop()
  jardins: boolean;

  @Field(() => String, { description: 'Descrição do imóvel' })
  @Prop()
  descricaoImovel: string;

  @Field(() => String, {
    description: 'Tipo de necociação (R) Revenda, (A) Aluguel, (L) Lançamento',
  })
  @Prop({ trim: true })
  tipoNegociacao: string;

  @Field(() => String, {
    description:
      'Se é um Lançamento imobiliário, ele pode ter status aprovado, pendente e não aprovado',
  })
  @Prop({ trim: true })
  statusLancamento: string;

  @Field(() => String, { description: 'Status do imóvel' })
  @Prop({ trim: true })
  statusImovel: string;

  @Field(() => Boolean, { description: 'Aceita permuta?' })
  @Prop()
  aceitaPermuta: boolean;

  @Field(() => Boolean, { description: 'É mobiliado?' })
  @Prop()
  mobiliado: boolean;

  @Field(() => Float, { description: 'Valor do imóvel. Ex: 324000.56' })
  @Prop()
  valorImovel: number;

  @Field(() => Float, { description: 'Valor de entrada do imóvel, quando for lançamento' })
  @Prop()
  valorEntrada: number;

  @Field(() => Float, { description: 'Valor de parcela do imóvel, quando for lançamento' })
  @Prop()
  valorParcela: number;

  @Field(() => Float, { description: 'Valor do IPTU. Ex: 324000.56' })
  @Prop()
  valorIPTU: number;

  @Field(() => Float, { description: 'Valor do Condomínio. Ex: 324000.56' })
  @Prop()
  valorCondominio: number;

  @Field(() => Float, { description: 'Área total do imóvel. Ex: 224.56' })
  @Prop()
  areaTotal: number;

  @Field(() => Float, { description: 'Área construída. Ex: 300.5' })
  @Prop()
  areaConstruida: number;

  @Field(() => Int, {
    description: 'Andar do imóvel, se for prédio',
  })
  @Prop()
  andarImovel: number;

  @Field(() => Int, { description: 'Quantidade de quartos' })
  @Prop()
  qtdeQuarto: number;

  @Field(() => Int, { description: 'Quantidade de banheiros' })
  @Prop()
  qtdeBanheiro: number;

  @Field(() => Int, { description: 'Quantidade de Suítes', nullable: true })
  @Prop()
  qtdeSuites: number;

  @Field(() => Int, { description: 'Quantidade de Vagas', nullable: true })
  @Prop()
  qtdeVagas: number;

  @Field(() => String, { description: 'Nome da Construtora' })
  @Prop()
  nomeConstrutora: string;

  @Field(() => String, { description: 'Bairro do imóvel' })
  @Prop()
  bairro: string;

  @Field(() => String, { description: 'Endereço. Ex. Rua, Avenida' })
  @Prop()
  logradouro: string;

  @Field(() => String, { description: 'Número do endereço', nullable: true })
  @Prop()
  numeroLogradouro: string;

  @Field(() => String, {
    description: 'Campo para complemento',
  })
  @Prop()
  complemento: string;

  @Field(() => String, { description: 'CEP do endereço' })
  @Prop()
  cep: string;

  @Field(() => String, { description: 'Cidade do imóvel' })
  @Prop()
  cidade: string;

  @Field(() => String, {
    description: 'UF (unidade federativa) ou estado mesmo',
  })
  @Prop()
  uf: string;

  @Field(() => [String], {
    description: 'Imagens adicionais',
  })
  @Prop()
  imagensAdicionais?: [string];

  @Field(() => [String], { description: 'Imagem da planta do condomínio' })
  @Prop()
  imgPlantaCondominio?: [string];

  @Field(() => [String], {
    description: 'Detalhes do condomínio. Segurança 24hs, Academia,',
  })
  @Prop()
  comodidadesImovel: [string];

  @Field(() => [String], {
    description: 'Detalhes a mais do imóvel. Ex: Jardim, Espaço Gourmet, Piscina',
  })
  @Prop()
  comodidadesCondominio: [string];

  @Field(() => [Galeria], {
    description: 'Galeria de imagens ou videos',
  })
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Galeria.name })
  galerias: MongooseSchema.Types.ObjectId[] | Galeria[];

  @Field(() => Float, { description: 'Data provavel do lançamento' })
  @Prop()
  previsaoLancamento: number;

  @Field({ description: 'Quando foi criado' })
  @Prop({ default: Date.now })
  readonly createdAt: number;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: number;
}

export type ImovelDocument = Imovel & Document;

export const ImovelSchema = SchemaFactory.createForClass(Imovel);
