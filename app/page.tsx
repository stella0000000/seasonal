"use client";

import { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "@/lib/apollo";
import { Seasons } from "@/types/types";
import { ProduceContextProvider } from "./context/produce";
import { Produce } from "@/app/components/Produce";
import Description from "@/app/components/Description";
import { Footer } from "@/app/components/Footer";
import { ProduceNav } from "@/app/components/ProduceNav";
import { SeasonNav } from "@/app/components/SeasonNav";
import Providers from "@/app/components/Providers";
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
// define Description interface
// loading state / useMutation
// caching for previous requests?

// get rid of description useState?
// fix providers

// fix error handling
// fix types
