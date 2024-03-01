// Create a GraphQL Yoga server instance
// specified path for GraphQL API with graphqlEndpoint property

import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { schema } from "@/graphql/schema";

const yoga = createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint: "/api/graphql",
});

export { yoga as GET, yoga as POST };

export const config = {
  api: {
    bodyParser: false,
  },
};
