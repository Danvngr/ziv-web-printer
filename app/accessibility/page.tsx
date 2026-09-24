import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
};

export default function AccessibilityPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900">הצהרת נגישות</h1>
      <p className="mt-2 text-sm text-slate-500">עודכן לאחרונה: 24 בספטמבר 2026</p>
      <div className="mt-6 space-y-4 leading-8">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">למה אנחנו שואפים</h2>
          <p>
            השאיפה היא להתקרב לדרישות תקן ישראלי 5568 ולהנחיות WCAG 2.0 ברמה AA. הצהרה זו
            אינה קובעת שהאתר עומד בדרישות אלה במלואן.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">התאמות באתר</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>העמודים בעברית, עם כיוון ימין לשמאל.</li>
            <li>קישור בתחילת העמוד: ״דלגו לתוכן הראשי״, שמוביל לאזור התוכן.</li>
            <li>בניווט, הפריט של העמוד הנוכחי מסומן גם לקורא מסך.</li>
            <li>לשדה החיפוש יש תווית, ומספר התוצאות מודע אחרי שינוי החיפוש.</li>
            <li>מיקוד מקלדת נראה על קישורים, כפתורים ושדות.</li>
            <li>בקשת ״הפחתת תנועה״ של מערכת ההפעלה מכובדת.</li>
            <li>לתמונת מדפסת יש טקסט חלופי עם היצרן והדגם. תמונה דקורטיבית מסומנת ככזו.</li>
            <li>פקדים לחיצים בגודל מגע של כ-44 פיקסלים.</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">תפריט הנגישות</h2>
          <p>
            בצד המסך יש כפתור ״נגישות״. הוא עזר בלבד, ואינו תחליף למבנה נגיש של העמודים.
            אפשר לבחור גודל טקסט (רגיל, 110% או 125%), ניגודיות גבוהה, גווני אפור, הדגשת
            קישורים, גופן קריא והפחתת תנועה, ולאפס את הבחירה. ההעדפות נשמרות בדפדפן בלבד
            ואינן נשלחות לשרת. הכפתור נפתח ונסגר במקלדת, ומקש Escape סוגר את החלונית ומחזיר
            את המיקוד לכפתור.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">מגבלות ידועות</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>לא נטען כאן שהאתר הונגש במלואו או נבדק מול התקן כולו.</li>
            <li>
              איורי השלבים במדריך הם מצייני מקום דקורטיביים. ההסבר לפעולה נמצא בטקסט, לא
              בתמונה.
            </li>
            <li>
              ניגודיות גבוהה וגווני אפור הם מסנן חזותי על תוכן האתר, לא ערכת צבעים שנבדקה
              בנפרד.
            </li>
            <li>אתרים חיצוניים, לרבות אתרי יצרנים, אינם חלק מהאתר הזה.</li>
            <li>אם הדפדפן חוסם אחסון מקומי, בחירות התפריט לא יישמרו לביקור הבא.</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">דיווח על קושי</h2>
          <p>
            כדי לדווח על קושי בנגישות, פנו אל [שם העוסק] ב-[אימייל] או ב-[טלפון], בכתובת
            [כתובת]. ציינו את כתובת העמוד ואת תיאור הקושי. מספר עוסק: [מספר עוסק]. אין באתר
            טופס.
          </p>
        </section>
      </div>
    </article>
  );
}
