import { gql, useQuery } from "@apollo/client";
import type { Fruit } from "@prisma/client";
import { Seasons } from "@/types/types";
import { useProduceContext } from "@/app/context";

interface ProducePropsTypes {
  season?: Seasons;
}

const FruitsBySeasonQuery = gql`
  query FruitsBySeason($season: String!) {
    fruitsBySeason(season: $season) {
      id
      name
      season_name
    }
  }
`;

export const Produce: React.FC<ProducePropsTypes> = (
  props: ProducePropsTypes
) => {
  const { produceType, setProduceType } = useProduceContext();
  const { season } = props;
  const { loading, error, data } = useQuery(FruitsBySeasonQuery, {
    variables: { season: season?.toLowerCase() },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        {produceType} for {season}
      </div>
      <ul>
        {data.fruitsBySeason.map((fruit: Fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </>
  );
};
