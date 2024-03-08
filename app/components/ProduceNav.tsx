import { Produces } from "@/types/types";
import ProduceButton from "./ProduceButton";

interface ProduceNavPropsTypes {
  setSelectedProduce: (produceName: string | null) => void;
}

export function ProduceNav({ setSelectedProduce }: ProduceNavPropsTypes) {
  return (
    <div className="flex gap-x-10">
      {Object.values(Produces).map((produceItem, idx) => (
        <ProduceButton
          key={idx}
          produceName={produceItem}
          {...{ setSelectedProduce }}
        />
      ))}
    </div>
  );
}
