import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "תנאי שימוש",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900">תנאי שימוש</h1>
      <p className="mt-2 text-sm text-slate-500">עודכן לאחרונה: 24 בספטמבר 2026</p>
      <div className="mt-6 space-y-4 leading-8">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">מפעיל האתר</h2>
          <p>
            מפעיל האתר: [שם העוסק]. מספר עוסק: [מספר עוסק]. דוא״ל: [אימייל]. טלפון: [טלפון].
            כתובת: [כתובת].
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">מטרת האתר</h2>
          <p>
            האתר מציג מדריכי התקנה ותפעול כלליים למדפסות, לקריאה עצמית. המדריכים אינם הוראת
            יצרן, אינם שירות תיקון, ואינם תחליף לבדיקה של איש מקצוע.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">שימוש אישי וחוקי</h2>
          <p>
            השימוש באתר מותר לשימוש אישי וחוקי. אין להשתמש בו כדי לפגוע במכשיר, ברשת, בנתונים
            או בזכות של אדם אחר, ואין להעתיק את התוכן לשימוש מסחרי בלי רשות מראש.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">התוכן כמות שהוא</h2>
          <p>
            המדריכים והאתר ניתנים כמות שהם (AS IS). אין מצג שהם שלמים, מדויקים, מתאימים לדגם
            מסוים, או מתאימים למטרה מסוימת. ייתכנו טעויות, חוסרים, או אי-התאמה לגרסת קושחה או
            למערכת הפעלה.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">אימות הדגם והוראות היצרן</h2>
          <p>
            לפני כל פעולה יש לוודא שהיצרן והדגם שעל המדפסת תואמים למדריך, ולפעול לפי הוראות
            היצרן שצורפו למכשיר. אם יש סתירה, הוראות היצרן הן הקובעות.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">הגבלת אחריות</h2>
          <p>
            ככל שהדין מתיר זאת, [שם העוסק] ומפעילי האתר אינם אחראים לנזק למדפסת, למחשב, לרשת
            או לנתונים, לרבות אובדן מידע, שנגרם מהסתמכות על המדריכים או משימוש באתר. אין באמור
            כדי לגרוע מאחריות שאינה ניתנת להגבלה לפי דין.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">בטיחות</h2>
          <p>
            אם מתעורר ספק, או אם מופיעים חום חריג, עשן, ריח חריג או חשמל חשוף — הפסיקו מיד
            ופנו לטכנאי מוסמך. אין לבצע עבודה חשמלית מסוכנת לפי האתר. אין במדריכים היתר לפרק
            ספק כוח, לגעת במגעים חשופים, או לעקוף אמצעי בטיחות.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">זכויות יוצרים</h2>
          <p>
            זכויות היוצרים בנוסח המדריכים, במבנה האתר ובעיצובו שמורות ל-[שם העוסק], אלא אם
            צוין אחרת. אין להעתיק אותם לאתר אחר בלי רשות מראש.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">סימני מסחר</h2>
          <p>
            שמות וסימני מסחר שייכים לבעליהם. האתר אינו קשור ל-HP, ל-Canon, ל-Brother או
            ל-Epson, ואינו מייצג אותם, אלא אם נכתב אחרת במפורש באותו עמוד.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">קישורים חיצוניים</h2>
          <p>
            קישור לאתר אחר הוא לנוחות בלבד. הוא אינו אישור לתוכן שבאתר האחר, והשימוש בו כפוף
            לתנאי אותו אתר.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">עדכון התנאים</h2>
          <p>
            [שם העוסק] רשאי לעדכן תנאים אלה מעת לעת. הנוסח התקף הוא זה שמופיע בעמוד זה, והוא
            נושא את תאריך העדכון.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">דין</h2>
          <p>
            על תנאים אלה חל הדין הישראלי, ככל שאינו סותר הוראה קוגנטית. אין בכך קביעה שהאתר
            עומד בכל דרישה שבדין, ואין בכך טענה לפטור חוקי.
          </p>
        </section>
      </div>
    </article>
  );
}
