import Link from "next/link";
import { ContactDetails } from "@/components/contact-details";
import { DomainCard } from "@/components/domain-card";
import { DomainIcon } from "@/components/domain-icon";
import { LegacySearchRedirect } from "@/components/legacy-search-redirect";
import { RichText } from "@/components/rich-text";
import { domains } from "@/data/domains";
import { site } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הטכנולוגיה שמניעה את המחר",
  description:
    "YSO – Yair Smart Office. פתרונות מחשוב, תקשורת, אבטחה, מרחבי למידה ושירות טכנולוגי למוסדות חינוך ולעסקים.",
};

const benefits = [
  { title: "תכנון והקמה", text: "מהבנת הצורך ועד מסירה בשטח.", icon: "computer-rooms" },
  { title: "תשתיות ומחשוב", text: "רשתות, ציוד ומערכות שעובדות יחד.", icon: "networks" },
  { title: "שירות שנתי ותמיכה", text: "כתובת אחת לקריאות ולליווי שוטף.", icon: "it" },
  { title: "כתובת אחת לכל המערכות", text: "מחשוב, כיתות, אבטחה, הדפסה ושירות.", icon: "learning-spaces" },
];

const projectFields = ["סוג הפרויקט", "האתגר", "הפתרון", "התוצאה"];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.hebrewName,
    alternateName: site.name,
    telephone: `+${site.whatsappE164}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "הבנאים 9",
      addressLocality: "אשדוד",
      addressCountry: "IL",
    },
  };

  return (
    <>
      <LegacySearchRedirect />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="wrap relative overflow-hidden pb-12 pt-8 md:pb-20 md:pt-16">
        <HeroShapes />
        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="text-center lg:col-span-7 lg:text-start">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-[#63c000]/30 bg-white/80 px-5 py-2 text-sm font-bold text-[#63c000] shadow-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#63c000]/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#63c000]" />
              </span>
              מעטפת טכנולוגית אחת
            </p>
            <h1 className="mt-6 text-3xl font-black leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              הטכנולוגיה שמניעה את <span className="text-[#63c000]">המחר</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-xl lg:mx-0">
              <bdi dir="ltr">YSO – Yair Smart Office</bdi>
              {" | "}
              פתרונות מחשוב, תקשורת, אבטחה, מרחבי למידה ושירות טכנולוגי למוסדות חינוך ולעסקים. משלב התכנון ועד התמיכה השוטפת.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
              <a href="#domains" className="btn btn-green w-full sm:w-auto">
                גלו את הפתרונות שלנו
              </a>
              <Link href="/contact" className="btn btn-blue w-full sm:w-auto">
                דברו עם מומחה
              </Link>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-edge bg-white p-5 shadow-card lg:col-span-5">
            <h2 className="text-xl font-bold text-ink">שמונה תחומים. כתובת אחת.</h2>
            <ul className="mt-4 grid gap-2">
              {domains.map((domain) => (
                <li key={domain.slug}>
                  <Link href={`/solutions/${domain.slug}`} className="flex min-h-11 items-center gap-3 rounded-xl px-2 hover:bg-wash">
                    <DomainIcon slug={domain.slug} className="h-5 w-5 shrink-0 text-accent" />
                    <span className="font-medium text-ink">
                      <RichText text={domain.title} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section aria-label="יתרונות" className="wrap pb-4">
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <li key={item.title} className="rounded-[2rem] border border-edge bg-white p-5 shadow-card">
              <span className="grid h-14 w-14 place-items-center rounded-[1.5rem] bg-action text-[#f9fcff] shadow-md">
                <DomainIcon slug={item.icon} className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-lg font-bold text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="domains" className="wrap band">
        <h2 className="yso-title">תחומי פעילות</h2>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-ink/70">
          מחשוב, תקשורת, כיתות, אבטחה, מרחבי למידה, מדפסות ושירות. כל תחום נפתח בעמוד משלו.
        </p>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain, index) => (
            <li key={domain.slug} className="min-w-0">
              <DomainCard domain={domain} index={index} />
            </li>
          ))}
        </ul>
      </section>

      <section id="service" className="wrap band">
        <div className="rounded-[2rem] border border-edge border-s-4 border-s-accent bg-white px-6 py-8 shadow-card sm:px-10">
          <h2 className="yso-title max-w-3xl">
            מחלקת ה־<bdi dir="ltr">IT</bdi> של בית הספר שלכם. בלי להקים אחת.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/70">
            שירות שנתי שכולל פתיחת קריאות וטיפול בכיתות, בחדרי מורים, במנהלה ובחדרי מחשבים. היכרות עם רשתות פדגוגיות ומנהליות, מיפוי מערכות, וליווי בבגרויות כולל טכנאי בשטח לפי ההתקשרות.
          </p>
          <Link href="/contact?topic=it" className="btn btn-green mt-6">
            לקבלת הצעת שירות
          </Link>
        </div>
      </section>

      <section id="projects" className="wrap band">
        <h2 className="yso-title">פרויקטים נבחרים</h2>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-ink/70">
          פרויקטים יפורסמו כאן רק אחרי אישור. אין בעמוד שמות של מוסדות, לוגואים או מספרים.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projectFields.map((field) => (
            <li key={field} className="rounded-[2rem] border border-dashed border-edge bg-white/80 p-5">
              <h3 className="text-lg font-bold text-ink">{field}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">יופיע כאן כשיהיה חומר מאושר.</p>
            </li>
          ))}
        </ul>
        <Link href="/projects" className="btn btn-blue mt-6">
          לעמוד הפרויקטים
        </Link>
      </section>

      <section id="learning" className="wrap band">
        <div className="overflow-hidden rounded-[2rem] border border-edge bg-white shadow-card md:grid md:grid-cols-5">
          <div className="relative min-h-48 bg-chip-sky md:col-span-2" aria-hidden="true">
            <span className="float absolute start-[18%] top-[22%] h-16 w-16 rounded-full bg-chip-mint" />
            <span className="drift-x absolute end-[16%] bottom-[18%] h-14 w-14 rounded-full border-4 border-white" />
          </div>
          <div className="p-6 sm:p-10 md:col-span-3">
            <h2 className="yso-title">מרחבי למידה חכמים</h2>
            <p className="mt-4 text-lg leading-8 text-ink/70">
              <bdi dir="ltr">YSO</bdi> מתכננת ומקימה מרחבי למידה חכמים. הפירוט, הגלריה והתהליך המלא נמצאים באתר מרחבי הלמידה. מכאן רק יוצאים אליו.
            </p>
            <a href={site.learningSpacesHref} className="btn btn-green mt-6">
              לאתר מרחבי הלמידה
            </a>
          </div>
        </div>
      </section>

      <section id="guides" className="wrap band">
        <div className="rounded-[2rem] bg-chip-mint px-6 py-8 sm:px-10">
          <h2 className="yso-title max-w-3xl">כבר לקוחות שלנו? השירות נמצא במרחק לחיצה.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/80">
            מרכז המדריכים פתוח בלי הרשמה ובלי טופס. מחפשים דגם, ופותחים הוצאת מונה או החלפת טונר.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/guides" className="btn btn-green">
              מדריכי מדפסות ומונים
            </Link>
            <Link href="/contact" className="btn btn-blue">
              יצירת קשר עם השירות
            </Link>
          </div>
        </div>
      </section>

      <section id="about-home" className="wrap band">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="yso-title">אודות</h2>
            <p className="mt-4 text-lg leading-8 text-ink/70">
              {site.hebrewName} נותנת פתרונות טכנולוגיים למוסדות חינוך ולעסקים: מחשוב, תקשורת, כיתות, אבטחה, מרחבי למידה, מדפסות ושירות. משלב התכנון וההקמה ועד תחזוקה ותמיכה שוטפת.
            </p>
            <Link href="/about" className="mt-4 inline-flex min-h-11 items-center font-bold text-accent">
              עוד על החברה
            </Link>
            <p className="mt-8 text-2xl font-black text-ink">בואו נתכנן את הפתרון הבא שלכם</p>
            <Link href="/contact" className="btn btn-green mt-4">
              דברו איתנו
            </Link>
          </div>
          <div className="rounded-[2rem] border border-edge bg-white p-6 shadow-card">
            <h2 className="text-2xl font-bold text-ink">יצירת קשר</h2>
            <div className="mt-4">
              <ContactDetails />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="float absolute start-[4%] top-[12%] h-12 w-12 rounded-full bg-chip-mint/80" />
      <span className="drift-x absolute end-[8%] top-[8%] h-11 w-11 rounded-full border-4 border-[#007bae]/30" />
      <span className="float absolute bottom-[10%] start-[18%] h-8 w-8 rounded-full bg-chip-sky" />
    </div>
  );
}
