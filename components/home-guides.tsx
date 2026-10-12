"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { filterPrinters, type DeviceCategory, type Printer } from "@/data/printers";

const categories: { id: DeviceCategory; label: string }[] = [
  { id: "printer", label: "מדפסות" },
  { id: "copier", label: "מכונות צילום" },
];

export function HomeGuides({ printers }: { printers: Printer[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DeviceCategory>("printer");
  const matches = filterPrinters(printers, query, category);

  return (
    <div id="guides" className="mx-auto mt-10 w-full max-w-5xl">
      <div role="group" aria-label="קטגוריות" className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
        {categories.map((item) => {
          const pressed = category === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setCategory(item.id)}
              className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold ${
                pressed
                  ? "bg-action text-ink hover:bg-action-hover"
                  : "border border-mist bg-white text-ink shadow-sm hover:bg-wash"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <form
        role="search"
        className="mx-auto mt-6 w-full max-w-2xl"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="printer-search" className="sr-only">
          הקלידו מותג או דגם (למשל: Canon, CopyDesk)
        </label>
        <input
          id="printer-search"
          type="text"
          maxLength={80}
          value={query}
          onChange={(event) => setQuery(event.target.value.slice(0, 80))}
          placeholder="הקלידו מותג או דגם (למשל: Canon, CopyDesk)"
          autoComplete="off"
          className="min-h-11 w-full rounded-full border border-mist bg-white px-6 py-3.5 text-ink shadow-sm placeholder:text-muted"
        />
      </form>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {matches.length === 1 ? "נמצאה תוצאה אחת" : `נמצאו ${matches.length} תוצאות`}
      </p>
      {matches.length === 0 ? (
        <p className="px-4 pt-16 text-lg text-muted">לא נמצאו דגמים תואמים</p>
      ) : (
        <ul dir="ltr" className="grid grid-cols-1 gap-x-8 gap-y-16 px-4 pt-20 md:grid-cols-3">
          {matches.map((printer) => (
            <li key={printer.id} dir="rtl">
              <article className="relative rounded-3xl bg-white px-6 pb-8 pt-16 text-center shadow-card">
                <Link
                  href={`/printers/${printer.id}`}
                  className="absolute -top-12 left-1/2 block h-24 w-24 -translate-x-1/2 overflow-hidden rounded-full bg-white shadow-card ring-4 ring-wash"
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
                <p
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-medium text-ink ${
                    printer.category === "copier" ? "bg-chip-sand" : "bg-chip-sky"
                  }`}
                >
                  {printer.brand}
                </p>
                <h2 className="mt-3 text-xl font-bold text-ink">{printer.model}</h2>
                <Link
                  href={`/printers/${printer.id}`}
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 text-sm font-semibold text-ink hover:bg-action-hover"
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
