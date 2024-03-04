import { useContext } from "react";
import { DescriptionsContext } from "../context/description";
import { Seasons } from "@/types/types";

interface DescriptionPropsTypes {
  selectedProduce: string | null;
}

const Description: React.FC<DescriptionPropsTypes> = ({
  selectedProduce,
}: DescriptionPropsTypes) => {
  const { descriptions } = useContext(DescriptionsContext);

  const style =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center whitespace-pre-line";

  return (
    descriptions[selectedProduce!] && (
      <p className={style}>{descriptions[selectedProduce!]}</p>
    )
  );
};

export default Description;
