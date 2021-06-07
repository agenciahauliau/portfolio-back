import { InputType, Field, ID } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { Filtro } from '@shared';

@InputType()
export class SearchPostCondInput {
  @Field(() => ID, { nullable: true })
  _id?: string;

  @Field(() => String, { description: 'Status do lead: [publicado|rascunho]', nullable: true })
  status?: string;

  @Field(() => Filtro, { description: 'Categoria do post', nullable: true })
  categoria?: object | string[];

  @Field(() => Filtro, { description: 'Tags do post', nullable: true })
  tags?: object | string[];

  @Field(() => Filtro, { description: 'Quando foi criado', nullable: true })
  createdAt?: object | number;

  @Field(() => Filtro, { description: 'Quando foi atualizado', nullable: true })
  updatedAt?: object | number;

  @Field(() => GraphQLJSON, {
    description:
      'Opção para "OU". Exemplo: $or: [{ createAt: 1623095714 }, { createdAt: 1823095714 }]',
    nullable: true,
  })
  or?: object;
}
