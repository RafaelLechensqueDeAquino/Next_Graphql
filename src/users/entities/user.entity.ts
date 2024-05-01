import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;

  // @Field(type => ID)
  // id: string;

  // @Directive('@upper')
  // name: string;

  // @Field({ nullable: true })
  // description?: string;

  // @Field()
  // creationDate: Date;


}
