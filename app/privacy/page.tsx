import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900">מדיניות פרטיות</h1>
      <p className="mt-2 text-sm text-slate-500">עודכן לאחרונה: 24 בספטמבר 2026</p>
      <div className="mt-6 space-y-4 leading-8">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">מי מפעיל את האתר</h2>
          <p>
            מפעיל האתר: [שם העוסק]. מספר עוסק: [מספר עוסק]. דוא״ל: [אימייל]. טלפון: [טלפון].
            כתובת: [כתובת].
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">אין חשבונות</h2>
          <p>
            אין באתר חשבון משתמש, הרשמה, או אזור אישי. אין צורך למסור שם או פרטי קשר כדי לקרוא
            מדריך, ואין באתר טופס.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">אירוח ותפעול</h2>
          <p>
            האתר מתארח בשירות Vercel. המארח עשוי לעבד, לצורך תפעול האתר ואבטחתו, נתונים
            טכניים כגון כתובת IP, סוג הדפדפן, ויומני בקשות.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">עוגיות</h2>
          <p>
            האתר אינו משתמש בעוגיות שיווק ואינו מפעיל כלי פרסום. העדפות תפריט הנגישות נשמרות
            בדפדפן בלבד, במנגנון localStorage, ואינן נשלחות לשרת.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">עיבוד מחוץ לישראל</h2>
          <p>נתונים שהמארח מעבד עשויים להיות מעובדים מחוץ לישראל, לפי תשתית המארח.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-900">פניות</h2>
          <p>
            לשאלות על מדיניות זו אפשר לפנות אל [שם העוסק] ב-[אימייל] או ב-[טלפון], בכתובת
            [כתובת].
          </p>
        </section>
      </div>
    </article>
  );
}
