import { useMutation } from "@tanstack/react-query";
import { FC } from "react";
import { producePrompt } from "../helpers/constants/produce-prompt";
// import { cn } from "../lib/utils";

interface ProduceItemButtonPropsTypes {
  label: string;
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
  label,
  selectedProduce,
  setSelectedProduce,
  setDescription,
}) => {
  const prompt = producePrompt(label);

  // const { mutate: sendPrompt, isLoading } = useMutation({
  //   mutationFn: async () => {
  //     const response = await fetch("/api/openai", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         prompt,
  //       }),
  //       onSuccess: () => {
  //         console.log("success useMutation");
  //       },
  //     });

  //     return response.body;
  //   },
  // });

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
      console.log({ data });
      setDescription(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = () => {
    setSelectedProduce(label);
    generateText();
  };

  const buttonColor =
    selectedProduce === label ? "text-[#c7ff2d]" : "text-black";

  return (
    <button
      className={`${buttonColor} hover:text-[#c7ff2d]`}
      // className={cn("hover:text-[#c7ff2d]", {
      //   "text-[#c7ff2d]": selectedProduce === label,
      //   "text-black": selectedProduce !== label,
      // })}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default ProduceItemButton;
