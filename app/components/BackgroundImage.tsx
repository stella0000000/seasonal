import Image from "next/image";
import background from "@/public/background.jpg";

const BackgroundImage = () => {
  return (
    <>
      <Image
        className="fixed top-0 right-0 z-[-1000] h-screen opacity-100"
        src={background}
        alt="Description of your image"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#d2cabd] to-transparent opacity-100 z-[-10]" />
    </>
  );
};

export default BackgroundImage;
