import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideBannerList } from "@/components/guide-banner-list";
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
  if (!printer) return { title: "המדפסת לא נמצאה" };
  return { title: `${printer.brand} ${printer.model}` };
}

export default async function PrinterPage({ params }: PrinterPageProps) {
  const { id } = await params;
  const printer = getPrinter(printers, id);
  if (!printer) notFound();

  return (
    <article className="mx-auto max-w-5xl px-4 py-12">
      <nav aria-label="פירורי לחם" className="text-sm text-slate-500">
        <Link href="/" className="inline-flex min-h-11 items-center hover:text-teal-700">
          דף הבית
        </Link>
        <span aria-hidden="true"> › </span>
        <Link href="/#guides" className="inline-flex min-h-11 items-center hover:text-teal-700">
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
      <GuideBannerList printerId={printer.id} guides={printer.guides} />
      <Link
        href="/"
        className="mt-10 inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 font-medium text-slate-800 hover:bg-slate-100"
      >
        חזרה לכל המדפסות
      </Link>
    </article>
  );
}
