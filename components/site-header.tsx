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
        className="mx-auto hidden max-w-5xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 px-6 py-3 text-base text-ink sm:grid"
      >
        <Link
          href="/contact"
          aria-current={contactActive ? "page" : undefined}
          className={`inline-flex min-h-11 items-center justify-self-start whitespace-nowrap ${navClass(contactActive)}`}
        >
          יצירת קשר
        </Link>
        <Link href="/" className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap font-semibold tracking-tight text-ink">
          <Printer className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <span>PrinterGuides</span>
        </Link>
        <nav aria-label="ניווט ראשי" className="flex items-center justify-self-end gap-6">
          <Link
            href="/#guides"
            aria-current={guidesActive ? "page" : undefined}
            className={`inline-flex min-h-11 items-center whitespace-nowrap ${navClass(guidesActive)}`}
          >
            מדריכים
          </Link>
          <Link
            href="/"
            aria-current={homeActive ? "page" : undefined}
            className={`inline-flex min-h-11 items-center whitespace-nowrap ${navClass(homeActive)}`}
          >
            דף הבית
          </Link>
        </nav>
      </div>
      <div className="px-3 py-2 sm:hidden">
        <Link href="/" dir="ltr" className="mx-auto flex min-h-11 w-fit items-center gap-2 font-semibold text-ink">
          <Printer className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <span>PrinterGuides</span>
        </Link>
        <nav aria-label="ניווט ראשי" className="flex items-center justify-between text-sm">
          <Link
            href="/"
            aria-current={homeActive ? "page" : undefined}
            className={`inline-flex min-h-11 items-center whitespace-nowrap ${navClass(homeActive)}`}
          >
            דף הבית
          </Link>
          <Link
            href="/#guides"
            aria-current={guidesActive ? "page" : undefined}
            className={`inline-flex min-h-11 items-center whitespace-nowrap ${navClass(guidesActive)}`}
          >
            מדריכים
          </Link>
          <Link
            href="/contact"
            aria-current={contactActive ? "page" : undefined}
            className={`inline-flex min-h-11 items-center whitespace-nowrap ${navClass(contactActive)}`}
          >
            יצירת קשר
          </Link>
        </nav>
      </div>
    </header>
  );
}
