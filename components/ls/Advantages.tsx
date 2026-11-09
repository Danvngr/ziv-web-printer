"use client";

import { Check } from "lucide-react";

const ADVANTAGES = [
  "שדרוג משמעותי של סביבת הלמידה",
  "חוויית למידה אינטראקטיבית ומתקדמת",
  "פתרון עמיד, בטיחותי ונוח לשימוש",
  "מראה מודרני ומרשים שמבליט את המוסד",
  "שילוב מלא בין עיצוב לטכנולוגיה",
];

export function Advantages() {
  return (
    <div className="ls:surface-card ls:rounded-3xl ls:p-6 ls:sm:p-8">
      <ul className="ls:space-y-4">
        {ADVANTAGES.map((text) => (
          <li key={text} className="ls:flex ls:items-start ls:gap-3">
            <span className="ls:mt-0.5 ls:grid ls:h-6 ls:w-6 ls:shrink-0 ls:place-items-center ls:rounded-full ls:bg-brand-green ls:text-primary-foreground">
              <Check className="ls:h-4 ls:w-4" strokeWidth={3} />
            </span>
            <span className="ls:text-base ls:sm:text-lg ls:font-semibold ls:text-foreground/90">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
