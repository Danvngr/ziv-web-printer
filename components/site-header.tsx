"use client";

import Link from "next/link";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { site } from "@/data/site";

export function SiteHeader({ pathname }: { pathname: string }) {
  const homeActive = pathname === "/";

  return (
    <header className="relative z-30">
      <AccessibilityMenu />
      <div className="flex flex-col items-center px-4 py-3 text-center">
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
            className="h-auto w-40 sm:w-52"
          />
        </Link>
        <p className="text-sm font-medium text-ink">{site.hebrewName}</p>
      </div>
    </header>
  );
}
