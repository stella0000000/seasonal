// Resolver function for graphql queries.

import prisma from "@/lib/prisma";

export const resolvers = {
  Query: {
    fruits: () => {
      return prisma.fruit.findMany();
    },
  },
};

// export const resolvers = {
//   Query: {
//     fruits: () => {
//       return [
//         {
//           name: "name1",
//           season: "season1",
//         },
//       ];
//     },
//   },
// };
