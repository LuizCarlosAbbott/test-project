import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: true,
      sortSchema: true,
    }), TestModule],
})
export class GraphqlModule {
}
