import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateGaleriaInput {
  @Field(() => String, { description: 'Nome da galeria de imagens e/ou vídeos' })
  nomeGaleria: string;

  @Field(() => [String], { description: 'URL do arquivo' })
  url: [string];

  @Field(() => String, { description: 'Arquivo de destaque para galeria' })
  arquivoDestaque: string;

  @Field(() => [String], { description: 'id do imovel atribuiído' })
  idImovel: [string];
}
