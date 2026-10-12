"use client";

import Link from "next/link";
import { Printer } from "lucide-react";

function navClass(active: boolean) {
  return active
    ? "text-accent underline decoration-2 underline-offset-8"
    : "text-ink hover:text-accent";
}

export function SiteHeader({ pathname }: { pathname: string }) {
  const homeActive = pathname === "/";
  const guidesActive = pathname.startsWith("/printers");
  const contactActive = pathname === "/contact";

  return (
    <header className="sticky top-0 z-30 border-b border-mist bg-white">
      <div
        dir="ltr"
        className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-3 py-2 text-sm text-ink sm:gap-3 sm:px-6 sm:py-3 sm:text-base"
      >
        <Link
          href="/contact"
          aria-current={contactActive ? "page" : undefined}
          className={`inline-flex min-h-11 items-center justify-self-start ${navClass(contactActive)}`}
        >
          יצירת קשר
        </Link>
        <Link href="/" className="inline-flex min-h-11 items-center gap-2 font-semibold tracking-tight text-ink">
          <Printer className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <span>PrinterGuides</span>
        </Link>
        <nav aria-label="ניווט ראשי" className="flex items-center justify-self-end gap-3 sm:gap-6">
          <Link
            href="/#guides"
            aria-current={guidesActive ? "page" : undefined}
            className={`inline-flex min-h-11 items-center ${navClass(guidesActive)}`}
          >
            מדריכים
          </Link>
          <Link
            href="/"
            aria-current={homeActive ? "page" : undefined}
            className={`inline-flex min-h-11 items-center ${navClass(homeActive)}`}
          >
            דף הבית
          </Link>
        </nav>
      </div>
    </header>
  );
}
