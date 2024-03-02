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
  const handleClick = () => {
    setSeason(label as Seasons);
  };

  const buttonColor = season === label ? "text-[#c7ff2d]" : "text-black";

  return (
    <button className={buttonColor} onClick={handleClick}>
      {label}
    </button>
  );
};

export default SeasonButton;
