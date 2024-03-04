import { useProduceContext } from "@/app/context/produce";
import { Seasons } from "@/types/types";

interface SeasonButtonProps {
  value: string;
  season: Seasons | null;
  setSeason: (season: Seasons) => void;
  setSelectedProduce: (produceName: string | null) => void;
  setDescription: (description: string) => void;
}

const SeasonButton: React.FC<SeasonButtonProps> = ({
  value,
  season,
  setSeason,
  setSelectedProduce,
  setDescription,
}) => {
  const { produceType } = useProduceContext();

  const handleClick = () => {
    setSeason(value as Seasons);
    setSelectedProduce(null);
    setDescription("");
  };

  const buttonColor = season === value ? "text-[#ff2da7]" : "text-black";

  return (
    <button
      className={`${buttonColor} ${!produceType && "opacity-30"} ${
        produceType && "hover:text-[#ff2da7]"
      }`}
      onClick={handleClick}
      disabled={!produceType}
    >
      {value}
    </button>
  );
};

export default SeasonButton;
