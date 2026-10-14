import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "פרויקטים",
  description: "פרויקטים של יאיר סמארט אופיס. יפורסמו כאן אחרי אישור.",
};

const fields = [
  { title: "סוג הפרויקט", text: "התחום והיקף העבודה." },
  { title: "האתגר", text: "מה היה צריך לפתור." },
  { title: "הפתרון", text: "מה תוכנן והוקם." },
  { title: "התוצאה", text: "מה השתנה בשטח." },
];

export default function ProjectsPage() {
  return (
    <article className="wrap pb-16 pt-8 md:pt-14">
      <header className="max-w-3xl">
        <h1 className="yso-title">פרויקטים</h1>
        <p className="mt-4 text-lg leading-8 text-ink/70">
          פרויקט יעלה לכאן אחרי אישור פרסום, עם צילומים שאפשר להציג.
        </p>
      </header>

      <section className="band" aria-label="מבנה כרטיס פרויקט">
        <h2 className="text-2xl font-black text-ink">מה יופיע בכרטיס</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <li key={field.title} className="rounded-[2rem] border border-dashed border-edge bg-white p-6">
              <h3 className="text-xl font-bold text-ink">{field.title}</h3>
              <p className="mt-2 leading-7 text-muted">{field.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-6 text-muted">צילומים יצורפו לכל פרויקט מאושר.</p>
      </section>

      <Link href="/contact" className="btn btn-green">
        דברו איתנו
      </Link>
    </article>
  );
}
