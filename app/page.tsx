"use client";

import { useState } from "react";
import { Seasons } from "@/types/types";
import { Produce } from "./components/Produce";
import Description from "./components/Description";
import { Footer } from "./components/Footer";
import { ProduceNav } from "./components/ProduceNav";
import { SeasonNav } from "./components/SeasonNav";
import Providers from "./components/Providers";
import BackgroundImage from "./components/BackgroundImage";
// import Photo from "./components/Photo";

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
        <div className="fixed">
          {/* <Photo /> */}
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
        <BackgroundImage />
        <Footer />
      </main>
    </Providers>
  );
}

// loading state / useMutation
// image api
// transparent bg
// mobile

// fix error handling
// fix types
