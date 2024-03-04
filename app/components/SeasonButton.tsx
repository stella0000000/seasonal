import { useProduceContext } from "@/app/context/produce";
import { Seasons } from "@/types/types";
import { useContext } from "react";
import { DescriptionsContext } from "../context/description";

interface SeasonButtonProps {
  seasonName: string;
  season: Seasons | null;
  setSeason: (season: Seasons) => void;
  setSelectedProduce: (produceName: string | null) => void;
  setDescription: (description: string) => void;
}

const SeasonButton: React.FC<SeasonButtonProps> = ({
  seasonName,
  season,
  setSeason,
  setSelectedProduce,
  setDescription,
}) => {
  const { produceType } = useProduceContext();
  const { isDescriptionUpdating } = useContext(DescriptionsContext);

  const handleClick = () => {
    setSeason(seasonName as Seasons);
    setSelectedProduce(null);
    setDescription("");
  };

  const buttonColor = season === seasonName ? "text-[#ff2da7]" : "text-black";

  return (
    <button
      className={`${buttonColor} ${!produceType && "opacity-30"} ${
        produceType && "hover:text-[#ff2da7]"
      }`}
      onClick={handleClick}
      disabled={!produceType && isDescriptionUpdating}
    >
      {seasonName}
    </button>
  );
};

export default SeasonButton;
