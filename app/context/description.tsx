import { ReactNode, createContext, useState } from "react";

export interface Description {
  [key: string]: string;
}

export const DescriptionsContext = createContext<{
  descriptions: { [key: string]: string };
  isDescriptionUpdating: boolean;
  addDescription: (id: string, description: string) => void;
  removeDescription: (id: string) => void;
  updateDescription: (
    id: string,
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

  const addDescription = (id: string, description: string) => {
    setDescriptions((prev) => ({ ...prev, [id]: description }));
  };

  const removeDescription = (id: string) => {
    setDescriptions((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const updateDescription = (
    id: string,
    updateFn: (prevText: string) => string
  ) => {
    setDescriptions((prev) => {
      const currentText = prev[id] || ""; // Get the current description text or an empty string if it doesn't exist
      return { ...prev, [id]: updateFn(currentText) }; // Pass the current text to updateFn
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
