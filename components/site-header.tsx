"use client";

import Link from "next/link";
import { site } from "@/data/site";

export function SiteHeader({ pathname }: { pathname: string }) {
  const homeActive = pathname === "/";

  return (
    <header className="sticky top-0 z-30">
      <div className="flex items-center justify-center px-4 py-3">
        <Link
          href="/"
          aria-current={homeActive ? "page" : undefined}
          className="inline-flex min-h-11 items-center text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          {site.name}
        </Link>
      </div>
    </header>
  );
}
