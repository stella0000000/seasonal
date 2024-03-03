// Resolver function for graphql queries.

import prisma from "@/lib/prisma";

export const resolvers = {
  Query: {
    fruits: () => {
      return prisma.fruit.findMany();
    },
    fruitsBySeason: ({ season }: any) => {
      return prisma.fruit.findMany({
        where: {
          season_name: season,
        },
      });
    },
    vegetables: () => {
      return prisma.vegetable.findMany();
    },
    vegetablesBySeason: ({ season }: any) => {
      return prisma.vegetable.findMany({
        where: {
          season_name: season,
        },
      });
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
