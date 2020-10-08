import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TestMutationArgs } from './models/test.args';
import { Test, TestMutation, TestQuery } from './models/test.model';

@Resolver(of => TestMutation)
export class TestMutationResolver {
  @Mutation(of => TestMutation)
  test(): TestMutation {
    return { }
  }
  @ResolveField(of => Test)
    create(@Args() args: TestMutationArgs): Test {
      return { id: "create"}
    }

  @ResolveField(of => Test)
    update(@Args() args: TestMutationArgs): Test {
      return { id: "update"}
    }

  @ResolveField(of => Test)
    delete(@Args() args: TestMutationArgs): Test {
      return { id: "delete"}
    }
}

@Resolver(of => TestQuery)
export class TestQueryResolver {
  @Query(of => TestQuery)
  test(): TestQuery {
    return { }
  }
  @ResolveField(of => Test)
    find(@Args() args: TestMutationArgs): Test {
      return { id: "find", name: "zé batatão"}
    }
}
