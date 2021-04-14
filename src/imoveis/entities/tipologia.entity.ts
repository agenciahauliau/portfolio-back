import { Field, Float, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('TipologiaInput')
export class Tipologia {
  @Field(() => Int)
  readonly quartos: number;

  @Field(() => Int)
  readonly suites: number;

  @Field(() => Float)
  readonly tamanho: number;

  @Field(() => Float)
  readonly valorEntrada: number;

  @Field(() => Float)
  readonly valorParcela: number;
}
