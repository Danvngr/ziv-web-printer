"use client";

import { useState } from "react";
import { Ruler, Hammer, Cable, Monitor, Brush, GraduationCap, X } from "lucide-react";
const afterImg = "/learning-spaces/after.jpg";

const SPOTS = [
  {
    id: 1,
    top: "20%",
    left: "18%",
    icon: Ruler,
    title: "תכנון מלא של המרחב והקיר",
    text: "תכנון אדריכלי מפורט בהתאמה אישית למבנה בית הספר ולצרכים הפדגוגיים.",
    mobileAlign: "left" as const,
  },
  {
    id: 2,
    top: "22%",
    left: "82%",
    icon: Hammer,
    title: "תשתית גבס",
    text: "נישות גבס שקועות עם שכבת ייסוד שמקשרת בין הגבס ועמידות לאורך זמן",
    mobileAlign: "right" as const,
  },
  {
    id: 3,
    top: "50%",
    left: "12%",
    icon: Cable,
    title: "תשתיות חשמל ותקשורת",
    text: "חיווט מתקדם, פריסת תקשורת יציבה ותשתיות מוגנות לבטיחות מקסימלית.",
    mobileAlign: "left" as const,
  },
  {
    id: 4,
    top: "52%",
    left: "50%",
    icon: Monitor,
    title: "מסכי טאץ׳ ומחשבים",
    text: "התקנת מסכי מגע חכמים מהסדרות המתקדמות ועמדות עבודה מותאמות לסביבת הלמידה.",
    mobileAlign: "center" as const,
  },
  {
    id: 5,
    top: "52%",
    left: "86%",
    icon: Brush,
    title: "עיצוב מעורר השראה",
    text: "שילוב עיצוב מקצועי ואמנות חזותית המעניקה זהות וצבעוניות למרחב.",
    mobileAlign: "right" as const,
  },
  {
    id: 6,
    top: "80%",
    left: "35%",
    icon: GraduationCap,
    title: "התאמה לדרישות משרד החינוך",
    text: "כל המתקנים עומדים בתקני הבטיחות של משרד החינוך עם אישורים מתאימים.",
    mobileAlign: "center" as const,
  },
];

export function Hotspots() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="ls:relative ls:aspect-[16/10] ls:w-full ls:rounded-3xl ls:ring-1 ls:ring-border ls:shadow-lg">
      <div className="ls:absolute ls:inset-0 ls:overflow-hidden ls:rounded-3xl">
        <img
          src={afterImg}
          alt="מרחב חכם"
          className="ls:absolute ls:inset-0 ls:h-full ls:w-full ls:object-cover"
          loading="lazy"
        />
        <div className="ls:absolute ls:inset-0 ls:bg-gradient-to-t ls:from-foreground/30 ls:via-foreground/5 ls:to-transparent" />
      </div>

      {SPOTS.map((s) => {
        const Icon = s.icon;
        const isOpen = open === s.id;
        return (
          <div key={s.id} className="ls:absolute" style={{ top: s.top, left: s.left }}>
            <button
              onClick={() => setOpen(isOpen ? null : s.id)}
              className="ls:relative ls:grid ls:h-10 ls:w-10 ls:sm:h-12 ls:sm:w-12 ls:-translate-x-1/2 ls:-translate-y-1/2 ls:place-items-center ls:rounded-full ls:bg-brand-green/80 ls:sm:bg-brand-green ls:text-primary-foreground ls:shadow-lg ls:ring-4 ls:ring-background/60 ls:animate-pulse-glow ls:hover:scale-110 ls:transition-transform"
              aria-label={s.title}
            >
              <Icon className="ls:h-4 ls:w-4 ls:sm:h-5 ls:sm:w-5" />
            </button>
            {isOpen && (
              <div
                className={[
                  "ls:absolute ls:z-10 ls:top-8 ls:w-52 ls:sm:w-64 ls:max-w-[85vw] ls:surface-card ls:rounded-2xl ls:p-4 animate-in fade-in zoom-in-95 ls:duration-200",
                  s.mobileAlign === "left"
                    ? "ls:left-0 ls:sm:left-1/2 ls:sm:-translate-x-1/2"
                    : s.mobileAlign === "right"
                      ? "ls:right-0 ls:sm:right-auto ls:sm:left-1/2 ls:sm:-translate-x-1/2"
                      : "ls:left-1/2 ls:-translate-x-1/2",
                ].join(" ")}
              >
                <div className="ls:flex ls:items-start ls:justify-between ls:mb-2">
                  <h4 className="ls:font-bold ls:text-brand-green">{s.title}</h4>
                  <button
                    onClick={() => setOpen(null)}
                    aria-label="סגור"
                    className="ls:text-muted-foreground ls:hover:text-foreground"
                  >
                    <X className="ls:h-4 ls:w-4" />
                  </button>
                </div>
                <p className="ls:text-sm ls:text-foreground/75 ls:leading-relaxed">{s.text}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
