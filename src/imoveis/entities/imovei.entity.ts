import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Imovei {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
