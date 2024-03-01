import { useEffect } from "react";
import { ProduceType, useProduceContext } from "@/app/context";

export const Produce: React.FC = () => {
  const { produceType, setProduceType } = useProduceContext();

  return <div>{produceType}</div>;
};
