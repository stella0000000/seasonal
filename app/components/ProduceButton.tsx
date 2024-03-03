import { Produces } from "@/types/types";
import { useProduceContext } from "@/app/context/produce";

interface ProduceButtonTypes {
  value: Produces;
  setDescription: (description: string | null) => void;
}

export const ProduceButton: React.FC<ProduceButtonTypes> = ({
  value,
  setDescription,
}) => {
  const { produceType, setProduceType } = useProduceContext();

  const handleClick = () => {
    setProduceType(value);
    setDescription(null);
  };

  const buttonColor = produceType === value ? "text-[#c7ff2d]" : "text-black";

  return (
    <button
      className={`${buttonColor} hover:text-[#c7ff2d]`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default ProduceButton;
