// Create a GraphQL Yoga server instance
// createSchema() fxn takes type defs and resolvers as params
// specified path for GraphQL API with graphqlEndpoint property

import { createSchema, createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schema";

const yoga = createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphqlEndpoint: "/api/graphql",
});

export { yoga as GET };

export const config = {
  api: {
    bodyParser: false,
  },
};
