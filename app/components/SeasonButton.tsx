import { useProduceContext } from "@/app/context/produce";
import { Seasons } from "@/types/types";
import { useContext } from "react";
import { DescriptionsContext } from "../context/description";

interface SeasonButtonProps {
  seasonName: string;
  season: Seasons | null;
  setSeason: (season: Seasons) => void;
  setSelectedProduce: (produceName: string | null) => void;
}

const SeasonButton: React.FC<SeasonButtonProps> = ({
  seasonName,
  season,
  setSeason,
  setSelectedProduce,
}) => {
  const { produceType } = useProduceContext();
  const { isDescriptionUpdating } = useContext(DescriptionsContext);

  const handleClick = () => {
    if (produceType) {
      setSeason(seasonName as Seasons);
      setSelectedProduce(null);
    }
  };

  const buttonColor = season === seasonName ? "text-[#ff2da7]" : "text-black";

  return (
    <button
      className={`${buttonColor} ${!produceType && "opacity-30"} ${
        produceType && "hover:text-[#ff2da7]"
      }`}
      disabled={!produceType && isDescriptionUpdating}
      onClick={handleClick}
    >
      {seasonName}
    </button>
  );
};

export default SeasonButton;
