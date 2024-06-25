import { createSchema, createYoga } from 'graphql-yoga';

const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      ok: Boolean!
    }
  `,
  resolvers: {
    Query: {
      ok: () => true,
    }
  }
})

export const  yoga = createYoga({ schema });
