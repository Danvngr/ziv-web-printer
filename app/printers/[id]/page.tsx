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
    <article className="mx-auto max-w-5xl px-4 py-14">
      <nav aria-label="פירורי לחם" className="text-sm text-muted">
        <Link href="/" className="inline-flex min-h-11 items-center text-accent hover:underline">
          דף הבית
        </Link>
        <span aria-hidden="true"> › </span>
        <Link href="/#guides" className="inline-flex min-h-11 items-center text-accent hover:underline">
          מדריכים
        </Link>
        <span aria-hidden="true"> › </span>
        <span className="text-ink">
          {printer.brand} {printer.model}
        </span>
      </nav>
      <h1 className="mt-4 text-4xl font-bold text-ink md:text-5xl">
        {printer.brand} {printer.model}
      </h1>
      <p className="mt-4 max-w-3xl leading-8 text-muted">{printer.intro}</p>
      <figure className="mt-8 overflow-hidden rounded-3xl bg-white p-6 shadow-card">
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
        className="mt-10 inline-flex min-h-11 items-center justify-center rounded-full border border-mist bg-white px-6 font-semibold text-ink hover:bg-wash"
      >
        חזרה לכל המדפסות
      </Link>
    </article>
  );
}
