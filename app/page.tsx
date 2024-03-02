"use client";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/lib/apollo";
import { useState } from "react";
import { ProduceContextProvider } from "./context";
import { Seasons } from "@/types/types";
import { ProduceButton } from "@/components/ProduceButton";
import Fruits from "@/components/Fruits";
import { Produce } from "@/components/Produce";

const client = createApolloClient();

export default function Home() {
  const [season, setSeason] = useState<Seasons | undefined>(undefined);

  return (
    <ApolloProvider client={client}>
      <ProduceContextProvider>
        <main className="flex min-h-screen flex-col p-10">
          <button onClick={() => setSeason(Seasons.SPRING)}>Spring</button>
          <button onClick={() => setSeason(Seasons.SUMMER)}>Summer</button>
          {/* <button onClick={() => setSeason(Seasons.FALL)}>Fall</button>
          <button onClick={() => setSeason(Seasons.WINTER)}>Winter</button> */}
          <Produce {...{ season }} />
          <ProduceButton />
          {/* <Fruits /> */}
        </main>
      </ProduceContextProvider>
    </ApolloProvider>
  );
}

// Fetch all fruits
// Fetch all vegetables
// display them
// change SQL queries and UI
