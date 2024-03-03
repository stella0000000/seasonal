import { useProduceContext } from "@/app/context/produce";
import { Seasons } from "@/types/types";

interface SeasonButtonProps {
  label: string;
  season: Seasons | null;
  setSeason: (season: Seasons) => void;
  setDescription: (description: string | null) => void;
}

const SeasonButton: React.FC<SeasonButtonProps> = ({
  label,
  season,
  setSeason,
  setDescription,
}) => {
  const { produceType } = useProduceContext();

  const handleClick = () => {
    setSeason(label as Seasons);
    setDescription(null);
  };

  const buttonColor = season === label ? "text-[#c7ff2d]" : "text-black";

  return (
    <button
      className={`${buttonColor} ${!produceType && "opacity-30"} ${
        produceType && "hover:text-[#c7ff2d]"
      }`}
      onClick={handleClick}
      disabled={!produceType}
    >
      {label}
    </button>
  );
};

export default SeasonButton;
