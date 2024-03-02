import { ProduceType, useProduceContext } from "@/app/context";

export const ProduceButton: React.FC = () => {
  const { produceType, setProduceType } = useProduceContext();

  return (
    <button
      className="text-[fuchsia]"
      onClick={() =>
        setProduceType(
          produceType === ProduceType.FRUIT
            ? ProduceType.VEGETABLE
            : ProduceType.FRUIT
        )
      }
    >
      {produceType}S
    </button>
  );
};
