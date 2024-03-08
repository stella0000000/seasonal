import { Seasons } from "@/types/types";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const genId = (season: Seasons, produceName: string) => {
  const id = `${season}-${produceName}`;
  return id;
};

export const capitalize = (word: string) => {
  const firstLetter = word[0].toUpperCase();
  return firstLetter + word.substring(1);
};
