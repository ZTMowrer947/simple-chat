import type { Resolvers } from "../../resolvers-types.ts";

export const resolvers = {
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
} satisfies Resolvers;
