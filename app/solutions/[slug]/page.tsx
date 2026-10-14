import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DomainCard } from "@/components/domain-card";
import { DomainIcon } from "@/components/domain-icon";
import { RichText } from "@/components/rich-text";
import { domains, getDomain, workProcess } from "@/data/domains";
import { site } from "@/data/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return domains.map((domain) => ({ slug: domain.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) return { title: "התחום לא נמצא" };
  return {
    title: domain.title,
    description: domain.hero,
  };
}

export default async function DomainPage({ params }: PageProps) {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) notFound();
  const related = domain.related.map((item) => getDomain(item)).filter((item) => item !== undefined);

  return (
    <article className="wrap pb-16 pt-8 md:pt-14">
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
        <Link href={`/contact?topic=${domain.slug}`} className="btn btn-green mt-6">
          לקבלת הצעה
        </Link>
      </header>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">מה אנחנו עושים</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          <RichText text={domain.lead} />
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {domain.capabilities.map((item) => (
            <li key={item} className="flex min-w-0 items-start gap-3 rounded-[1.75rem] border border-edge bg-white px-4 py-4">
              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-action text-sm font-bold text-[#f9fcff]" aria-hidden="true">
                ✓
              </span>
              <span className="leading-7 text-ink">
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ul>
        {domain.slug === "printers" ? (
          <Link href="/guides" className="btn btn-blue mt-6">
            למרכז המדריכים
          </Link>
        ) : null}
        {domain.slug === "learning-spaces" ? (
          <a href={site.learningSpacesHref} className="btn btn-blue mt-6">
            לאתר מרחבי הלמידה
          </a>
        ) : null}
      </section>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">כך נראה הפרויקט</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {workProcess.map((step, index) => (
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

      <section className="band" aria-label="גלריה">
        <h2 className="text-3xl font-black text-ink">גלריה</h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted">
          המקום שמור לצילומי שטח מאושרים. אין כאן תמונה שמוצגת כעבודה שבוצעה.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {["צילום שטח", "צילום מערכת", "לפני ואחרי"].map((label) => (
            <li
              key={label}
              className="flex min-h-40 items-center justify-center rounded-[1.75rem] border border-dashed border-edge bg-white/70 px-4 text-center text-sm font-medium text-muted"
            >
              {label}
              <span className="sr-only">, יתווסף לאחר אישור</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="band">
        <h2 className="text-3xl font-black text-ink">שאלות קצרות</h2>
        <div className="mt-6 grid max-w-3xl gap-3">
          {domain.faqs.map((faq) => (
            <details key={faq.q} className="rounded-[1.75rem] border border-edge bg-white px-5 py-3">
              <summary className="flex min-h-11 cursor-pointer list-none items-center font-bold text-ink">
                {faq.q}
              </summary>
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
        <h2 className="text-3xl font-black text-ink">לקבלת הצעה</h2>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-ink/80">
          נחזור עם כיוון עבודה לפי התחום. אין צורך למלא טופס.
        </p>
        <Link href={`/contact?topic=${domain.slug}`} className="btn btn-green mt-5">
          לקבלת הצעה
        </Link>
      </section>
    </article>
  );
}
