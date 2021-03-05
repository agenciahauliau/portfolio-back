import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class SearchUserInput {
  @Field(() => ID, { nullable: true })
  _id?: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  email?: string;
}
