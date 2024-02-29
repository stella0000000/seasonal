import { ReactNode, createContext, useContext, useState } from "react";

export enum ProduceType {
  FRUIT = "FRUIT",
  VEGETABLE = "VEGETABLE",
}

export interface ProduceContextType {
  produceType: ProduceType;
  setProduceType: React.Dispatch<React.SetStateAction<ProduceType>>;
}

type ProviderProps = {
  children: ReactNode;
};

const ProduceContext = createContext<ProduceContextType | undefined>(undefined);

// ProduceContextProvider
export const ProduceContextProvider: React.FC<ProviderProps> = ({
  children,
}) => {
  const [produceType, setProduceType] = useState<ProduceType>(
    ProduceType.FRUIT
  );

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
