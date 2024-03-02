import prisma from "@/lib/prisma";
import { builder } from "../builder";
import { PrismaClient } from "@prisma/client/extension";

builder.prismaObject("Fruit", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name", { nullable: true }),
    season_name: t.exposeString("season_name", { nullable: true }),
  }),
});

builder.queryField("fruits", (t) =>
  t.prismaField({
    type: ["Fruit"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      (prisma as PrismaClient).fruit.findMany({ ...query }),
  })
);

builder.queryField("fruitsBySeason", (t) =>
  t.prismaField({
    type: ["Fruit"],
    args: {
      season: t.arg.string({ required: true }),
    },
    resolve: (query, _parent, _args, _ctx, _info) =>
      (prisma as PrismaClient).fruit.findMany({
        where: {
          season_name: _args.season,
        },
      }),
  })
);
