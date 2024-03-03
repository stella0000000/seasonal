import { useMutation } from "@tanstack/react-query";
import { FC } from "react";

interface ProduceItemButtonPropsTypes {
  label: string;
  selectedProduce: string | null;
  setSelectedProduce: (selectedProduce: string) => void;
  setDescription: (text: string) => void;
}

export const ProduceItemButton: FC<ProduceItemButtonPropsTypes> = ({
  label,
  selectedProduce,
  setSelectedProduce,
  setDescription,
}) => {
  // const { mutate: sendPrompt, isLoading } = useMutation({
  //   mutationFn: async () => {
  //     const response = await fetch("/api/openai", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         prompt: `Tell me exactly 3 interesting sentences about ${label} in paragraph format. Tell me how many calories are in ${label} in exactly 1 sentence. Give me exactly 2 sentences describing its nutritional value. Give me exactly 1 thing I can make with ${label}. Finally, write PS: and give me 1 kid friendly, and funny ${label} pun, and add Haha! at the end.`,
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
          prompt: `Tell me exactly 3 interesting sentences about ${label} in paragraph format. Tell me how many calories are in ${label} in exactly 1 sentence. Give me exactly 2 sentences describing its nutritional value. Give me exactly 1 thing I can make with ${label}. Finally, write PS: and give me 1 kid friendly, and funny ${label} pun, and add Haha! at the end.`,
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
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default ProduceItemButton;
