import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { FC, useContext } from "react";
import { producePrompt } from "../helpers/constants/produce-prompt";
import { DescriptionsContext } from "../context/description";
import { Seasons } from "@/types/types";
import { genId } from "../lib/utils";

interface ProduceItemButtonPropsTypes {
  value: string;
  season: Seasons | null;
  selectedProduce: string | null;
  setSelectedProduce: (produceName: string) => void;
  setDescription: (text: string) => void;
}

export const ProduceItemButton: FC<ProduceItemButtonPropsTypes> = ({
  value,
  season,
  selectedProduce,
  setSelectedProduce,
  setDescription,
}) => {
  const {
    descriptions,
    addDescription,
    updateDescription,
    setIsDescriptionUpdating,
  } = useContext(DescriptionsContext);

  const prompt = producePrompt(value);
  const id: string = genId(season!, value);

  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return await response.text();
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
    onSuccess: (data) => {
      addDescription(id, data);
      setSelectedProduce(value);
    },
    onMutate: () => {
      setIsDescriptionUpdating(true);
    },
    onSettled: () => {
      setIsDescriptionUpdating(false);
    },
  });

  const handleClick = () => {
    setDescription("");
    setSelectedProduce(value);
    if (!descriptions[id]) mutate();
  };

  const buttonColor =
    selectedProduce === value ? "text-[#ff2da7]" : "text-black";

  return (
    <button
      className={`${buttonColor} hover:text-[#ff2da7]`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default ProduceItemButton;
