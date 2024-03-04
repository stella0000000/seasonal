// Create a GraphQL Yoga server instance
// specified path for GraphQL API with graphqlEndpoint property

import { schema } from "@/graphql/schema";
import { createYoga } from "graphql-yoga";

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
