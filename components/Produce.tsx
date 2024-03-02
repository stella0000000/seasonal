import { gql, useQuery } from "@apollo/client";
import type { Fruit, Vegetable } from "@prisma/client";
import { Produces, Seasons } from "@/types/types";

import { useProduceContext } from "@/app/context";

interface ProducePropsTypes {
  season: Seasons | undefined;
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
  return firstLetter + word.slice(1);
};

export const Produce: React.FC<ProducePropsTypes> = (
  props: ProducePropsTypes
) => {
  const { produceType } = useProduceContext();
  const { season } = props;
  const { loading, error, data } = useQuery(queryMap[produceType as Produces], {
    variables: { season: season?.toLowerCase() },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const produceItems = data[`${produceType!.toLowerCase()}BySeason`];

  return (
    <ul>
      {produceItems.map((item: Fruit | Vegetable) => (
        <li key={item.id}>{capitalize(item.name)}</li>
      ))}
    </ul>
  );
};
