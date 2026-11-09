import { extendTailwindMerge } from "tailwind-merge";

const tw = extendTailwindMerge({ prefix: "ls" });

export function cn(...inputs: Array<string | false | null | undefined>) {
  return tw(inputs.filter((value): value is string => Boolean(value)));
}
