"use client";

import { Ruler, Hammer, Cable, Monitor, Brush, GraduationCap } from "lucide-react";

const INCLUDES = [
  {
    icon: Ruler,
    title: "תכנון מלא של המרחב והקיר",
    text: "תכנון אדריכלי מפורט בהתאמה אישית למבנה בית הספר ולצרכים הפדגוגיים.",
    tint: "ls:bg-pastel-mint",
    iconBg: "ls:bg-brand-green",
  },
  {
    icon: Hammer,
    title: "תשתית גבס",
    text: "נישות גבס שקועות עם שכבת ייסוד שמקשרת בין הגבס ועמידות לאורך זמן",
    tint: "ls:bg-pastel-butter",
    iconBg: "ls:bg-brand-blue",
  },
  {
    icon: Cable,
    title: "תשתיות חשמל ותקשורת",
    text: "חיווט מתקדם, פריסת תקשורת יציבה ותשתיות מוגנות לבטיחות מקסימלית.",
    tint: "ls:bg-pastel-sky",
    iconBg: "ls:bg-brand-green",
  },
  {
    icon: Monitor,
    title: "מסכי טאץ׳ ומחשבים",
    text: "התקנת מסכי מגע חכמים מהסדרות המתקדמות ועמדות עבודה מותאמות לסביבת הלמידה.",
    tint: "ls:bg-pastel-pink",
    iconBg: "ls:bg-brand-blue",
  },
  {
    icon: Brush,
    title: "עיצוב מעורר השראה",
    text: "שילוב עיצוב מקצועי ואמנות חזותית המעניקה זהות וצבעוניות למרחב.",
    tint: "ls:bg-pastel-lilac",
    iconBg: "ls:bg-brand-green",
  },
  {
    icon: GraduationCap,
    title: "התאמה לדרישות משרד החינוך",
    text: "כל המתקנים עומדים בתקני הבטיחות של משרד החינוך עם אישורים מתאימים.",
    tint: "ls:bg-pastel-sage",
    iconBg: "ls:bg-brand-blue",
  },
];

export function ProjectIncludes() {
  return (
    <div className="ls:grid ls:gap-5 ls:sm:grid-cols-2 ls:lg:grid-cols-3">
      {INCLUDES.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className={`${item.tint} ls:relative ls:rounded-3xl ls:p-6 ls:pt-10 ls:text-foreground ls:shadow-sm ls:transition-transform ls:duration-300 ls:hover:-translate-y-1 ls:hover:shadow-xl`}
          >
            <div
              className={`ls:mx-auto ls:mb-4 ls:grid ls:h-14 ls:w-14 ls:place-items-center ls:rounded-2xl ${item.iconBg} ls:text-primary-foreground ls:shadow-md`}
            >
              <Icon className="ls:h-6 ls:w-6" />
            </div>
            <h3 className="ls:text-center ls:text-lg ls:font-extrabold">{item.title}</h3>
            <p className="ls:mt-2 ls:text-center ls:text-sm ls:text-foreground/75 ls:leading-relaxed">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
