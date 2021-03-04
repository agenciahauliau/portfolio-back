import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateImoveiInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
