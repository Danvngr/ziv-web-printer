"use client";

import Link from "next/link";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { site } from "@/data/site";

export function SiteHeader({ pathname }: { pathname: string }) {
  const homeActive = pathname === "/";

  return (
    <header className="relative z-30">
      <AccessibilityMenu />
      <div className="mx-auto flex w-max max-w-full flex-col items-center px-4 py-3 text-center">
        <Link
          href="/"
          aria-current={homeActive ? "page" : undefined}
          className="inline-flex items-center"
        >
          <img
            src="/logo.png"
            alt={site.name}
            width={2172}
            height={724}
            className="h-auto w-[10.25rem]"
          />
        </Link>
        <p className="mt-1 text-center text-base font-medium leading-5 text-ink">{site.hebrewName}</p>
      </div>
    </header>
  );
}
