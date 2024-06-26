import { createId } from '@paralleldrive/cuid2';
import { createPubSub } from '@graphql-yoga/subscription';

import type { Resolvers, Post } from "../../resolvers-types.ts";

const pubSub = createPubSub();

const posts: Post[] = []

export const resolvers = {
  Query: {
    ok: () => true,
    posts: () => posts,
  },
  Mutation: {
    createPost: (_ctx, args) => {
      const newPost = {
        id: createId(),
        authorName: args.authorName,
        message: args.message
      } satisfies Post;

      posts.push(newPost);

      pubSub.publish('postCreated', newPost)

      return newPost;
    },
  },
  Subscription: {
    postCreated: {
      subscribe: () => pubSub.subscribe('postCreated'),
      resolve: (payload: Post) => payload,
    }
  }
} satisfies Resolvers;
