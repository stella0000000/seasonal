import { ApolloClient, InMemoryCache } from "@apollo/client";

export function createApolloClient() {
  return new ApolloClient({
    uri: "/api/graphql", // URI of your GraphQL API route
    cache: new InMemoryCache(),
  });
}
