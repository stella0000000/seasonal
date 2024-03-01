import prisma from "@/lib/prisma";
import { builder } from "../builder";
import { PrismaClient } from "@prisma/client/extension";

builder.prismaObject("Vegetable", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name", { nullable: true }),
    season_name: t.exposeString("season_name", { nullable: true }),
    // users: t.relation('users')
  }),
});

builder.queryField("vegetables", (t) =>
  t.prismaField({
    type: ["Vegetable"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      (prisma as PrismaClient).vegetable.findMany({ ...query }),
  })
);
