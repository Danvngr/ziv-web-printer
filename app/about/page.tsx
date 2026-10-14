import type { Metadata } from "next";
import Link from "next/link";
import { ContactDetails } from "@/components/contact-details";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "אודות",
  description: "יאיר סמארט אופיס בע״מ. מעטפת טכנולוגית למוסדות חינוך ולעסקים, משלב התכנון ועד השירות.",
};

export default function AboutPage() {
  return (
    <article className="wrap pb-16 pt-8 md:pt-14">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-edge bg-white px-6 py-10 shadow-card sm:px-10">
        <h1 className="yso-title">אודות</h1>
        <div className="mt-6 space-y-4 text-lg leading-8 text-muted">
          <p>
            {site.hebrewName} (<bdi dir="ltr">{site.name}</bdi>) נותנת פתרונות טכנולוגיים למוסדות חינוך ולעסקים. המעטפת כוללת מחשוב, תקשורת, כיתות, אבטחה, מרחבי למידה, מדפסות ומכונות צילום, ושירות שוטף.
          </p>
          <p>העבודה מתחילה בתכנון ובמיפוי, ממשיכה בהקמה, ונשארת בשירות ובתמיכה לפי ההתקשרות. כתובת אחת לכל המערכות.</p>
          <p>
            אתר מרחבי הלמידה נשאר בכתובת שלו. מרכז המדריכים למדפסות ולמכונות צילום נמצא כאן, ופתוח בלי הרשמה.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn btn-green">
            דברו איתנו
          </Link>
          <a href={site.learningSpacesHref} className="btn btn-blue">
            לאתר מרחבי הלמידה
          </a>
        </div>
        <div className="mt-10 border-t border-edge pt-6">
          <h2 className="text-2xl font-bold text-ink">פרטי קשר</h2>
          <div className="mt-4">
            <ContactDetails />
          </div>
        </div>
      </div>
    </article>
  );
}
