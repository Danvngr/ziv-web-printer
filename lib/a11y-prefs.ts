export type TextSize = "normal" | "110" | "125";

export type A11yPrefs = {
  text: TextSize;
  contrast: boolean;
  grayscale: boolean;
  links: boolean;
  font: boolean;
  motion: boolean;
};

export const a11yAttrNames = [
  "data-a11y-text",
  "data-a11y-contrast",
  "data-a11y-grayscale",
  "data-a11y-links",
  "data-a11y-font",
  "data-a11y-motion",
] as const;

export type A11yAttrName = (typeof a11yAttrNames)[number];

export const defaultA11yPrefs: A11yPrefs = {
  text: "normal",
  contrast: false,
  grayscale: false,
  links: false,
  font: false,
  motion: false,
};

const textSizes = new Set<TextSize>(["normal", "110", "125"]);

export function parseA11yPrefs(raw: string | null): A11yPrefs {
  if (!raw) return defaultA11yPrefs;
  try {
    const data = JSON.parse(raw) as Partial<A11yPrefs>;
    const text = textSizes.has(data.text as TextSize) ? (data.text as TextSize) : "normal";
    return {
      text,
      contrast: data.contrast === true,
      grayscale: data.grayscale === true,
      links: data.links === true,
      font: data.font === true,
      motion: data.motion === true,
    };
  } catch {
    return defaultA11yPrefs;
  }
}

export function a11yDataAttrs(prefs: A11yPrefs): Partial<Record<A11yAttrName, string>> {
  const attrs: Partial<Record<A11yAttrName, string>> = {};
  if (prefs.text !== "normal") attrs["data-a11y-text"] = prefs.text;
  if (prefs.contrast) attrs["data-a11y-contrast"] = "on";
  if (prefs.grayscale) attrs["data-a11y-grayscale"] = "on";
  if (prefs.links) attrs["data-a11y-links"] = "on";
  if (prefs.font) attrs["data-a11y-font"] = "on";
  if (prefs.motion) attrs["data-a11y-motion"] = "on";
  return attrs;
}
