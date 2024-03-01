// Instance of Pothos schema builder as a shareable module.

import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import prisma from "@/lib/prisma";

// Schema builder
export const builder = new SchemaBuilder<{
  // Static types used to create gql schema
  PrismaTypes: PrismaTypes;
}>({
  // options for SchemaBuilder
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

// query with ok returning boolean for testing
builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});
