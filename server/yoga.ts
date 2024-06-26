import { createSchema, createYoga } from 'graphql-yoga';

import { Resolvers } from "./resolvers-types.ts";

async function getTypeDefs(): Promise<string> {
  // Open schema file for reading
  using schemaFile = await Deno.open('./schema.graphql', { read: true });

  let typeDefs = '';

  // Stream chunks into string
  const decoder = new TextDecoder();

  for await (const chunk of schemaFile.readable) {
    typeDefs += decoder.decode(chunk);
  }

  return typeDefs;
}

const resolvers: Resolvers = {
  Query: {
    ok: () => true,
    posts: () => []
  },
  Mutation: {
    createPost: () => null,
  },
  Subscription: {
    postCreated: {
      subscribe: async function*() {},
      resolve: () => null,
    }
  }
}

// Generate schema from file
const schema = createSchema({
  typeDefs: await getTypeDefs(),
  resolvers
})

export const  yoga = createYoga({ schema });
