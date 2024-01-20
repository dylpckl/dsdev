import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// inputs first go through clsx, then twMerge

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
