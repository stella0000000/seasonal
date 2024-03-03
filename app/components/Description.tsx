import { useContext } from "react";
import { DescriptionsContext } from "../context/description";

interface DescriptionPropsTypes {
  description: string | null;
}

const Description: React.FC<DescriptionPropsTypes> = ({
  description,
}: DescriptionPropsTypes) => {
  const { descriptions } = useContext(DescriptionsContext);

  console.log({ descriptions });

  const style =
    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center whitespace-pre-line";

  return <p className={style}>{description!}</p>;
};

export default Description;
