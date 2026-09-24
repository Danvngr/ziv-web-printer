import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "יצירת קשר",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900">יצירת קשר</h1>
      <div className="mt-6 space-y-4 leading-8">
        <p>
          מפעיל האתר: [שם העוסק]. מספר עוסק: [מספר עוסק]. האתר עצמאי ואינו קשור ליצרני
          המדפסות, לרבות HP, Canon, Brother ו-Epson, אלא אם צוין אחרת במפורש.
        </p>
        <p>אין באתר טופס. אפשר לפנות בפרטים האלה:</p>
        <ul className="space-y-2">
          <li>אימייל: [אימייל]</li>
          <li>טלפון: [טלפון]</li>
          <li>כתובת: [כתובת]</li>
        </ul>
      </div>
    </article>
  );
}
