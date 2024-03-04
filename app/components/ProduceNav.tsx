import { Produces } from "@/types/types";
import ProduceButton from "./ProduceButton";

interface ProduceNavPropsTypes {
  setSelectedProduce: (produceName: string | null) => void;
  setDescription: (description: string) => void;
}

export function ProduceNav({
  setSelectedProduce,
  setDescription,
}: ProduceNavPropsTypes) {
  return (
    <div className="flex gap-x-10">
      {Object.values(Produces).map((produceItem, idx) => (
        <ProduceButton
          key={idx}
          value={produceItem}
          {...{ setSelectedProduce, setDescription }}
        />
      ))}
    </div>
  );
}
