import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תנאי שירות",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900">תנאי שירות</h1>
      <div className="mt-6 space-y-4 leading-8">
        <p>השימוש באתר PrinterGuides הוא לקריאה עצמית של מדריכי התקנה.</p>
        <p>
          התוכן הוא הסבר כללי לדוגמה. הוא אינו ייעוץ טכני מחייב, ואינו התחייבות שהשלבים
          מתאימים לכל גרסת קושחה או לכל מערכת הפעלה.
        </p>
        <p>
          שמות הדגמים באתר הם מצייני מקום. אין להסתמך עליהם כרשימת מוצרים רשמית, ויש לבדוק
          את ההוראות שצורפו למכשיר.
        </p>
        <p>
          אין להעתיק את המדריכים לאתר אחר או לעשות בהם שימוש מסחרי בלי אישור בכתב. הזכויות
          במבנה האתר ובעיצוב שמורות ל-PrinterGuides.
        </p>
      </div>
    </article>
  );
}
