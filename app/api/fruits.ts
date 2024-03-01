// // GraphQL API route to handle GraphQL queries

// import { ApolloServer, gql } from "apollo-server-micro";
// import prisma from "@/lib/prisma";

// const typeDefs = gql`
//   type Fruit {
//     id: Int!
//     name: String!
//     season: String!
//   }

//   type Query {
//     allFruits: [Fruit!]!
//   }
// `;

// const resolvers = {
//   Query: {
//     allFruits: async () => {
//       return await prisma.fruit.findMany();
//     },
//   },
// };

// const apolloServer = new ApolloServer({ typeDefs, resolvers });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default apolloServer.createHandler({ path: "/api/fruits" });
