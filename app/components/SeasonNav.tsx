import { Seasons } from "@/types/types";
import SeasonButton from "./SeasonButton";

interface SeasonNavPropsTypes {
  season: Seasons | null;
  setSeason: (season: Seasons) => void;
  setSelectedProduce: (produceName: string | null) => void;
  setDescription: (description: string) => void;
}

export function SeasonNav({
  season,
  setSeason,
  setSelectedProduce,
  setDescription,
}: SeasonNavPropsTypes) {
  return (
    <div className="flex gap-x-10">
      {Object.values(Seasons).map((seasonItem, idx) => (
        <SeasonButton
          key={idx}
          value={seasonItem}
          {...{ season, setSeason, setSelectedProduce, setDescription }}
        />
      ))}
    </div>
  );
}
