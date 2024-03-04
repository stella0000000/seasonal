import { Produces } from "@/types/types";
import { useProduceContext } from "@/app/context/produce";

interface ProduceButtonTypes {
  produceName: Produces;
  setSelectedProduce: (produceName: string | null) => void;
  setDescription: (description: string) => void;
}

export const ProduceButton: React.FC<ProduceButtonTypes> = ({
  produceName,
  setSelectedProduce,
  setDescription,
}) => {
  const { produceType, setProduceType } = useProduceContext();

  const handleClick = () => {
    setProduceType(produceName);
    setSelectedProduce(null);
    setDescription("");
  };

  const buttonColor =
    produceType === produceName ? "text-[#ff2da7]" : "text-black";

  return (
    <button
      className={`${buttonColor} hover:text-[#ff2da7]`}
      onClick={handleClick}
    >
      {produceName}
    </button>
  );
};

export default ProduceButton;
