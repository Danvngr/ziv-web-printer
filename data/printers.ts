// תוכן לדוגמה בלבד. אין כאן הוראות מאומתות.
// דגם חדש: אובייקט ב-machines. מזהה קבוע, כינויים לחיפוש, תמונה אופציונלית.
// מדריך: guides.counter או guides.toner. בלי steps המדריך מוצג כ״יעלה בקרוב״.

export type GuideKind = "counter" | "toner";

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
  guides: Partial<Record<GuideKind, Guide>>;
}

const sampleCounter: Guide = {
  intro: "תוכן לדוגמה. זה אינו הסבר מאומת להוצאת מונה.",
  steps: [
    {
      title: "פתיחת המסך",
      text: "תוכן לדוגמה. כאן יופיע הסבר קצר, והתמונה תסמן את הכפתור.",
      image: "/guides/sample-counter-1.svg",
      alt: "תוכן לדוגמה. איור של מסך מכונה עם עיגול על הכפתור.",
    },
    {
      title: "בחירת מונה",
      text: "תוכן לדוגמה. כאן יופיע לאן ללחוץ כדי להציג את המונה.",
      image: "/guides/sample-counter-2.svg",
      alt: "תוכן לדוגמה. איור עם חץ לעבר סימון המונה.",
    },
    {
      title: "צילום המספר",
      text: "תוכן לדוגמה. כאן יופיע איך המספר נראה על הצג לפני השליחה.",
      image: "/guides/sample-counter-3.svg",
      alt: "תוכן לדוגמה. איור של צג עם מספר מונה מסומן.",
    },
  ],
};

const sampleToner: Guide = {
  intro: "תוכן לדוגמה. זה אינו הסבר מאומת להחלפת טונר.",
  steps: [
    {
      title: "פתיחת המכסה",
      text: "תוכן לדוגמה. כאן יופיע איזה מכסה לפתוח.",
      image: "/guides/sample-toner-1.svg",
      alt: "תוכן לדוגמה. איור של מכסה מסומן בעיגול.",
    },
    {
      title: "החלפת המחסנית",
      text: "תוכן לדוגמה. כאן יופיע כיוון ההחלפה, אחרי שההוראה תאומת.",
      image: "/guides/sample-toner-2.svg",
      alt: "תוכן לדוגמה. איור עם חץ לכיוון החלפת המחסנית.",
    },
  ],
};

export const placeholderImage = "/guides/placeholder.svg";

export const machines: Machine[] = [
  {
    id: "sample-sp-100",
    brand: "דוגמה",
    model: "SP-100",
    aliases: ["sp100", "sp 100", "אס פי 100"],
    image: "/guides/sample-machine.svg",
    sample: true,
    guides: { counter: sampleCounter, toner: sampleToner },
  },
  {
    id: "sample-sp-200",
    brand: "דוגמה",
    model: "SP-200",
    aliases: ["sp200", "sp 200"],
    image: "/guides/sample-machine.svg",
    sample: true,
    guides: { toner: sampleToner },
  },
  {
    id: "sample-copy-10",
    brand: "OfficeDemo",
    model: "Copy 10",
    aliases: ["copy10", "copy-10", "קופי 10"],
    sample: true,
    guides: {},
  },
];

export const guideKinds = ["counter", "toner"] as const;

export function isGuideKind(value: string): value is GuideKind {
  return value === "counter" || value === "toner";
}

export function guideLabel(kind: GuideKind): { card: string; title: string } {
  if (kind === "counter") return { card: "איך מוציאים מונה?", title: "הוצאת מונה" };
  return { card: "איך מחליפים טונר?", title: "החלפת טונר" };
}

export function normalizeSearch(value: string): string {
  return value.trim().toLowerCase().replace(/[\s\-–—_./]+/g, "").slice(0, 80);
}

export function filterMachines(list: readonly Machine[], query: string): Machine[] {
  const q = normalizeSearch(query);
  if (!q) return [...list];
  return list.filter((machine) =>
    [machine.brand, machine.model, ...machine.aliases].some((part) => normalizeSearch(part).includes(q)),
  );
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
