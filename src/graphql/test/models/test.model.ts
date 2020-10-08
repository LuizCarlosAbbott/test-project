import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Test {
  @Field((type) => ID)
  id: string;

  @Field((type) => ID)
  name?: string;
}

@ObjectType()
export class TestMutation {
  @Field(()=> Test)
  create?: Test

  @Field(()=> Test)
  delete?: Test

  @Field(()=> Test)
  update?: Test
}

@ObjectType()
export class TestQuery {
  @Field(()=> Test)
  find?: Test
}
