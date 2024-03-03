import { Produces } from "@/types/types";
import ProduceButton from "./ProduceButton";

interface ProduceNavPropsTypes {
  setDescription: (description: string | null) => void;
}

export function ProduceNav({ setDescription }: ProduceNavPropsTypes) {
  return (
    <div className="flex gap-x-10">
      {Object.values(Produces).map((produce) => (
        <ProduceButton key={produce} label={produce} {...{ setDescription }} />
      ))}
    </div>
  );
}
