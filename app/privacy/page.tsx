import type { Metadata } from "next";
import { pageShare, site } from "@/data/site";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description: "איזה מידע מגיע ליאיר סמארט אופיס דרך האתר, למה הוא משמש, ומה הזכויות לפי חוק הגנת הפרטיות.",
  ...pageShare("/privacy"),
};

export default function PrivacyPage() {
  return (
    <article className="lift mx-auto my-10 w-[min(100%-2rem,48rem)] rounded-3xl border border-edge bg-white px-6 py-14 text-muted sm:px-10 md:my-16">
      <h1 className="text-4xl font-bold text-ink md:text-5xl">מדיניות פרטיות</h1>
      <p className="mt-2 text-sm text-muted">עודכן לאחרונה: 9 בנובמבר 2026</p>
      <div className="mt-6 space-y-4 leading-8">
        <p>
          מדיניות זו מתארת איך {site.hebrewName} (ח.פ. <bdi dir="ltr">{site.regNo}</bdi>, להלן «החברה») מתייחסת למידע שמגיע דרך האתר הזה. האתר מציג את תחומי החברה, כולל מרחבי למידה ומדריכי מדפסות. אין בו חנות ואין בו הזמנה מקוונת.
        </p>
        <p>
          החברה פועלת לפי חוק הגנת הפרטיות, התשמ״א-1981, ולתקנות הגנת הפרטיות (אבטחת מידע), התשע״ז-2017. הנוסח בלשון זכר מטעמי נוחות, והוא מתייחס לכל המגדרים.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">1. אין טפסים ואין חשבונות</h2>
          <p>
            אין באתר טופס יצירת קשר, הרשמה, אזור אישי או חשבון. אין צורך למסור שם או פרטי קשר כדי לקרוא עמוד או מדריך. פנייה נעשית ביוזמתכם: בטלפון, בוואטסאפ, בדוא״ל או באינסטגרם.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">2. איזה מידע מגיע אלינו</h2>
          <h3 className="text-lg font-semibold text-ink">מידע שאתם מוסרים</h3>
          <p>
            אם פניתם אלינו, יגיעו הפרטים שבחרתם למסור: שם, טלפון, דוא״ל, שם מוסד או עסק, תפקיד, ותוכן הפנייה. רוב המידע הזה הוא מידע עסקי.
          </p>
          <h3 className="text-lg font-semibold text-ink">מידע טכני בעת הגלישה</h3>
          <p>
            ספק האירוח רושם, לצורך תפעול ואבטחה, נתונים כמו כתובת <bdi dir="ltr">IP</bdi>, סוג דפדפן, וזמן הבקשה. אין באתר כלי אנליטיקה, אין הקלטת סשן, ואין מפת חום. האתר לא מבקש הרשאת מיקום מהדפדפן.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">3. עוגיות ומה שנשמר בדפדפן</h2>
          <p>האתר לא משתמש בעוגיות שיווק ולא מציג באנר הסכמה, כי אין כלי מעקב שצריך לאשר.</p>
          <ul className="list-disc space-y-2 pe-5">
            <li>
              העדפות תפריט הנגישות נשמרות ב-<bdi dir="ltr">localStorage</bdi> בדפדפן שלכם, ואינן נשלחות לשרת.
            </li>
            <li>
              סימון שהמסך הפותח כבר הוצג נשמר ב-<bdi dir="ltr">sessionStorage</bdi> למשך הביקור, ונמחק עם סגירת הלשונית. גם הוא לא נשלח אלינו.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">4. למה המידע משמש</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>מענה לפנייה, מידע על השירות, והכנת הצעה.</li>
            <li>ביצוע פרויקט ותיאום מול המוסד או הלקוח, כשיש התקשרות.</li>
            <li>אבטחת האתר, איתור תקלה, ומניעת שימוש לרעה.</li>
            <li>חובות שבדין, לרבות שמירת מסמכים חשבונאיים כשיש עסקה.</li>
          </ul>
          <p>אין דיוור פרסומי המוני, ואין החלטה אוטומטית עליכם על סמך מידע מהאתר.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">5. הבסיס לשימוש במידע</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>הפנייה שלכם, כשבחרתם ליצור קשר.</li>
            <li>צורך בהתקשרות, כשמכינים הצעה או מבצעים עבודה שהוזמנה.</li>
            <li>אינטרס לגיטימי באבטחת האתר ובתפעול שלו.</li>
            <li>חובה שבדין, כשצריך לשמור מסמך.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">6. צדדים שלישיים</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>
              <bdi dir="ltr">Vercel</bdi> מאחסן את האתר ועשוי לעבד נתוני בקשה טכניים.{" "}
              <a className="font-bold text-accent underline" href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                מדיניות הפרטיות של <bdi dir="ltr">Vercel</bdi>
              </a>
              . נתונים כאלה עשויים להיות מעובדים מחוץ לישראל, לפי תשתית המארח.
            </li>
            <li>
              הגופנים מוגשים מהאתר עצמו. בזמן הגלישה אין פנייה לשרת גופנים חיצוני.
            </li>
            <li>
              לחיצה על וואטסאפ מעבירה אתכם ל-<bdi dir="ltr">WhatsApp</bdi> של <bdi dir="ltr">Meta</bdi>. מרגע זה חלה{" "}
              <a className="font-bold text-accent underline" href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                מדיניות הפרטיות של <bdi dir="ltr">WhatsApp</bdi>
              </a>
              . תוכן ההתכתבות נשמר אצלנו לצורך המענה.
            </li>
            <li>קישור לאינסטגרם מוביל לעמוד החברה, וכפוף לתנאי <bdi dir="ltr">Meta</bdi>.</li>
          </ul>
          <p>
            מעבר לכך, מידע עשוי לעבור לספק משנה, למשל בעל מקצוע בחשמל או בגבס, רק ככל שצריך כדי לבצע פרויקט מסוים, ולרשות מוסמכת אם הדין מחייב.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">7. כמה זמן שומרים</h2>
          <p>
            פנייה שלא הבשילה להתקשרות נשמרת לתקופה סבירה להמשך הקשר, ולא יותר ממה שצריך למטרה שלשמה נמסרה. מסמכי עסקה נשמרים לפי החובה שבדין.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">8. ילדים ותלמידים</h2>
          <p>
            הלקוחות הם מוסדות, רשויות, עסקים וועדי הורים, לא ילדים. האתר לא מיועד לילדים ולא אוסף ביודעין מידע על קטינים. לא נאספים דרך האתר שמות תלמידים, תמונות מזהות, או נתוני למידה. צילום תיעוד בשטח נעשה בתיאום עם המוסד. אם לדעתכם הגיע אלינו מידע על קטין שלא כדין, כתבו לנו ונפעל למחוק אותו.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">9. אבטחה</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>התעבורה לאתר מוצפנת ב-<bdi dir="ltr">HTTPS</bdi>.</li>
            <li>אין באתר מסד נתונים של גולשים ואין אחסון פרטי פנייה בשרת האתר.</li>
            <li>גישה למידע מוגבלת למי שנדרש לו לצורך התפקיד.</li>
          </ul>
          <p>אין מערכת מקוונת חסינה לגמרי. אם יקרה אירוע אבטחה, נטפל בו ונעדכן כנדרש בדין.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">10. הזכויות שלכם</h2>
          <p>לפי חוק הגנת הפרטיות, ובכפוף לתנאיו, אפשר לבקש:</p>
          <ul className="list-disc space-y-2 pe-5">
            <li>לעיין במידע אישי שלכם שמוחזק אצלנו.</li>
            <li>לתקן מידע שאינו נכון, שלם או מעודכן.</li>
            <li>למחוק מידע, בכפוף לחובת שמירה שבדין.</li>
            <li>שנפסיק לפנות אליכם לצורך שיווק.</li>
          </ul>
          <p>
            פונים אל {site.contactPerson} בדוא״ל <a className="font-bold text-accent underline" href={`mailto:${site.email}`}><bdi dir="ltr">{site.email}</bdi></a> או בטלפון <bdi dir="ltr">{site.whatsappDisplay}</bdi>. נשיב בתוך זמן סביר. אם התשובה לא מספקת, אפשר לפנות אל{" "}
            <a className="font-bold text-accent underline" href="https://www.gov.il/he/departments/the_privacy_protection_authority" target="_blank" rel="noopener noreferrer">
              הרשות להגנת הפרטיות
            </a>{" "}
            או לבית המשפט.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">11. שינויים</h2>
          <p>החברה רשאית לעדכן מדיניות זו. הנוסח שבעמוד זה הוא הנוסח התקף, והוא נושא את תאריך העדכון.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">12. יצירת קשר</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>חברה: {site.hebrewName}, ח.פ. <bdi dir="ltr">{site.regNo}</bdi></li>
            <li>כתובת: {site.address}</li>
            <li>טלפון: <bdi dir="ltr">{site.whatsappDisplay}</bdi></li>
            <li>דוא״ל: <a className="font-bold text-accent underline" href={`mailto:${site.email}`}><bdi dir="ltr">{site.email}</bdi></a></li>
            <li>אחראי פניות פרטיות ונגישות: {site.contactPerson}</li>
            <li>שעות: {site.hours}</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
