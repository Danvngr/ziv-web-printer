import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, getPrinter, printers } from "@/data/printers";

type GuidePageProps = {
  params: Promise<{ id: string; guideId: string }>;
};

export function generateStaticParams() {
  return printers.flatMap((printer) =>
    printer.guides.map((guide) => ({ id: printer.id, guideId: guide.id })),
  );
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { id, guideId } = await params;
  const printer = getPrinter(printers, id);
  if (!printer) return { title: "המדריך לא נמצא" };
  const guide = getGuide(printer, guideId);
  if (!guide) return { title: "המדריך לא נמצא" };
  return { title: `${guide.title} — ${printer.brand} ${printer.model}` };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { id, guideId } = await params;
  const printer = getPrinter(printers, id);
  if (!printer) notFound();
  const guide = getGuide(printer, guideId);
  if (!guide) notFound();

  return (
    <article className="mx-auto my-10 max-w-3xl rounded-3xl bg-white px-4 py-12 shadow-card sm:px-8">
      <nav aria-label="פירורי לחם" className="text-sm text-muted">
        <Link href="/" className="inline-flex min-h-11 items-center text-accent hover:underline">
          דף הבית
        </Link>
        <span aria-hidden="true"> › </span>
        <Link href="/#guides" className="inline-flex min-h-11 items-center text-accent hover:underline">
          מדריכים
        </Link>
        <span aria-hidden="true"> › </span>
        <Link href={`/printers/${printer.id}`} className="inline-flex min-h-11 items-center text-accent hover:underline">
          {printer.brand} {printer.model}
        </Link>
        <span aria-hidden="true"> › </span>
        <span className="text-ink">{guide.title}</span>
      </nav>
      <h1 className="mt-4 text-4xl font-bold text-ink md:text-5xl">{guide.title}</h1>
      <p className="mt-4 leading-8 text-muted">{guide.description}</p>
      <ol className="relative mt-12 space-y-10">
        <span className="absolute top-0 bottom-0 start-4 w-0.5 bg-chip-sky" aria-hidden="true" />
        {guide.steps.map((step, index) => (
          <li key={step.title} className="relative ps-14">
            <span className="absolute start-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              {index + 1}
            </span>
            <h2 className="text-lg font-bold text-ink">{step.title}</h2>
            <p className="mt-2 leading-7 text-muted">{step.description}</p>
            <div
              className="mt-4 aspect-video rounded-2xl border border-mist bg-wash"
              aria-hidden="true"
            />
          </li>
        ))}
      </ol>
      <Link
        href={`/printers/${printer.id}`}
        className="mt-10 inline-flex min-h-11 items-center justify-center rounded-full border border-mist bg-page px-6 font-semibold text-ink hover:bg-wash"
      >
        חזרה למדריכי {printer.model}
      </Link>
    </article>
  );
}
