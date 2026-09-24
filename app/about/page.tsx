import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודותינו",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900">אודותינו</h1>
      <div className="mt-6 space-y-4 leading-8">
        <p>
          האתר מרכז מדריכי התקנה בעברית למדפסות בית ולמשרד קטן. כל מדריך בנוי כציר שלבים:
          פותחים את האריזה, מחברים כבלים, מדליקים, מתקינים מנהל התקן או מצטרפים לרשת, ומדפיסים
          דף בדיקה.
        </p>
        <p>
          מפעיל האתר: [שם העוסק]. מספר עוסק: [מספר עוסק]. האתר עצמאי ואינו קשור ליצרני
          המדפסות, לרבות HP, Canon, Brother ו-Epson, אלא אם צוין אחרת במפורש.
        </p>
        <p>
          הדגמים שמופיעים באתר הם דוגמאות להמחשה. הם אינם קטלוג מלא, והם אינם מחליפים את הוראות
          היצרן של המכשיר שברשותכם.
        </p>
        <p>
          אין באתר טופס. לפניות: [אימייל], [טלפון], [כתובת].
        </p>
      </div>
    </article>
  );
}
