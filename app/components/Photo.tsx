import { openai } from "@/lib/openai";

const Image = () => {
  const generateImage = async () => {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "a fresh pear with transparent background",
      n: 1,
      size: "1024x1024",
    });
    console.log({ response });
  };

  return <button onClick={generateImage}>gen image</button>;
};

export default Image;
