import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class File {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  tipo?: string;

  @Field({ nullable: true })
  secure_url?: string;
}
