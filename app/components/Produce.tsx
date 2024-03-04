import { gql, useQuery } from "@apollo/client";
import type { Fruit, Vegetable } from "@prisma/client";
import { Produces, Seasons } from "@/types/types";
import { useProduceContext } from "@/app/context/produce";
import ProduceItemButton from "./ProduceItemButton";
import Loading from "./Loading";

interface ProducePropsTypes {
  season: Seasons | null;
  selectedProduce: string | null;
  setSelectedProduce: (produceName: string | null) => void;
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
  selectedProduce,
  setSelectedProduce,
  setDescription,
}: ProducePropsTypes) => {
  const { produceType } = useProduceContext();
  const { loading, error, data } = useQuery(queryMap[produceType as Produces], {
    variables: { season: season?.toLowerCase() },
  });

  if (loading) return <Loading />;
  if (error) return <div className="mt-20">Error: {error.message}</div>;
  const produceItems = data[`${produceType!.toLowerCase()}BySeason`];

  return (
    <ul className="mt-20">
      {produceItems.map((item: Fruit | Vegetable) => (
        <li key={item.id}>
          <ProduceItemButton
            produceName={capitalize(item.name)}
            {...{ season, selectedProduce, setSelectedProduce, setDescription }}
          />
        </li>
      ))}
    </ul>
  );
};
