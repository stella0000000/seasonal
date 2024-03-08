import { useQuery } from "@apollo/client";
import type { Fruit, Vegetable } from "@prisma/client";
import { Produces, Seasons } from "@/types/types";
import { useProduceContext } from "@/app/context/produce";
import ProduceItemButton from "./ProduceItemButton";
import Loading from "./Loading";
import { capitalize } from "../lib/utils";
import { FRUITS_BY_SEASON, VEGETABLES_BY_SEASON } from "../lib/queries";

interface ProducePropsTypes {
  season: Seasons | null;
  selectedProduce: string | null;
  setSelectedProduce: (produceName: string | null) => void;
}

const queryMap = {
  [Produces.FRUITS]: FRUITS_BY_SEASON,
  [Produces.VEGETABLES]: VEGETABLES_BY_SEASON,
};

export const Produce: React.FC<ProducePropsTypes> = ({
  season,
  selectedProduce,
  setSelectedProduce,
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
            {...{ season, selectedProduce, setSelectedProduce }}
          />
        </li>
      ))}
    </ul>
  );
};
