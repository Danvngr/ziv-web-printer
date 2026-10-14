import Link from "next/link";
import { DomainIcon } from "@/components/domain-icon";
import { RichText } from "@/components/rich-text";
import type { Domain } from "@/data/domains";

const pastels = ["bg-chip-mint", "bg-chip-sky", "bg-chip-sand", "bg-[#ffc6c7]"];

export function DomainCard({ domain, index }: { domain: Domain; index: number }) {
  return (
    <Link
      href={`/solutions/${domain.slug}`}
      className="flex h-full min-w-0 flex-col overflow-hidden rounded-[2rem] border border-edge bg-white shadow-card transition duration-200 hover:-translate-y-0.5"
    >
      <span className={`grid h-36 place-items-center ${pastels[index % pastels.length]}`}>
        <DomainIcon slug={domain.slug} className="h-10 w-10 text-ink" />
      </span>
      <span className="flex flex-1 flex-col p-5 text-start">
        <span className="text-xl font-bold text-ink">
          <RichText text={domain.title} />
        </span>
        <span className="mt-2 flex-1 text-sm leading-6 text-muted">{domain.summary}</span>
        <span className="btn btn-green btn-sm mt-5 w-full">לגלות את הפתרון</span>
      </span>
    </Link>
  );
}
