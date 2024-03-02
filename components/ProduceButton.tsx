import { Produces } from "@/types/types";
import { useProduceContext } from "@/app/context";

interface ProduceButtonTypes {
  label: Produces;
}

export const ProduceButton: React.FC<ProduceButtonTypes> = ({ label }) => {
  const { produceType, setProduceType } = useProduceContext();

  const handleClick = () => {
    setProduceType(label);
  };

  const buttonColor = produceType === label ? "text-[#c7ff2d]" : "text-black";

  return (
    <button className={buttonColor} onClick={handleClick}>
      {label}
    </button>
  );
};

export default ProduceButton;
