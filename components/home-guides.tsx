"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { filterPrinters, type Printer } from "@/data/printers";

export function HomeGuides({ printers }: { printers: Printer[] }) {
  const [query, setQuery] = useState("");
  const matches = filterPrinters(printers, query);

  return (
    <div id="guides" className="mx-auto mt-8 w-full max-w-5xl">
      <form
        role="search"
        className="mx-auto w-full max-w-2xl"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="printer-search" className="sr-only">
          הקלידו את דגם המדפסת (למשל: HP, Canon, Brother)
        </label>
        <input
          id="printer-search"
          type="text"
          maxLength={80}
          value={query}
          onChange={(event) => setQuery(event.target.value.slice(0, 80))}
          placeholder="הקלידו את דגם המדפסת (למשל: HP, Canon, Brother)"
          autoComplete="off"
          className="min-h-11 w-full rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-white shadow-inner backdrop-blur placeholder:text-white/70"
        />
      </form>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {matches.length === 1 ? "נמצאה תוצאה אחת" : `נמצאו ${matches.length} תוצאות`}
      </p>
      {matches.length === 0 ? (
        <p className="px-4 pt-16 text-lg">לא נמצאו מדפסות תואמות</p>
      ) : (
        <ul dir="ltr" className="grid grid-cols-1 gap-x-8 gap-y-16 px-4 pt-16 md:grid-cols-3">
          {matches.map((printer) => (
            <li key={printer.id} dir="rtl">
              <article className="relative rounded-2xl border border-white/15 bg-slate-950/35 px-6 pb-8 pt-16 text-center shadow-lg backdrop-blur-md">
                <Link
                  href={`/printers/${printer.id}`}
                  className="absolute -top-12 left-1/2 block h-24 w-24 -translate-x-1/2 overflow-hidden rounded-full bg-white ring-4 ring-white shadow-xl"
                  aria-label={`למדריך ${printer.brand} ${printer.model}`}
                >
                  <Image
                    src={printer.image}
                    alt={`${printer.brand} ${printer.model}`}
                    width={96}
                    height={96}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </Link>
                <p className="text-sm text-white/75">{printer.brand}</p>
                <h2 className="mt-1 text-xl font-semibold">{printer.model}</h2>
                <Link
                  href={`/printers/${printer.id}`}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-teal-500 px-6 text-sm font-medium text-white hover:bg-teal-400"
                >
                  למדריך
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
