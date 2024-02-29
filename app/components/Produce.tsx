import { useEffect } from "react";
import { ProduceType, useProduceContext } from "../context";

export const Produce: React.FC = () => {
  const { produceType, setProduceType } = useProduceContext();

  // fetch all produceTypes
  useEffect(() => {}, []);

  return <div>{produceType}</div>;
};
