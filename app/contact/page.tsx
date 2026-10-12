import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "יצירת קשר",
};

export default function ContactPage() {
  return (
    <article className="mx-auto my-10 max-w-3xl rounded-3xl bg-white px-6 py-14 text-muted shadow-card sm:px-10 md:my-16">
      <h1 className="text-4xl font-bold text-ink md:text-5xl">יצירת קשר</h1>
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
