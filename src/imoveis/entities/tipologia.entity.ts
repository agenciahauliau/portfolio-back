import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('TipologiaInput')
export class Tipologia {
  @Field(() => Int)
  quartos: number;

  @Field(() => Int)
  suites: number;

  @Field(() => Float)
  tamanho: number;

  @Field(() => Float)
  valorEntrada: number;

  @Field(() => Float)
  valorParcela: number;
}
