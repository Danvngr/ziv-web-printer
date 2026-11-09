"use client";

import { Lightbulb, Monitor, BookOpen } from "lucide-react";

const PILLARS = [
  {
    icon: Lightbulb,
    title: "חדשנות",
    text: "מערכות למידה חדשניות המשלבות טכנולוגיה מתקדמת עם חוויית משתמש אינטואיטיבית.",
    tint: "ls:bg-pastel-butter",
    iconBg: "ls:bg-brand-green",
  },
  {
    icon: Monitor,
    title: "טכנולוגיה",
    text: "מסכי מגע חכמים, מחשבים ותשתיות תקשורת המותאמים לסביבת הלמידה המודרנית.",
    tint: "ls:bg-pastel-sky",
    iconBg: "ls:bg-brand-blue",
  },
  {
    icon: BookOpen,
    title: "למידה חווייתית",
    text: "סביבה אינטראקטיבית שמעוררת סקרנות, מעודדת מעורבות והופכת כל יום לימודים לחוויה משמעותית.",
    tint: "ls:bg-pastel-pink",
    iconBg: "ls:bg-brand-green",
  },
];

export function FutureVision() {
  return (
    <div className="ls:grid ls:gap-5 ls:sm:grid-cols-3 ls:[perspective:1000px]">
      {PILLARS.map((v, i) => {
        const Icon = v.icon;
        return (
          <div
            key={v.title}
            className={`${v.tint} ls:arch-frame ls:relative ls:p-6 ls:sm:p-7 ls:pt-10 ls:sm:pt-12 ls:text-foreground ls:shadow-sm ls:transition-transform ls:duration-500 ls:ease-out ls:hover:[transform:translateY(-6px)_rotateX(6deg)_rotateY(-4deg)_translateZ(20px)] ls:hover:shadow-2xl`}
            style={{ transformStyle: "preserve-3d", animationDelay: `${i * 0.15}s` }}
          >
            <div
              className={`ls:mx-auto ls:mb-4 ls:grid ls:h-14 ls:w-14 ls:place-items-center ls:rounded-2xl ${v.iconBg} ls:text-primary-foreground ls:shadow-md ls:animate-float`}
              style={{ animationDelay: `${i * 0.6}s`, transform: "translateZ(30px)" }}
            >
              <Icon className="ls:h-6 ls:w-6" />
            </div>
            <h3 className="ls:text-center ls:text-xl ls:font-extrabold">{v.title}</h3>
            <p className="ls:mt-2 ls:text-center ls:text-sm ls:text-foreground/75 ls:leading-relaxed">{v.text}</p>
          </div>
        );
      })}
    </div>
  );
}
