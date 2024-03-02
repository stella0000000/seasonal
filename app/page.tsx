"use client";

import { useState } from "react";
import Link from "next/link";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/lib/apollo";
import { Seasons, Produces } from "@/types/types";
import { ProduceContextProvider } from "./context";
import { ProduceButton } from "@/components/ProduceButton";
import { Produce } from "@/components/Produce";
import SeasonButton from "@/components/SeasonButton";
// import Description from "@/components/Description";

const client = createApolloClient();

export default function Home() {
  const [season, setSeason] = useState<Seasons | undefined>(undefined);

  return (
    <ApolloProvider client={client}>
      <ProduceContextProvider>
        <main className="flex min-h-screen flex-col p-2">
          <div className="fixed right-0 transform rotate-90 flex justify-center items-center h-screen mr-[-40px]">
            <h1 className="text-4xl">Seasonal</h1>
          </div>

          <div className="flex gap-x-10">
            <ProduceButton {...{ label: Produces.FRUITS }} />
            <ProduceButton {...{ label: Produces.VEGETABLES }} />
          </div>
          <div className="flex gap-x-10">
            <SeasonButton {...{ season, setSeason, label: Seasons.SPRING }} />
            <SeasonButton {...{ season, setSeason, label: Seasons.SUMMER }} />
            <SeasonButton {...{ season, setSeason, label: Seasons.FALL }} />
            <SeasonButton {...{ season, setSeason, label: Seasons.WINTER }} />
          </div>
          {season && <Produce {...{ season }} />}
          {/* <Description /> */}
          <Link
            className="fixed bottom-0 right-0 p-2 text-sm cursor-default not-italic"
            href="https://snaped.fns.usda.gov/resources/nutrition-education-materials/seasonal-produce-guide"
          >
            Data provided by USDA 🌱
          </Link>
        </main>
      </ProduceContextProvider>
    </ApolloProvider>
  );
}

// Fetch all fruits
// Fetch all vegetables
// display them
// change SQL queries and UI
