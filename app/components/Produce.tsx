import { gql, useQuery } from "@apollo/client";
import type { Fruit, Vegetable } from "@prisma/client";
import { Produces, Seasons } from "@/types/types";

import { useProduceContext } from "@/app/context/produce";
import ProduceItemButton from "./ProduceItemButton";
import { useState } from "react";
import Loading from "./Loading";

interface ProducePropsTypes {
  season: Seasons | null;
  setDescription: (description: string) => void;
}

const FRUITS_BY_SEASON = gql`
  query FruitsBySeason($season: String!) {
    fruitsBySeason(season: $season) {
      id
      name
      season_name
    }
  }
`;

const VEGETABLES_BY_SEASON = gql`
  query VegetablesBySeason($season: String!) {
    vegetablesBySeason(season: $season) {
      id
      name
      season_name
    }
  }
`;

const queryMap = {
  [Produces.FRUITS]: FRUITS_BY_SEASON,
  [Produces.VEGETABLES]: VEGETABLES_BY_SEASON,
};

const capitalize = (word: string) => {
  const firstLetter = word[0].toUpperCase();
  return firstLetter + word.substring(1);
};

export const Produce: React.FC<ProducePropsTypes> = ({
  season,
  setDescription,
}: ProducePropsTypes) => {
  const { produceType } = useProduceContext();
  const [selectedProduce, setSelectedProduce] = useState<string | null>(null);

  const { loading, error, data } = useQuery(queryMap[produceType as Produces], {
    variables: { season: season?.toLowerCase() },
  });

  const style = "mt-20";

  // if (loading) return <div className={style}>...</div>;
  if (loading) return <Loading />;
  if (error) return <div className={style}>Error: {error.message}</div>;
  const produceItems = data[`${produceType!.toLowerCase()}BySeason`];

  return (
    <ul className={style}>
      {produceItems.map((item: Fruit | Vegetable) => (
        <li key={item.id}>
          <ProduceItemButton
            label={capitalize(item.name)}
            {...{ selectedProduce, setSelectedProduce, setDescription }}
          />
        </li>
      ))}
    </ul>
  );
};
