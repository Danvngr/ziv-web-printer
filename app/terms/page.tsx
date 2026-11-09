import type { Metadata } from "next";
import Link from "next/link";
import { pageShare, site } from "@/data/site";

export const metadata: Metadata = {
  title: "תנאי שימוש",
  description: "תנאי השימוש באתר יאיר סמארט אופיס: מידע שיווקי, מדריכי מדפסות, קניין רוחני והדין החל.",
  ...pageShare("/terms"),
};

export default function TermsPage() {
  return (
    <article className="lift mx-auto my-10 w-[min(100%-2rem,48rem)] rounded-3xl border border-edge bg-white px-6 py-14 text-muted sm:px-10 md:my-16">
      <h1 className="text-4xl font-bold text-ink md:text-5xl">תנאי שימוש</h1>
      <p className="mt-2 text-sm text-muted">עודכן לאחרונה: 9 בנובמבר 2026</p>
      <div className="mt-6 space-y-4 leading-8">
        <p>
          השימוש באתר של {site.hebrewName} (ח.פ. <bdi dir="ltr">{site.regNo}</bdi>) כפוף לתנאים אלה. גלישה באתר היא הסכמה לתנאים. מי שלא מסכים, מתבקש שלא להשתמש באתר. הנוסח בלשון זכר מטעמי נוחות, והוא מתייחס לכל המגדרים.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">1. מהו האתר</h2>
          <p>
            האתר מציג את תחומי החברה: מחשוב, תקשורת, כיתות, אבטחה, כריזה, מרחבי למידה, מדפסות ושירות. הוא כולל גם מדריכים קצרים להוצאת מונה ולהחלפת טונר, לקריאה עצמית.
          </p>
          <p>
            האתר אינו הצעה מחייבת, אינו חנות, ואין בו הזמנה או תשלום. אין בו ייעוץ הנדסי, פדגוגי, בטיחותי או משפטי. התקשרות מחייבת היא הצעה חתומה או הסכם חתום בלבד. אם יש סתירה בין האתר לבין המסמך החתום, המסמך החתום גובר.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">2. מידע באתר</h2>
          <p>
            תיאורי שירות, לוחות זמנים, תקופות אחריות וצילומי פרויקטים הם להמחשה. אין באתר מחירון. היקף עבודה נקבע לפי השטח, המצב הקיים, דרישות הלקוח וזמינות הציוד. החברה רשאית לעדכן או להסיר תוכן בלי הודעה מוקדמת, ואינה מתחייבת שהתוכן שלם או נקי מטעות.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">3. מדריכי המדפסות</h2>
          <p>
            המדריכים ניתנים כמות שהם (<bdi dir="ltr">AS IS</bdi>). הם אינם הוראת יצרן, אינם שירות תיקון, ואינם תחליף לבדיקה של איש מקצוע. אין מצג שהם שלמים, מדויקים, מתאימים לדגם מסוים, או מתאימים למטרה מסוימת. ייתכנו טעות, חוסר, או אי-התאמה לגרסת קושחה.
          </p>
          <p>
            לפני פעולה יש לוודא שהיצרן והדגם שעל המכונה תואמים למדריך, ולפעול לפי הוראות היצרן שצורפו למכשיר. אם יש סתירה, הוראות היצרן הן הקובעות.
          </p>
          <p>
            אם מתעורר ספק, או אם מופיעים חום חריג, עשן, ריח חריג או חשמל חשוף, מפסיקים מיד ופונים לטכנאי מוסמך. אין לבצע עבודה חשמלית מסוכנת לפי האתר. אין במדריכים היתר לפרק ספק כוח, לגעת במגעים חשופים, או לעקוף אמצעי בטיחות.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">4. קניין רוחני</h2>
          <p>
            זכויות היוצרים בנוסח, במבנה, בעיצוב, בצילומי הפרויקטים, במדריכים ובלוגו שמורות ל-{site.hebrewName}, או למי שנתן לה רישיון, לפי חוק זכות יוצרים, התשס״ח-2007. אין להעתיק אותם לאתר אחר, להצעה, למכרז או לחומר שיווק של גורם אחר בלי אישור מראש ובכתב. שימוש שהדין מתיר נשאר מותר.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">5. שימוש מותר ואיסורים</h2>
          <p>מותר לקרוא את האתר ולשתף קישור אליו לשימוש אישי או מקצועי לגיטימי. אסור:</p>
          <ul className="list-disc space-y-2 pe-5">
            <li>להשתמש באתר למטרה בלתי חוקית, או כדי לפגוע במכשיר, ברשת, בנתונים או בזכות של אדם אחר.</li>
            <li>לאסוף אוטומטית תוכן או תמונות מהאתר.</li>
            <li>לנסות לחדור לאתר, לעקוף אבטחה, או להעמיס עליו כך שישובש.</li>
            <li>להציג את האתר בתוך מסגרת באופן שיוצר רושם של בעלות.</li>
            <li>להשתמש בשם החברה באופן שעלול להטעות לגבי קשר עסקי.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">6. סימני מסחר</h2>
          <p>
            שמות וסימני מסחר שייכים לבעליהם, לפי פקודת סימני מסחר [נוסח חדש], התשל״ב-1972. האתר אינו קשור ל-<bdi dir="ltr">HP</bdi>, ל-<bdi dir="ltr">Canon</bdi>, ל-<bdi dir="ltr">Brother</bdi> או ל-<bdi dir="ltr">Epson</bdi>, ואינו מייצג אותם, אלא אם נכתב אחרת במפורש באותו עמוד.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">7. קישורים חיצוניים</h2>
          <p>
            קישור לוואטסאפ, לאינסטגרם או לאתר אחר הוא לנוחות. הוא אינו אישור לתוכן שבאתר האחר, והשימוש בו כפוף לתנאי אותו אתר. שירותי התשתית מפורטים ב<Link href="/privacy" className="font-bold text-accent underline">מדיניות הפרטיות</Link>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">8. זמינות</h2>
          <p>
            האתר מסופק כמות שהוא וכפי שהוא זמין. אין התחייבות לפעילות רציפה או לאתר נקי מתקלה. ייתכנו הפסקות לתחזוקה או בגלל ספק התשתית.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">9. הגבלת אחריות</h2>
          <p>
            ככל שהדין מתיר, {site.hebrewName}, מנהליה ועובדיה אינם אחראים לנזק ישיר או עקיף, לרבות נזק למדפסת, למחשב, לרשת או לנתונים, אובדן מידע, או הסתמכות על תוכן האתר. אחריות לשירות שניתן בפועל נקבעת רק במסמך החתום. אין באמור כדי לגרוע מאחריות שאינה ניתנת להגבלה לפי דין.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">10. עבודות במוסדות</h2>
          <p>
            עבודות תכנון, בנייה, חשמל והתקנה אינן נובעות מהאתר. הן כפופות להתקשרות נפרדת בכתב, ולדרישות שחלות על הפרויקט, לרבות בטיחות, תכנון ובנייה, וחשמל בידי בעלי מקצוע מורשים. לוח זמנים שמופיע באתר אינו התחייבות למועד.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">11. פרטיות</h2>
          <p>
            השימוש באתר כפוף גם ל<Link href="/privacy" className="font-bold text-accent underline">מדיניות הפרטיות</Link>. אין באתר טפסים. מידע אישי מגיע רק אם פניתם בעצמכם.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">12. עדכון התנאים</h2>
          <p>
            החברה רשאית לעדכן תנאים אלה. הנוסח התקף הוא זה שבעמוד זה, והוא נושא את תאריך העדכון. המשך שימוש אחרי עדכון הוא הסכמה לנוסח החדש.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">13. דין וסמכות</h2>
          <p>
            על תנאים אלה חל דין מדינת ישראל. סמכות השיפוט נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו, בכפוף להוראה קוגנטית אחרת. אין בכך קביעה שהאתר עומד בכל דרישה שבדין, ואין בכך טענה לפטור חוקי. אם סעיף בטל, יתר הסעיפים עומדים בתוקפם.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-ink">14. יצירת קשר</h2>
          <ul className="list-disc space-y-2 pe-5">
            <li>חברה: {site.hebrewName}, ח.פ. <bdi dir="ltr">{site.regNo}</bdi></li>
            <li>כתובת: {site.address}</li>
            <li>טלפון: <bdi dir="ltr">{site.whatsappDisplay}</bdi></li>
            <li>דוא״ל: <a className="font-bold text-accent underline" href={`mailto:${site.email}`}><bdi dir="ltr">{site.email}</bdi></a></li>
            <li>אינסטגרם: <a className="font-bold text-accent underline" href={site.instagramHref}><bdi dir="ltr">{site.instagram}</bdi></a></li>
          </ul>
        </section>
      </div>
    </article>
  );
}
