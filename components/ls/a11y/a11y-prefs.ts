export type A11yPrefs = {
  scale: number;
  contrast: "off" | "high" | "invert";
  grayscale: boolean;
  links: boolean;
  font: boolean;
  spacing: boolean;
  motion: boolean;
  cursor: boolean;
  focus: boolean;
};

export const A11Y_STORAGE_KEY = "ls-a11y-prefs";
export const SCALE_STEPS = [1, 1.25, 1.5, 1.75, 2];

export const DEFAULT_PREFS: A11yPrefs = {
  scale: 1,
  contrast: "off",
  grayscale: false,
  links: false,
  font: false,
  spacing: false,
  motion: false,
  cursor: false,
  focus: false,
};

const ATTRS = [
  "data-ls-a11y-scale-up",
  "data-ls-a11y-contrast",
  "data-ls-a11y-grayscale",
  "data-ls-a11y-links",
  "data-ls-a11y-font",
  "data-ls-a11y-spacing",
  "data-ls-a11y-motion",
  "data-ls-a11y-cursor",
  "data-ls-a11y-focus",
] as const;

export function applyPrefs(prefs: A11yPrefs) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.style.setProperty("--ls-a11y-scale", String(prefs.scale));
  root.classList.toggle("ls-text-scale", prefs.scale > 1);
  const set = (attr: string, value: string | false) => {
    if (value) root.setAttribute(attr, value);
    else root.removeAttribute(attr);
  };
  set("data-ls-a11y-scale-up", prefs.scale > 1 && "on");
  set("data-ls-a11y-contrast", prefs.contrast !== "off" && prefs.contrast);
  set("data-ls-a11y-grayscale", prefs.grayscale && "on");
  set("data-ls-a11y-links", prefs.links && "on");
  set("data-ls-a11y-font", prefs.font && "readable");
  set("data-ls-a11y-spacing", prefs.spacing && "on");
  set("data-ls-a11y-motion", prefs.motion && "off");
  set("data-ls-a11y-cursor", prefs.cursor && "big");
  set("data-ls-a11y-focus", prefs.focus && "on");
}

export function clearLsA11y() {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  for (const attr of ATTRS) root.removeAttribute(attr);
  root.classList.remove("ls-text-scale");
  root.style.removeProperty("--ls-a11y-scale");
}

export function readPrefs(): A11yPrefs {
  if (typeof window === "undefined") return DEFAULT_PREFS;
  let stored: Partial<A11yPrefs> = {};
  try {
    stored = JSON.parse(localStorage.getItem(A11Y_STORAGE_KEY) || "{}") || {};
  } catch {
    stored = {};
  }
  const media = window.matchMedia;
  const next = { ...DEFAULT_PREFS, ...stored };
  if (stored.motion === undefined && media?.("(prefers-reduced-motion: reduce)").matches) {
    next.motion = true;
  }
  if (stored.contrast === undefined && media?.("(prefers-contrast: more)").matches) {
    next.contrast = "high";
  }
  return next;
}

export const LS_BOOT_SNIPPET = `(function(){try{var p={};try{p=JSON.parse(localStorage.getItem("ls-a11y-prefs")||"{}")||{}}catch(e){}var m=window.matchMedia;if(p.motion===undefined&&m&&m("(prefers-reduced-motion: reduce)").matches)p.motion=true;if(p.contrast===undefined&&m&&m("(prefers-contrast: more)").matches)p.contrast="high";var d=document.documentElement;var s=Number(p.scale)||1;d.style.setProperty("--ls-a11y-scale",String(s));if(s>1)d.classList.add("ls-text-scale");if(s>1)d.setAttribute("data-ls-a11y-scale-up","on");if(p.contrast&&p.contrast!=="off")d.setAttribute("data-ls-a11y-contrast",p.contrast);if(p.grayscale)d.setAttribute("data-ls-a11y-grayscale","on");if(p.links)d.setAttribute("data-ls-a11y-links","on");if(p.font)d.setAttribute("data-ls-a11y-font","readable");if(p.spacing)d.setAttribute("data-ls-a11y-spacing","on");if(p.motion)d.setAttribute("data-ls-a11y-motion","off");if(p.cursor)d.setAttribute("data-ls-a11y-cursor","big");if(p.focus)d.setAttribute("data-ls-a11y-focus","on");}catch(e){}})();`;
