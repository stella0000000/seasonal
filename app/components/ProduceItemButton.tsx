import { useMutation } from "@tanstack/react-query";
import { FC, useContext } from "react";
import { producePrompt } from "../helpers/constants/produce-prompt";
import { Description, DescriptionsContext } from "../context/description";
import { Seasons } from "@/types/types";
// import { cn } from "../lib/utils";

interface ProduceItemButtonPropsTypes {
  value: string;
  season: Seasons | null;
  selectedProduce: string | null;
  setSelectedProduce: (selectedProduce: string) => void;
  setDescription: (text: string) => void;
}

/*
descriptions = [
  {
    id: 1, from nanoid,
    text: "blah blah blah"
  }
]

*/

export const ProduceItemButton: FC<ProduceItemButtonPropsTypes> = ({
  value,
  season,
  selectedProduce,
  setSelectedProduce,
  setDescription,
}) => {
  const prompt = producePrompt(value);
  const {
    descriptions,
    addDescription,
    removeDescription,
    updateDescription,
    setIsDescriptionUpdating,
  } = useContext(DescriptionsContext);

  const { mutate: sendPrompt, isPending } = useMutation({
    mutationFn: async (description: string) => {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      return response.body;
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream found.");

      const id = `${season}-${value}`; // SEASON-PRODUCE
      const responseDescription: Description = {
        id,
        text: "",
      };

      addDescription(responseDescription);
      setIsDescriptionUpdating(true);
      console.log(" hey");
      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        console.log({ chunkValue });
        updateDescription(id, (prev) => prev + chunkValue);
      }

      // clean up
      setIsDescriptionUpdating(false);
    },
  });

  const generateText = async () => {
    try {
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
      const data = await response.text();
      // console.log({ data });
      setDescription(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setDescription("");
    setSelectedProduce(value);
    generateText();
  };

  const buttonColor =
    selectedProduce === value ? "text-[#c7ff2d]" : "text-black";

  return (
    <button
      className={`${buttonColor} hover:text-[#c7ff2d]`}
      // className={cn("hover:text-[#c7ff2d]", {
      //   "text-[#c7ff2d]": selectedProduce === value,
      //   "text-black": selectedProduce !== value,
      // })}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default ProduceItemButton;
