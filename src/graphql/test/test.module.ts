import { Module } from '@nestjs/common';
import { TestMutationResolver, TestQueryResolver } from './test.resolver';

@Module({
  providers: [TestMutationResolver, TestQueryResolver],
  exports: [TestMutationResolver, TestQueryResolver]
})
export class TestModule {}
