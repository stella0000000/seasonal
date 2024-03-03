import { Produces } from "@/types/types";
import { useProduceContext } from "@/app/context/produce";

interface ProduceButtonTypes {
  label: Produces;
  setDescription: (description: string | null) => void;
}

export const ProduceButton: React.FC<ProduceButtonTypes> = ({
  label,
  setDescription,
}) => {
  const { produceType, setProduceType } = useProduceContext();

  const handleClick = () => {
    setProduceType(label);
    setDescription(null);
  };

  const buttonColor = produceType === label ? "text-[#c7ff2d]" : "text-black";

  return (
    <button
      className={`${buttonColor} hover:text-[#c7ff2d]`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default ProduceButton;
