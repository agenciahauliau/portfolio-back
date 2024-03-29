import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Galeria } from './galeria.entity';
import { Tipologia } from './tipologia.entity';
import { File as FileTipo } from '../../files/entities/file.entity';

@ObjectType()
@Schema({ timestamps: true })
export class Imovel {
  @Field(() => ID, { description: 'ID do imóvel' })
  readonly _id: string;

  @Field(() => Int, {
    description: 'ID numérico do imóvel, mais fácil para utilizar apesar de ser apenas um contador',
    nullable: true,
  })
  readonly imovelId?: number;

  @Field(() => String, { description: 'Nome do imóvel' })
  @Prop()
  readonly nomeImovel: string;

  @Field(() => Boolean, {
    description: 'Se o imóvel é um destaque ou não',
  })
  @Prop()
  readonly destaque: boolean;

  @Field(() => [FileTipo], { description: 'Foto principal' })
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: FileTipo.name })
  readonly imagemPrincipal: MongooseSchema.Types.ObjectId[] | FileTipo[];

  @Field(() => String, { description: 'Categoria do imóvel' })
  @Prop({ trim: true })
  readonly categoriaImovel: string;

  @Field(() => Boolean, {
    description: 'É um empreendimento Jardins?',
  })
  @Prop()
  readonly jardins: boolean;

  @Field(() => String, { description: 'Descrição do imóvel' })
  @Prop()
  readonly descricaoImovel: string;

  @Field(() => String, {
    description: 'Tipo de necociação (R) Revenda, (A) Aluguel, (L) Lançamento',
  })
  @Prop({ trim: true })
  readonly tipoNegociacao: string;

  @Field(() => String, {
    description:
      'Se é um Lançamento imobiliário, ele pode ter status aprovado, pendente e não aprovado',
  })
  @Prop({ trim: true, lowercase: true })
  readonly statusLancamento: string;

  @Field(() => String, { description: 'Status do imóvel' })
  @Prop({ trim: true })
  readonly statusImovel: string;

  @Field(() => Boolean, { description: 'Aceita permuta?' })
  @Prop()
  readonly aceitaPermuta: boolean;

  @Field(() => Boolean, { description: 'É mobiliado?' })
  @Prop()
  readonly mobiliado: boolean;

  @Field(() => Float, { description: 'Valor do imóvel. Ex: 324000.56' })
  @Prop()
  readonly valorImovel: number;

  @Field(() => Float, { description: 'Valor de entrada do imóvel, quando for lançamento' })
  @Prop()
  readonly valorEntrada: number;

  @Field(() => Float, { description: 'Valor de parcela do imóvel, quando for lançamento' })
  @Prop()
  readonly valorParcela: number;

  @Field(() => Float, { description: 'Valor do IPTU. Ex: 324000.56' })
  @Prop()
  readonly valorIPTU: number;

  @Field(() => Float, { description: 'Valor do Condomínio. Ex: 324000.56' })
  @Prop()
  readonly valorCondominio: number;

  @Field(() => Float, { description: 'Área total do imóvel. Ex: 224.56' })
  @Prop()
  readonly areaTotal: number;

  @Field(() => Float, { description: 'Área construída. Ex: 300.5' })
  @Prop()
  readonly areaConstruida: number;

  @Field(() => Int, {
    description: 'Andar do imóvel, se for prédio',
  })
  @Prop()
  readonly andarImovel: number;

  @Field(() => Int, { description: 'Quantidade de quartos' })
  @Prop()
  readonly qtdeQuarto: number;

  @Field(() => Int, { description: 'Quantidade de banheiros' })
  @Prop()
  readonly qtdeBanheiro: number;

  @Field(() => Int, { description: 'Quantidade de Suítes', nullable: true })
  @Prop()
  readonly qtdeSuites: number;

  @Field(() => Int, { description: 'Quantidade de Vagas', nullable: true })
  @Prop()
  readonly qtdeVagas: number;

  @Field(() => String, { description: 'Nome da Construtora' })
  @Prop()
  readonly nomeConstrutora: string;

  @Field(() => String, { description: 'Nome do(a) proprietário(a)' })
  @Prop()
  readonly nomeProprietario: string;

  @Field(() => String, { description: 'Telefone do(a) proprietário(a)' })
  @Prop()
  readonly telefoneProprietario: string;

  @Field(() => String, { description: 'Bairro do imóvel' })
  @Prop()
  readonly bairro: string;

  @Field(() => String, { description: 'Endereço. Ex. Rua, Avenida' })
  @Prop()
  readonly logradouro: string;

  @Field(() => String, { description: 'Número do endereço', nullable: true })
  @Prop()
  readonly numeroLogradouro: string;

  @Field(() => String, {
    description: 'Campo para complemento',
  })
  @Prop()
  readonly complemento: string;

  @Field(() => String, { description: 'CEP do endereço' })
  @Prop()
  readonly cep: string;

  @Field(() => String, { description: 'Cidade do imóvel' })
  @Prop()
  readonly cidade: string;

  @Field(() => String, {
    description: 'UF (unidade federativa) ou estado mesmo',
  })
  @Prop({ uppercase: true })
  readonly uf: string;

  @Field(() => [FileTipo], { description: 'Imagem da planta do condomínio' })
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: FileTipo.name })
  readonly imgPlantaCondominio?: MongooseSchema.Types.ObjectId[] | FileTipo[];

  @Field(() => [String], {
    description: 'Detalhes do condomínio. Segurança 24hs, Academia,',
  })
  @Prop()
  readonly comodidadesImovel: string[];

  @Field(() => [String], {
    description: 'Detalhes a mais do imóvel. Ex: Jardim, Espaço Gourmet, Piscina',
  })
  @Prop()
  readonly comodidadesCondominio: string[];

  @Field(() => [Galeria], { description: 'Galerias adicionais' })
  @Prop()
  readonly galerias: Galeria[];

  @Field(() => Float, { description: 'Data provavel do lançamento' })
  @Prop()
  readonly previsaoLancamento: number;

  @Field(() => [Tipologia], {
    description: 'Tipologias',
  })
  @Prop()
  readonly tipologias: Tipologia[];

  @Field({ description: 'Quando foi criado' })
  @Prop({ default: Date.now })
  readonly createdAt: number;

  @Field({ description: 'Quando foi atualizado' })
  @Prop()
  readonly updatedAt: number;
}

export type ImovelDocument = Imovel & Document;

export const ImovelSchema = SchemaFactory.createForClass(Imovel);
