"use client";

import { useState } from "react";
import { Seasons } from "@/types/types";
import { Produce } from "@/app/components/Produce";
import Description from "@/app/components/Description";
import { Footer } from "@/app/components/Footer";
import { ProduceNav } from "@/app/components/ProduceNav";
import { SeasonNav } from "@/app/components/SeasonNav";
import Providers from "@/app/components/Providers";
// import Photo from "@/app/components/Photo";

export default function Home() {
  const [season, setSeason] = useState<Seasons | null>(null);
  const [selectedProduce, setSelectedProduce] = useState<string | null>(null);
  const [description, setDescription] = useState<string>();

  return (
    <Providers>
      <main className="flex min-h-screen flex-col p-2">
        <h1 className="text-4xl fixed right-0 transform rotate-90 flex justify-center items-center h-screen mr-[-40px]">
          Seasonal
        </h1>
        {/* <Photo /> */}
        <div className="fixed">
          <ProduceNav {...{ setSelectedProduce, setDescription }} />
          <SeasonNav
            {...{ season, setSeason, setSelectedProduce, setDescription }}
          />
        </div>
        {season && (
          <Produce
            {...{ season, selectedProduce, setSelectedProduce, setDescription }}
          />
        )}
        <Description {...{ description, season, selectedProduce }} />
        <Footer />
      </main>
    </Providers>
  );
}

// fix frontend stream w. descriptions context
// loading state / useMutation
// caching for previous requests?

// get rid of description useState?
// fix providers

// fix error handling
// fix types
