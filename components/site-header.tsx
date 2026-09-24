"use client";

import Link from "next/link";
import { Printer } from "lucide-react";

function navClass(active: boolean) {
  return active
    ? "underline decoration-2 underline-offset-4"
    : "hover:text-white";
}

export function SiteHeader({ pathname }: { pathname: string }) {
  const home = pathname === "/";
  const homeActive = pathname === "/";
  const guidesActive = pathname.startsWith("/printers");
  const contactActive = pathname === "/contact";

  return (
    <header className="px-3 sm:px-4">
      <div
        dir="ltr"
        className={
          home
            ? "mx-auto mt-6 grid max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-full border border-white/20 bg-white/15 px-4 py-3 text-sm text-white shadow-lg backdrop-blur sm:px-8 sm:py-4 sm:text-base"
            : "mx-auto mt-6 grid max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-full border border-white/15 bg-teal-950/80 px-4 py-3 text-sm text-white shadow-lg backdrop-blur sm:px-8 sm:py-4 sm:text-base"
        }
      >
        <Link href="/contact" className={`justify-self-start ${navClass(contactActive)}`}>
          יצירת קשר
        </Link>
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Printer className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>PrinterGuides</span>
        </Link>
        <nav className="flex items-center justify-self-end gap-4 sm:gap-6">
          <Link href="/#guides" className={navClass(guidesActive)}>
            מדריכים
          </Link>
          <Link href="/" className={navClass(homeActive)}>
            דף הבית
          </Link>
        </nav>
      </div>
    </header>
  );
}
