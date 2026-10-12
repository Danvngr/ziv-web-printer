import Link from "next/link";
import { Printer, Wifi, Droplets, type LucideIcon } from "lucide-react";
import type { Guide } from "@/data/printers";

const icons: Record<string, LucideIcon> = {
  installation: Printer,
  wifi: Wifi,
  "toner-replacement": Droplets,
};

export function GuideBannerList({
  printerId,
  guides,
}: {
  printerId: string;
  guides: Guide[];
}) {
  return (
    <section className="mt-14 rounded-[2rem] bg-wash px-4 pb-14 pt-8 text-ink">
      <h2 className="text-center text-3xl font-bold text-ink">בחרו מדריך</h2>
      <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 pt-16 sm:grid-cols-2">
        {guides.map((guide) => {
          const Icon = icons[guide.id] ?? Printer;
          return (
            <li key={guide.id}>
              <article className="relative rounded-3xl bg-white px-6 pb-8 pt-16 text-center shadow-card">
                <Link
                  href={`/printers/${printerId}/${guide.id}`}
                  className="absolute -top-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-chip-sky text-accent shadow-card ring-4 ring-wash"
                  aria-label={guide.title}
                >
                  <Icon className="h-10 w-10" strokeWidth={1.75} aria-hidden="true" />
                </Link>
                <h3 className="text-xl font-bold text-ink">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{guide.description}</p>
                <Link
                  href={`/printers/${printerId}/${guide.id}`}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 text-sm font-semibold text-ink hover:bg-action-hover"
                >
                  למדריך
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
