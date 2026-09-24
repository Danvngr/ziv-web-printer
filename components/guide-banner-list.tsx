import Link from "next/link";
import type { Guide } from "@/data/printers";

export function GuideBannerList({
  printerId,
  guides,
}: {
  printerId: string;
  guides: Guide[];
}) {
  return (
    <ul className="mt-10 space-y-4">
      {guides.map((guide) => (
        <li key={guide.id}>
          <Link
            href={`/printers/${printerId}/${guide.id}`}
            className="block rounded-2xl border border-teal-100 bg-white px-6 py-5 shadow-sm transition hover:border-teal-300 hover:shadow-md"
          >
            <h2 className="text-lg font-bold text-slate-900">{guide.title}</h2>
            <p className="mt-1 text-slate-600">{guide.description}</p>
            <span className="mt-3 inline-block text-sm font-medium text-teal-600">
              לפתיחת המדריך ←
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
