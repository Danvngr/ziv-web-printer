import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideQr } from "@/components/guide-qr";
import { getPrinter, printers } from "@/data/printers";

type PrinterPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return printers.map((printer) => ({ id: printer.id }));
}

export async function generateMetadata({ params }: PrinterPageProps): Promise<Metadata> {
  const { id } = await params;
  const printer = getPrinter(printers, id);
  if (!printer) return { title: "המדריך לא נמצא" };
  return { title: `${printer.brand} ${printer.model}` };
}

export default async function PrinterPage({ params }: PrinterPageProps) {
  const { id } = await params;
  const printer = getPrinter(printers, id);
  if (!printer) notFound();

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
        <span className="text-slate-800">
          {printer.brand} {printer.model}
        </span>
      </nav>
      <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
        {printer.brand} {printer.model}
      </h1>
      <p className="mt-4 leading-8 text-slate-700">{printer.intro}</p>
      <figure className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6">
        <Image
          src={printer.image}
          alt={`${printer.brand} ${printer.model}`}
          width={240}
          height={240}
          unoptimized
          priority
          className="mx-auto h-48 w-48 object-contain"
        />
      </figure>
      <ol className="relative mt-12 space-y-10">
        <span className="absolute top-0 bottom-0 start-4 w-0.5 bg-teal-200" aria-hidden="true" />
        {printer.steps.map((step, index) => (
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
      <section className="mt-12">
        <h2 className="text-lg font-bold text-slate-900">קוד QR למדריך זה</h2>
        <p className="mt-2 text-sm text-slate-600">
          הסריקה פותחת את המדריך של {printer.brand} {printer.model} בלבד.
        </p>
        <div className="mt-4">
          <GuideQr id={printer.id} />
        </div>
      </section>
      <Link
        href="/"
        className="mt-10 inline-block rounded-full border border-slate-300 bg-white px-6 py-2.5 font-medium text-slate-800 hover:bg-slate-100"
      >
        חזרה לכל המדפסות
      </Link>
    </article>
  );
}
