import type { Metadata } from "next";
import { pageShare, site } from "@/data/site";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description: "הצהרת הנגישות של אתר יאיר סמארט אופיס: למה שואפים, מה קיים באתר, מגבלות ידועות ודרכי פנייה.",
  ...pageShare("/accessibility"),
};

export default function AccessibilityPage() {
  return (
    <article className="lift mx-auto my-10 w-[min(100%-2rem,48rem)] rounded-3xl border border-edge bg-white px-6 py-14 text-muted sm:px-10 md:my-16">
      <h1 className="text-4xl font-bold text-ink md:text-5xl">הצהרת נגישות</h1>
      <p className="mt-2 text-sm text-muted">עודכן לאחרונה: 9 בנובמבר 2026</p>
      <div className="mt-6 space-y-4 leading-8">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">למה אנחנו שואפים</h2>
          <p>
            השאיפה היא להתקרב לדרישות תקן ישראלי 5568 ולהנחיות <bdi dir="ltr">WCAG 2.0</bdi> ברמה <bdi dir="ltr">AA</bdi>. הצהרה זו אינה קובעת שהאתר עומד בדרישות אלה במלואן, ואינה מחליפה בדיקה.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">התאמות באתר</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>העמודים בעברית, עם כיוון ימין לשמאל.</li>
            <li>קישור בתחילת העמוד: ״דלגו לתוכן הראשי״, שמוביל לאזור התוכן.</li>
            <li>בניווט, הפריט של העמוד הנוכחי מסומן גם לקורא מסך.</li>
            <li>לשדה החיפוש יש תווית, ומספר התוצאות מודע אחרי שינוי החיפוש.</li>
            <li>מיקוד מקלדת נראה על קישורים, כפתורים ושדות.</li>
            <li>בקשת ״הפחתת תנועה״ של מערכת ההפעלה מכובדת.</li>
            <li>לתמונות תוכן יש טקסט חלופי. תמונה דקורטיבית מסומנת ככזו.</li>
            <li>פקדים לחיצים בגודל מגע של כ-44 פיקסלים.</li>
            <li>השוואת לפני ואחרי במרחבי הלמידה נשלטת במקש, לא רק בגרירה.</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">תפריט הנגישות</h2>
          <p>
            בכותרת העמוד יש כפתור ״נגישות״. הוא עזר בלבד, ואינו תחליף למבנה נגיש של העמודים.
            אפשר לבחור גודל טקסט (רגיל, 110% או 125%), ניגודיות גבוהה, גווני אפור, הדגשת
            קישורים, גופן קריא והפחתת תנועה, ולאפס את הבחירה. ההעדפות נשמרות בדפדפן בלבד
            ואינן נשלחות לשרת. הכפתור נפתח ונסגר במקלדת, ומקש <bdi dir="ltr">Escape</bdi> סוגר את החלונית ומחזיר
            את המיקוד לכפתור.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">מגבלות ידועות</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>לא נטען כאן שהאתר הונגש במלואו או נבדק מול התקן כולו.</li>
            <li>
              איורי השלבים במדריך מדפסת הם מצייני מקום דקורטיביים. ההסבר לפעולה נמצא בטקסט, לא
              בתמונה.
            </li>
            <li>
              צילומי מרחבי הלמידה הם תצלומי שטח. ההסבר נמצא גם בכותרת וגם בטקסט שליד הגלריה.
            </li>
            <li>
              ניגודיות גבוהה וגווני אפור הם מסנן חזותי על תוכן האתר, לא ערכת צבעים שנבדקה
              בנפרד. במצב הזה חלק מהמידע שבתצלום עלול להיחלש.
            </li>
            <li>אתרים חיצוניים, לרבות וואטסאפ, אינסטגרם ואתרי יצרנים, אינם חלק מהאתר הזה.</li>
            <li>אם הדפדפן חוסם אחסון מקומי, בחירות התפריט לא יישמרו לביקור הבא.</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">המרחבים בשטח</h2>
          <p>
            החברה עובדת בתוך מוסדות חינוך, ואין בעמוד זה תיאור של קבלת קהל במשרד. בתכנון מרחב למידה השאיפה היא שימוש גם לתלמיד עם מוגבלות, לפי הדרישות שחלות על אותו פרויקט, למשל גובה התקנה ומעבר פנוי. אין בכך קביעה שכל התקנה נבדקה מול תקן נגישות למבנים.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">רכז הנגישות</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>רכז הנגישות: {site.contactPerson}</li>
            <li>טלפון: <bdi dir="ltr">{site.whatsappDisplay}</bdi></li>
            <li>
              דוא״ל: <a className="font-bold text-accent underline" href={`mailto:${site.email}`}><bdi dir="ltr">{site.email}</bdi></a>
            </li>
            <li>כתובת: {site.address}</li>
            <li>ח.פ.: <bdi dir="ltr">{site.regNo}</bdi></li>
            <li>שעות: {site.hours}</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">דיווח על קושי</h2>
          <p>
            כדי לדווח על קושי בנגישות, פנו אל {site.contactPerson} בטלפון <bdi dir="ltr">{site.whatsappDisplay}</bdi> או בדוא״ל{" "}
            <a className="font-bold text-accent underline" href={`mailto:${site.email}`}><bdi dir="ltr">{site.email}</bdi></a>
            . ציינו את כתובת העמוד, מה ניסיתם לעשות, ובאיזה דפדפן או אמצעי השתמשתם. אין באתר טופס.
          </p>
        </section>
      </div>
    </article>
  );
}
