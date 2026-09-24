import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודותינו",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900">אודותינו</h1>
      <p className="mt-6 leading-8">
        PrinterGuides מרכז מדריכי התקנה בעברית למדפסות בית ולמשרד קטן. כל מדריך בנוי כציר
        שלבים: פותחים את האריזה, מחברים כבלים, מדליקים, מתקינים מנהל התקן או מצטרפים לרשת,
        ומדפיסים דף בדיקה.
      </p>
      <p className="mt-4 leading-8">
        הדגמים שמופיעים כרגע באתר הם דוגמאות להמחשה. השמות Inkjet, Canon ו-Laser אינם קטלוג
        מלא, והם אינם מחליפים את הוראות היצרן של המכשיר שברשותכם.
      </p>
    </article>
  );
}
