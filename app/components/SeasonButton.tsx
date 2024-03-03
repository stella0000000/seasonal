import { useProduceContext } from "@/app/context/produce";
import { Seasons } from "@/types/types";

interface SeasonButtonProps {
  value: string;
  season: Seasons | null;
  setSeason: (season: Seasons) => void;
  setDescription: (description: string | null) => void;
}

const SeasonButton: React.FC<SeasonButtonProps> = ({
  value,
  season,
  setSeason,
  setDescription,
}) => {
  const { produceType } = useProduceContext();

  const handleClick = () => {
    setSeason(value as Seasons);
    setDescription(null);
  };

  const buttonColor = season === value ? "text-[#c7ff2d]" : "text-black";

  return (
    <button
      className={`${buttonColor} ${!produceType && "opacity-30"} ${
        produceType && "hover:text-[#c7ff2d]"
      }`}
      onClick={handleClick}
      disabled={!produceType}
    >
      {value}
    </button>
  );
};

export default SeasonButton;
