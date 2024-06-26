import { createSchema } from "graphql-yoga";
import { typeDefs } from "./typedefs.ts";
import { resolvers } from "./resolvers/index.ts";

export const schema = createSchema({
  typeDefs,
  resolvers,
});
