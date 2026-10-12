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

const STORAGE_KEY = "a11y-prefs";
const PREFS_EVENT = "a11y-prefs-change";

let snapshot = defaultA11yPrefs;
let snapshotRaw: string | null = null;
let hasRead = false;

export function readA11ySnapshot(): A11yPrefs {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }
  if (hasRead && raw === snapshotRaw) return snapshot;
  hasRead = true;
  snapshotRaw = raw;
  snapshot = parseA11yPrefs(raw);
  return snapshot;
}

export function subscribeA11y(onChange: () => void) {
  window.addEventListener(PREFS_EVENT, onChange);
  return () => window.removeEventListener(PREFS_EVENT, onChange);
}

export function writeA11yPrefs(next: A11yPrefs) {
  const raw = JSON.stringify(next);
  try {
    localStorage.setItem(STORAGE_KEY, raw);
  } catch {
    // Storage can be blocked. The choice still applies for this visit.
  }
  snapshot = next;
  snapshotRaw = raw;
  hasRead = true;
  window.dispatchEvent(new Event(PREFS_EVENT));
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
