import { Produces } from "@/types/types";
import { ReactNode, createContext, useContext, useState } from "react";

export interface ProduceContextType {
  produceType: Produces;
  setProduceType: React.Dispatch<React.SetStateAction<Produces>>;
}

type ProviderProps = {
  children: ReactNode;
};

const ProduceContext = createContext<ProduceContextType | undefined>(undefined);

// ProduceContextProvider
export const ProduceContextProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  const [produceType, setProduceType] = useState<Produces>(Produces.FRUITS);

  return (
    <ProduceContext.Provider value={{ produceType, setProduceType }}>
      {children}
    </ProduceContext.Provider>
  );
};

// useProduceContext hook
export function useProduceContext() {
  const context = useContext(ProduceContext);

  if (!context)
    throw new Error(
      "useProduceContext must be wrapped in ProduceContextProvider."
    );

  return context;
}
