import Link from "next/link";
import { BeforeAfter } from "@/components/before-after";
import { DomainCard } from "@/components/domain-card";
import { DomainIcon } from "@/components/domain-icon";
import { RichText } from "@/components/rich-text";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { ZoomImage } from "@/components/zoom-image";
import type { Domain } from "@/data/domains";
import {
  learningAdvantages,
  learningFuture,
  learningIncludes,
  learningPhotos,
  learningSteps,
} from "@/data/learning-spaces";
import { absoluteUrl, learningSpacesWhatsappText, site } from "@/data/site";

const futureTints = ["bg-chip-mint", "bg-chip-sky", "bg-chip-sand"];

export function LearningSpacesPage({ domain, related }: { domain: Domain; related: Domain[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl(site.learningSpacesPath)}#faq`,
        mainEntity: domain.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "Service",
        name: domain.title,
        url: absoluteUrl(site.learningSpacesPath),
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "Country", name: "Israel" },
      },
    ],
  };

  return (
    <article className="wrap pb-16 pt-8 md:pt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replaceAll("<", "\\u003c") }} />
      <header className="max-w-3xl">
        <p className="text-sm font-bold text-accent">פתרונות</p>
        <div className="mt-4 grid h-16 w-16 place-items-center rounded-[1.5rem] bg-chip-mint text-ink">
          <DomainIcon slug={domain.slug} className="h-8 w-8" />
        </div>
        <h1 className="yso-title mt-5">
          <RichText text={domain.title} />
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink/70 sm:text-xl">
          <RichText text={domain.hero} />
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          המערכת משלבת תכנון אדריכלי, עבודות גבס, תשתיות חשמל ותקשורת, והטמעת מסכי טאץ׳ ומחשבים בתוך נישות מעוצבות. כל פרויקט מותאם למוסד, עם דגש על נוחות שימוש, עמידות ועיצוב.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <WhatsAppLink text={learningSpacesWhatsappText} className="btn btn-green" label="דברו איתנו בוואטסאפ על מרחבי למידה">
            דברו איתנו בוואטסאפ
          </WhatsAppLink>
          <a href="#gallery" className="btn btn-blue">
            לצילומים מהשטח
          </a>
        </div>
      </header>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">מה זה מרחב למידה חכם</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-lg leading-8 text-muted">
          <p>בעולם שבו התלמידים גדלים עם טכנולוגיה בכל מקום, גם סביבת הלמידה צריכה להתקדם איתם.</p>
          <p>מרחב למידה הוא יותר מקירות ומסכים. הוא כלי שמעורר סקרנות, מעודד חקר, והופך את הלמידה לחוויה משמעותית.</p>
        </div>
      </section>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">מה כולל הפרויקט</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          <RichText text={domain.lead} />
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningIncludes.map((item) => (
            <li key={item.title} className="rounded-[1.75rem] border border-edge bg-white p-5">
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 leading-7 text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">למה לבחור בפתרון הזה</h2>
        <ul className="mt-6 grid max-w-3xl gap-3">
          {learningAdvantages.map((item) => (
            <li key={item} className="flex min-w-0 items-start gap-3 rounded-[1.75rem] border border-edge bg-white px-4 py-4">
              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-action text-sm font-bold text-[#f9fcff]" aria-hidden="true">
                ✓
              </span>
              <span className="leading-7 text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">לפני ואחרי</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          אותו חלל, לפני ההקמה ואחריה. מזיזים את הפס כדי להשוות.
        </p>
        <div className="mt-6 max-w-4xl">
          <BeforeAfter />
        </div>
      </section>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">שלבי העבודה</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted">
          ליווי משלב התכנון ועד המסירה: עיצוב, ביצוע, התקנה והטמעה בשטח. את העבודות מתאמים לחופשות או לאחר שעות הלימודים.
        </p>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {learningSteps.map((step, index) => (
            <li key={step.title} className="rounded-[1.75rem] border border-edge bg-white p-5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 leading-7 text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">העתיד של הלמידה</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          סביבת הלמידה משפיעה על ההצלחה לא פחות מהתוכן. קיר רגיל יכול להפוך למרחב שמעודד סקרנות, מעורבות וחשיבה.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {learningFuture.map((item, index) => (
            <li key={item.title} className={`rounded-[1.75rem] p-5 ${futureTints[index]}`}>
              <h3 className="text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 leading-7 text-ink/80">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="gallery" className="band" aria-label="גלריה">
        <h2 className="text-3xl font-black text-ink">מרחבים חכמים שהקמנו</h2>
        <p className="mt-4 max-w-3xl leading-7 text-muted">כיתות ומרחבי למידה מהשטח. לחיצה על תמונה מגדילה אותה.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningPhotos.map((photo) => (
            <li key={photo.src}>
              <ZoomImage
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                imageClassName="aspect-[3/4] w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">שאלות ותשובות</h2>
        <div className="mt-6 grid max-w-3xl gap-3">
          {domain.faqs.map((faq) => (
            <details key={faq.q} className="rounded-[1.75rem] border border-edge bg-white px-5 py-3">
              <summary className="flex min-h-11 cursor-pointer list-none items-center font-bold text-ink">{faq.q}</summary>
              <p className="pb-3 leading-7 text-muted">
                <RichText text={faq.a} />
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">תחומים קשורים</h2>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {related.map((item, index) => (
            <li key={item.slug}>
              <DomainCard domain={item} index={index} />
            </li>
          ))}
        </ul>
        <Link href="/#domains" className="mt-6 inline-flex min-h-11 items-center font-bold text-accent">
          חזרה לכל התחומים
        </Link>
      </section>

      <section className="rounded-[2rem] bg-chip-mint px-6 py-8 text-center sm:px-10">
        <h2 className="text-3xl font-black text-ink">מוכנים לבדוק מרחב בבית הספר?</h2>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-ink/80">
          כותבים בוואטסאפ לתיאום שיחה. בלי טופס באתר. שעות המענה: {site.hours}.
        </p>
        <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <WhatsAppLink text={learningSpacesWhatsappText} className="btn btn-green" label="פתיחת וואטסאפ למרחבי למידה">
            דברו איתנו בוואטסאפ
          </WhatsAppLink>
          <Link href={`/contact?topic=${domain.slug}`} className="btn btn-blue">
            פרטי קשר
          </Link>
        </div>
      </section>
    </article>
  );
}
