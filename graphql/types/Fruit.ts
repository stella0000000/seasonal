import prisma from "@/lib/prisma";
import { builder } from "../builder";
import { PrismaClient } from "@prisma/client/extension";

builder.prismaObject("Fruit", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name", { nullable: true }),
    season_name: t.exposeString("season_name", { nullable: true }),
    // users: t.relation('users')
  }),
});

builder.queryField("fruits", (t) =>
  t.prismaField({
    type: ["Fruit"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      (prisma as PrismaClient).fruit.findMany({ ...query }),
  })
);
