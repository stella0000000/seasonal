import { useContext } from "react";
import { DescriptionsContext } from "../context/description";
import { Seasons } from "@/types/types";
import { genId } from "../lib/utils";

interface DescriptionPropsTypes {
  season: Seasons | null;
  selectedProduce: string | null;
}

const Description: React.FC<DescriptionPropsTypes> = ({
  season,
  selectedProduce,
}: DescriptionPropsTypes) => {
  const { descriptions } = useContext(DescriptionsContext);

  const id: string = genId(season!, selectedProduce!);

  // console.log({ id });
  console.log({ descriptions }, descriptions[id]);
  // console.log({ descriptions });

  const style =
    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center whitespace-pre-line";

  return descriptions[id] && <p className={style}>{descriptions[id]}</p>;
};

export default Description;
