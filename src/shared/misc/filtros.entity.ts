import { ObjectType, InputType, Field, Float } from '@nestjs/graphql';

@ObjectType()
@InputType('FiltroInput')
export class Filtro {
  @Field(() => [String], {
    description: 'Opção para ENTRE ou BETWEEN. Exemplo: $in: ["Academia", "Segurança 24hs"]',
    nullable: true,
  })
  in?: string[];

  @Field(() => Float, {
    description:
      '(Utilizar apenas em campos numéricos!) Opção para MAIOR OU IGUAL QUE. Exemplo: gte: 80000',
    nullable: true,
  })
  gte?: number;

  @Field(() => Float, {
    description:
      '(Utilizar apenas em campos numéricos!) Opção para MENOR OU IGUAL QUE. Exemplo: gte: 10000.67',
    nullable: true,
  })
  lte?: number;

  @Field(() => Float, {
    description: '(Utilizar apenas em campos numéricos!) Opção para MAIOR QUE. Exemplo: gte: 50.99',
    nullable: true,
  })
  gt?: number;

  @Field(() => Float, {
    description: '(Utilizar apenas em campos numéricos!) Opção para MENOR QUE. Exemplo: gte: 4.20',
    nullable: true,
  })
  lt?: number;

  @Field(() => Float, {
    description:
      '(Utilizar apenas em campos numéricos!) Opção para IGUAL QUE. Exemplo: valorImovel: { eq: 28000 }',
    nullable: true,
  })
  eq?: number;
}
