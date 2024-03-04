import { Produces } from "@/types/types";
import { useProduceContext } from "@/app/context/produce";

interface ProduceButtonTypes {
  value: Produces;
  setSelectedProduce: (produceName: string | null) => void;
  setDescription: (description: string) => void;
}

export const ProduceButton: React.FC<ProduceButtonTypes> = ({
  value,
  setSelectedProduce,
  setDescription,
}) => {
  const { produceType, setProduceType } = useProduceContext();

  const handleClick = () => {
    setProduceType(value);
    setSelectedProduce(null);
    setDescription("");
  };

  const buttonColor = produceType === value ? "text-[#ff2da7]" : "text-black";

  return (
    <button
      className={`${buttonColor} hover:text-[#ff2da7]`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default ProduceButton;
