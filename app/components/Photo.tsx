import { useState } from "react";

export default function Photo() {
  const [imageData, setImageData] = useState<string | null>(null);

  const handleTextToImage = async (text: string) => {
    const resp = await fetch(
      "https://api.deepai.org/api/impressionism-painting-generator",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": "DEEPAI_API_KEY", // fix
        },
        body: JSON.stringify({
          text: "YOUR_TEXT_HERE",
        }),
      }
    );

    const data = await resp.json();
    // console.log({ data });
    setImageData(data.output_url);
  };

  return (
    <div>
      <button onClick={() => handleTextToImage("harvesting strawberies")}>
        Convert Text to Image
      </button>
      {imageData && <img src={imageData} alt="Generated Image" />}
    </div>
  );
}

// import { openai } from "@/lib/openai";

// const Photo = () => {
//   const generatePhoto = async () => {
//     const response = await openai.images.generate({
//       model: "dall-e-3",
//       prompt: "a fresh pear with transparent background",
//       n: 1,
//       size: "1024x1024",
//     });
//     // console.log({ response });
//   };

//   return <button onClick={generatePhoto}>gen Photo</button>;
// };

// export default Photo;
