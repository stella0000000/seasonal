import { ReactNode, createContext, useState } from "react";

export interface Description {
  [key: string]: string;
}

export const DescriptionsContext = createContext<{
  descriptions: { [key: string]: string };
  isDescriptionUpdating: boolean;
  addDescription: (produceName: string, description: string) => void;
  removeDescription: (produceName: string) => void;
  updateDescription: (
    produceName: string,
    updateFn: (prevText: string) => string
  ) => void;
  setIsDescriptionUpdating: (isUpdating: boolean) => void;
}>({
  descriptions: {},
  isDescriptionUpdating: false,
  addDescription: () => {},
  removeDescription: () => {},
  updateDescription: () => {},
  setIsDescriptionUpdating: () => {},
});

export function DescriptionsProvider({ children }: { children: ReactNode }) {
  const [isDescriptionUpdating, setIsDescriptionUpdating] =
    useState<boolean>(false);
  const [descriptions, setDescriptions] = useState<{
    [key: string]: string;
  }>({});

  const addDescription = (produceName: string, description: string) => {
    setDescriptions((prev) => ({ ...prev, [produceName]: description }));
  };

  const removeDescription = (produceName: string) => {
    setDescriptions((prev) => {
      const { [produceName]: _, ...rest } = prev;
      return rest;
    });
  };

  const updateDescription = (
    produceName: string,
    updateFn: (prevText: string) => string
  ) => {
    setDescriptions((prev) => {
      const currentText = prev[produceName] || "";
      return { ...prev, [produceName]: updateFn(currentText) };
    });
  };

  return (
    <DescriptionsContext.Provider
      value={{
        descriptions,
        addDescription,
        removeDescription,
        updateDescription,
        isDescriptionUpdating,
        setIsDescriptionUpdating,
      }}
    >
      {children}
    </DescriptionsContext.Provider>
  );
}
