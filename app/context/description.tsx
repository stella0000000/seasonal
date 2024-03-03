import { ReactNode, createContext, useState } from "react";

export interface Description {
  id: string;
  text: string;
}

export const DescriptionsContext = createContext<{
  descriptions: Description[];
  isDescriptionUpdating: boolean;
  // description from openai
  addDescription: (description: Description) => void;
  removeDescription: (id: string) => void;
  updateDescription: (
    id: string,
    updateFn: (prevText: string) => string
  ) => void;
  setIsDescriptionUpdating: (isUpdating: boolean) => void;
}>({
  descriptions: [],
  isDescriptionUpdating: false,
  addDescription: () => {},
  removeDescription: () => {},
  updateDescription: () => {},
  setIsDescriptionUpdating: () => {},
});

export function DescriptionsProvider({ children }: { children: ReactNode }) {
  const [isDescriptionUpdating, setIsDescriptionUpdating] =
    useState<boolean>(false);
  const [descriptions, setDescriptions] = useState<Description[]>([]);

  const addDescription = (description: Description) => {
    setDescriptions((prev) => [...prev, description]);
  };

  const removeDescription = (id: string) => {
    setDescriptions((prev) =>
      prev.filter((description) => description.id !== id)
    );
  };

  const updateDescription = (
    id: string,
    updateFn: (prevText: string) => string
  ) => {
    setDescriptions((prev) =>
      prev.map((description) => {
        if (description.id === id) {
          return { ...description, text: updateFn(description.text) };
        }

        return description;
      })
    );
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
