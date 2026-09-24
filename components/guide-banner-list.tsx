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
    <section className="mt-14 rounded-[2rem] bg-[linear-gradient(180deg,#0f4f5e_0%,#0e4560_40%,#0b2138_100%)] px-4 pb-12 pt-6 text-white shadow-xl">
      <h2 className="text-center text-2xl font-bold">בחרו מדריך</h2>
      <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 pt-16 sm:grid-cols-2">
        {guides.map((guide) => {
          const Icon = icons[guide.id] ?? Printer;
          return (
            <li key={guide.id}>
              <article className="relative rounded-2xl border border-white/15 bg-slate-950/35 px-6 pb-8 pt-16 text-center shadow-lg backdrop-blur-md">
                <Link
                  href={`/printers/${printerId}/${guide.id}`}
                  className="absolute -top-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-white text-teal-600 shadow-xl ring-4 ring-white"
                  aria-label={guide.title}
                >
                  <Icon className="h-10 w-10" strokeWidth={1.75} />
                </Link>
                <h3 className="text-xl font-semibold">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">{guide.description}</p>
                <Link
                  href={`/printers/${printerId}/${guide.id}`}
                  className="mt-5 inline-block rounded-full bg-teal-500 px-6 py-2 text-sm font-medium text-white hover:bg-teal-400"
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
