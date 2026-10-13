// דגם חדש: אובייקט ב-machines. מזהה קבוע, כינויים לחיפוש, תמונה אופציונלית.
// מדריך: guides.counter, guides.meter (הוצאת מונה) או guides.toner. בלי steps המדריך מוצג כ״יעלה בקרוב״.

export type GuideKind = "counter" | "meter" | "toner";
export type DeviceCategory = "printer" | "copier";

export interface GuideStep {
  title: string;
  text: string;
  image: string;
  alt: string;
}

export interface Guide {
  intro: string;
  steps: GuideStep[];
}

export interface Machine {
  id: string;
  brand: string;
  model: string;
  aliases: string[];
  image?: string;
  sample: boolean;
  category: DeviceCategory;
  guides: Partial<Record<GuideKind, Guide>>;
}

const canonMeter: Guide = {
  intro: "",
  steps: [
    {
      title: "חזרה למסך הבית",
      text: "אם אינכם במסך הבית, לחצו על כפתור הבית שמתחת למסך. זה הכפתור עם סמל הבית.",
      image: "/guides/canon-mf655cdw-1.png",
      alt: "כפתור הבית שמתחת למסך מסומן בעיגול",
    },
    {
      title: "פתיחת Status Monitor",
      text: "במסך הבית לחצו על Status Monitor, בפינה הימנית התחתונה של המסך.",
      image: "/guides/canon-mf655cdw-2.png",
      alt: "Status Monitor מסומן בעיגול בפינה הימנית התחתונה",
    },
    {
      title: "כניסה לפרטי המכשיר",
      text: "לחצו על Device Information.",
      image: "/guides/canon-mf655cdw-3.png",
      alt: "Device Information מסומן בעיגול",
    },
    {
      title: "בחירת בדיקת המונה",
      text: "לחצו על Check Counter.",
      image: "/guides/canon-mf655cdw-4.png",
      alt: "Check Counter מסומן בעיגול",
    },
    {
      title: "צילום המונה",
      text: "על המסך יופיעו מספרי המונה. צלמו את המסך ושלחו את התמונה בוואטסאפ. בהודעה כתבו גם את מספר המכונה שעל המדבקה.",
      image: "/guides/canon-mf655cdw-5.png",
      alt: "מסך המונה מסומן במסגרת",
    },
  ],
};

export const placeholderImage = "/guides/placeholder.svg";

export const machines: Machine[] = [
  {
    id: "canon-mf655cdw",
    brand: "Canon",
    model: "i-SENSYS MF655Cdw",
    aliases: ["mf655cdw", "mf655", "i-sensys", "isensys", "canon mf655"],
    image: "/printers/canon-mf655cdw.png",
    sample: false,
    category: "printer",
    guides: { meter: canonMeter },
  },
];

export const guideKinds = ["counter", "toner"] as const;

export function isGuideKind(value: string): value is GuideKind {
  return value === "counter" || value === "meter" || value === "toner";
}

export function guideLabel(kind: GuideKind): { card: string; title: string } {
  if (kind === "counter" || kind === "meter") return { card: "מדריך להוצאת מונה", title: "מדריך להוצאת מונה" };
  return { card: "מדריך להחלפת טונר", title: "מדריך להחלפת טונר" };
}

export function machineNameWords(brand: string, model: string): string[] {
  return `${brand} ${model}`.trim().split(/\s+/).filter(Boolean);
}

export function machineGuideLinks(machine: Machine): GuideKind[] {
  const meter = (machine.guides.meter?.steps.length ?? 0) > 0;
  const counter = (machine.guides.counter?.steps.length ?? 0) > 0;
  const reading: GuideKind = meter && !counter ? "meter" : "counter";
  return [reading, "toner"];
}

export function normalizeSearch(value: string): string {
  return value.trim().toLowerCase().replace(/[\s\-–—_./]+/g, "").slice(0, 80);
}

export function filterMachines(
  list: readonly Machine[],
  query: string,
  category?: DeviceCategory,
): Machine[] {
  const q = normalizeSearch(query);
  if (!q) {
    const pool = category ? list.filter((machine) => machine.category === category) : list;
    return [...pool];
  }
  return list.filter((machine) =>
    [machine.brand, machine.model, ...machine.aliases].some((part) => normalizeSearch(part).includes(q)),
  );
}

export function brandsInCategory(list: readonly Machine[], category: DeviceCategory): string[] {
  const brands: string[] = [];
  for (const machine of list) {
    if (machine.category !== category || brands.includes(machine.brand)) continue;
    brands.push(machine.brand);
  }
  return brands;
}

export function machinesByBrand(list: readonly Machine[]): [string, Machine[]][] {
  const groups = new Map<string, Machine[]>();
  for (const machine of list) {
    const current = groups.get(machine.brand) ?? [];
    current.push(machine);
    groups.set(machine.brand, current);
  }
  return [...groups.entries()];
}

export function getMachine(list: readonly Machine[], id: string): Machine | undefined {
  return list.find((machine) => machine.id === id);
}

export function readyGuide(machine: Machine, kind: GuideKind): Guide | undefined {
  const guide = machine.guides[kind];
  if (!guide || guide.steps.length === 0) return undefined;
  return guide;
}
