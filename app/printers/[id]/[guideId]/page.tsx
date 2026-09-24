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
    <article className="mx-auto max-w-3xl px-4 py-12">
      <nav aria-label="פירורי לחם" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-700">
          דף הבית
        </Link>
        <span aria-hidden="true"> › </span>
        <Link href="/#guides" className="hover:text-teal-700">
          מדריכים
        </Link>
        <span aria-hidden="true"> › </span>
        <Link href={`/printers/${printer.id}`} className="hover:text-teal-700">
          {printer.brand} {printer.model}
        </Link>
        <span aria-hidden="true"> › </span>
        <span className="text-slate-800">{guide.title}</span>
      </nav>
      <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">{guide.title}</h1>
      <p className="mt-4 leading-8 text-slate-700">{guide.description}</p>
      <ol className="relative mt-12 space-y-10">
        <span className="absolute top-0 bottom-0 start-4 w-0.5 bg-teal-200" aria-hidden="true" />
        {guide.steps.map((step, index) => (
          <li key={step.title} className="relative ps-14">
            <span className="absolute start-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
              {index + 1}
            </span>
            <h2 className="text-lg font-bold text-slate-900">{step.title}</h2>
            <p className="mt-2 leading-7 text-slate-700">{step.description}</p>
            <div
              className="mt-4 aspect-video rounded-md border border-gray-200 bg-gray-100"
              aria-hidden="true"
            />
          </li>
        ))}
      </ol>
      <Link
        href={`/printers/${printer.id}`}
        className="mt-10 inline-block rounded-full border border-slate-300 bg-white px-6 py-2.5 font-medium text-slate-800 hover:bg-slate-100"
      >
        חזרה למדריכי {printer.model}
      </Link>
    </article>
  );
}
