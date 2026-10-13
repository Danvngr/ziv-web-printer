"use client";

import Link from "next/link";
import { site } from "@/data/site";

export function SiteHeader({ pathname }: { pathname: string }) {
  const homeActive = pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="ms-auto flex w-fit max-w-full flex-col items-center px-3 py-2 text-center sm:px-5 sm:py-3">
        <Link
          href="/"
          aria-current={homeActive ? "page" : undefined}
          className="inline-flex min-h-11 items-center"
        >
          <img
            src="/logo.png"
            alt={site.name}
            width={2172}
            height={724}
            className="h-auto w-[min(210px,62vw)] sm:w-72"
          />
        </Link>
        <p className="text-sm font-medium text-ink">{site.hebrewName}</p>
      </div>
    </header>
  );
}
