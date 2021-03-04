import { CreateImoveiInput } from './create-imovei.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImoveiInput extends PartialType(CreateImoveiInput) {
  @Field(() => Int)
  id: number;
}
