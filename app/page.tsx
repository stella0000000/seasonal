"use client";

import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/lib/apollo";
import { Seasons } from "@/types/types";
import { ProduceContextProvider } from "./context/produce";
import { Produce } from "@/components/Produce";
import Description from "@/components/Description";
import { Footer } from "@/components/Footer";
import { ProduceNav } from "@/components/ProduceNav";
import { SeasonNav } from "@/components/SeasonNav";
import Providers from "@/components/Providers";
// import Photo from "@/components/Photo";

const client = createApolloClient();

export default function Home() {
  const [season, setSeason] = useState<Seasons | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  return (
    // fix providers
    <ApolloProvider client={client}>
      <Providers>
        <ProduceContextProvider>
          <main className="flex min-h-screen flex-col p-2">
            <h1 className="text-4xl fixed right-0 transform rotate-90 flex justify-center items-center h-screen mr-[-40px]">
              Seasonal
            </h1>
            {/* <Photo /> */}
            <div className="fixed">
              <ProduceNav {...{ setDescription }} />
              <SeasonNav {...{ season, setSeason, setDescription }} />
            </div>
            {season && <Produce {...{ season, setDescription }} />}
            {description && <Description {...{ description }} />}
            <Footer />
          </main>
        </ProduceContextProvider>
      </Providers>
    </ApolloProvider>
  );
}

// readable stream
// loading state / suspense
// caching for previous requests?
// fix error handling
// fix types
