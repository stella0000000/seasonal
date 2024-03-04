import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { FC, useContext } from "react";
import { producePrompt } from "../helpers/constants/produce-prompt";
import { DescriptionsContext } from "../context/description";

interface ProduceItemButtonPropsTypes {
  produceName: string;
  selectedProduce: string | null;
  setSelectedProduce: (produceName: string) => void;
  setDescription: (text: string) => void;
}

export const ProduceItemButton: FC<ProduceItemButtonPropsTypes> = ({
  produceName,
  selectedProduce,
  setSelectedProduce,
  setDescription,
}) => {
  const { descriptions, updateDescription, setIsDescriptionUpdating } =
    useContext(DescriptionsContext);

  const prompt = producePrompt(produceName);

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

      if (!response.ok) throw new Error("Failed to fetch data");

      return response.body;
    },
    onError: () => {
      toast.error("Something went wrong. Please try again.");
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream.");

      setIsDescriptionUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value);
        updateDescription(produceName!, (prevText) => {
          return prevText + chunk;
        });
      }

      setIsDescriptionUpdating(false);
      setSelectedProduce(produceName);
      // addDescription(id, description); // Add full description to context
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
    setSelectedProduce(produceName);
    if (!descriptions[produceName]) mutate();
  };

  const buttonColor =
    selectedProduce === produceName ? "text-[#ff2da7]" : "text-black";

  return (
    <button
      className={`${buttonColor} hover:text-[#ff2da7]`}
      onClick={handleClick}
    >
      {produceName}
    </button>
  );
};

export default ProduceItemButton;
