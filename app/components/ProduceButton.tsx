import { ProduceType, useProduceContext } from "../context";

export const ProduceButton: React.FC = () => {
  const { produceType, setProduceType } = useProduceContext();

  return (
    <button
      onClick={() =>
        setProduceType(
          produceType === ProduceType.FRUIT
            ? ProduceType.VEGETABLE
            : ProduceType.FRUIT
        )
      }
    >
      look @ {produceType}S
    </button>
  );
};
