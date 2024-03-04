import { Seasons } from "@/types/types";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function genId(season: Seasons, produceName: string) {
  const id = `${season}-${produceName}`;
  return id;
}
