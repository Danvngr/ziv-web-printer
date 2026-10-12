"use client";

import Link from "next/link";
import { site } from "@/data/site";

export function SiteHeader({ pathname }: { pathname: string }) {
  const homeActive = pathname === "/";

  return (
    <header className="sticky top-0 z-30 bg-page">
      <div className="mx-auto flex max-w-5xl items-center px-4 py-2 sm:px-6">
        <Link
          href="/"
          aria-current={homeActive ? "page" : undefined}
          className="inline-flex min-h-11 items-center font-bold tracking-tight text-ink"
        >
          {site.name}
        </Link>
      </div>
    </header>
  );
}
