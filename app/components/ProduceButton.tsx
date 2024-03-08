import { Produces } from "@/types/types";
import { useProduceContext } from "@/app/context/produce";
import { useContext } from "react";
import { DescriptionsContext } from "../context/description";

interface ProduceButtonTypes {
  produceName: Produces;
  setSelectedProduce: (produceName: string | null) => void;
  // setDescription: (description: string) => void;
}

export const ProduceButton: React.FC<ProduceButtonTypes> = ({
  produceName,
  setSelectedProduce,
  // setDescription,
}) => {
  const { produceType, setProduceType } = useProduceContext();
  const { isDescriptionUpdating } = useContext(DescriptionsContext);

  const handleClick = () => {
    setProduceType(produceName);
    setSelectedProduce(null);
    // setDescription("");
  };

  const buttonColor =
    produceType === produceName ? "text-[#ff2da7]" : "text-black";

  return (
    <button
      className={`${buttonColor} hover:text-[#ff2da7]`}
      onClick={handleClick}
      disabled={isDescriptionUpdating}
    >
      {produceName}
    </button>
  );
};

export default ProduceButton;
