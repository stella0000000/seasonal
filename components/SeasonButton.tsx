import { useProduceContext } from "@/app/context";
import { Seasons } from "@/types/types";

interface SeasonButtonProps {
  season?: Seasons;
  label: string;
  setSeason: (season: Seasons) => void;
}

const SeasonButton: React.FC<SeasonButtonProps> = ({
  season,
  setSeason,
  label,
}) => {
  const { produceType, setProduceType } = useProduceContext();

  const handleClick = () => {
    setSeason(label as Seasons);
  };

  const buttonColor = season === label ? "text-[#c7ff2d]" : "text-black";

  return (
    <button
      className={`${buttonColor} ${!produceType && "opacity-30"} ${
        !produceType ? "" : "hover:text-[#c7ff2d]"
      }`}
      onClick={handleClick}
      disabled={!produceType}
    >
      {label}
    </button>
  );
};

export default SeasonButton;
