import prisma from "@/lib/prisma";
import { builder } from "../builder";
import { PrismaClient } from "@prisma/client/extension";

builder.prismaObject("Vegetable", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name", { nullable: true }),
    season_name: t.exposeString("season_name", { nullable: true }),
  }),
});

builder.queryField("vegetables", (t) =>
  t.prismaField({
    type: ["Vegetable"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      (prisma as PrismaClient).vegetable.findMany({ ...query }),
  })
);

builder.queryField("vegetablesBySeason", (t) =>
  t.prismaField({
    type: ["Vegetable"],
    args: {
      season: t.arg.string({ required: true }),
    },
    resolve: (query, _parent, _args, _ctx, _info) =>
      (prisma as PrismaClient).vegetable.findMany({
        where: {
          season_name: _args.season,
        },
      }),
  })
);
