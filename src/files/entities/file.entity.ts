import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class File {
  @Field()
  name: string;
}
