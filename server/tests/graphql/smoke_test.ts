import { assert, assertExists } from 'https://deno.land/std@0.224.0/assert/mod.ts';

import { buildHTTPExecutor } from 'npm:@graphql-tools/executor-http@1.0.9'
import { parse } from "graphql";

import { yoga } from "../../graphql/yoga.ts";

function assertSingleValue<T extends object>(value: T | AsyncIterable<T>): asserts value is T {
  if (Symbol.asyncIterator in value) {
    throw new Error('Expected a single value, got async iterable')
  }
}

function setupExecutor() {
  return buildHTTPExecutor({
    fetch: (uri, init, ctx) => yoga.fetch(new URL(`http://localhost:${uri}`), init ?? {}, ctx)
  })
}

Deno.test('GraphQL smoke test', async () => {
  const executor = setupExecutor();

  const result = await executor({
    document: parse(/* GraphQL */ `
      query {
        ok
      }
    `)
  });

  assertSingleValue(result);
  assertExists(result.data, 'data property on result should exist');
  assert(result.data.ok);
})
