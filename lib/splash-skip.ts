export const splashStorageKey = "yair-splash";

export function shouldSkipSplash(input: {
  seen: string | null;
  reduce: boolean;
  motionStop: boolean;
}): boolean {
  return input.reduce || input.seen === "1" || input.motionStop;
}
