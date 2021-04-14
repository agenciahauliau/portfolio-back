import { ObjectType, InputType, Field } from '@nestjs/graphql';

@ObjectType()
@InputType('GaleriaInput')
export class Galeria {
  @Field(() => String)
  readonly tipoGaleria: string;

  @Field(() => String)
  readonly nomeGaleria: string;

  @Field(() => [String])
  readonly arquivos: [string];

  @Field(() => String)
  readonly arquivoDestaque: string;
}
