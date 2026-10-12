"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  filterMachines,
  machinesByBrand,
  placeholderImage,
  type DeviceCategory,
  type Machine,
} from "@/data/printers";
import { WhatsAppLink } from "@/components/whatsapp-link";

const categories: { id: DeviceCategory; label: string }[] = [
  { id: "printer", label: "מדפסות" },
  { id: "copier", label: "מכונות צילום" },
];

export function HomeSearch({ machines }: { machines: Machine[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DeviceCategory>("printer");
  const matches = useMemo(
    () => filterMachines(machines, query, category),
    [machines, query, category],
  );
  const browsing = query.trim() === "";
  const groups = machinesByBrand(matches);

  return (
    <div id="search" className="mx-auto mt-8 w-full max-w-5xl">
      <div role="group" aria-label="קטגוריות" className="mb-5 flex flex-wrap justify-center gap-3">
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
      <form role="search" className="mx-auto max-w-2xl" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="model-search" className="sr-only">
          הקלידו דגם מדפסת
        </label>
        <input
          id="model-search"
          type="text"
          maxLength={80}
          value={query}
          onChange={(event) => setQuery(event.target.value.slice(0, 80))}
          placeholder="הקלידו דגם מדפסת"
          autoComplete="off"
          className="min-h-14 w-full rounded-full border border-mist bg-white px-6 text-lg text-ink shadow-card placeholder:text-muted"
        />
      </form>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {matches.length === 1 ? "נמצאה תוצאה אחת" : `נמצאו ${matches.length} תוצאות`}
      </p>

      {matches.length === 0 ? (
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl bg-white px-6 py-8 text-center shadow-card">
          <h2 className="text-2xl font-bold text-ink">לא מצאתם את הדגם?</h2>
          <p className="mt-3 leading-7 text-muted">אפשר לפנות לשירות בוואטסאפ ונעזור לזהות את המכונה.</p>
          <WhatsAppLink className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 font-semibold text-ink hover:bg-action-hover">
            פתיחת וואטסאפ
          </WhatsAppLink>
        </div>
      ) : (
        <div className="mt-6 space-y-12 text-center">
          {browsing ? <h2 className="text-xl font-bold text-ink">עיון לפי יצרן</h2> : null}
          {groups.map(([brand, items]) => (
            <section key={brand} aria-label={brand}>
              <h3 className="text-lg font-bold text-ink">{brand}</h3>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-16 px-2 pt-16 md:grid-cols-3">
                {items.map((machine) => (
                  <li key={machine.id}>
                    <article className="relative rounded-3xl bg-white px-6 pb-8 pt-16 text-center shadow-card">
                      <Link
                        href={`/printers/${machine.id}`}
                        className="absolute -top-12 left-1/2 block h-24 w-24 -translate-x-1/2 overflow-hidden rounded-full bg-white shadow-card ring-4 ring-wash"
                        aria-label={`לדגם ${machine.brand} ${machine.model}`}
                      >
                        <Image
                          src={machine.image ?? placeholderImage}
                          alt={`${machine.brand} ${machine.model}`}
                          width={96}
                          height={96}
                          unoptimized
                          className="h-full w-full object-cover"
                        />
                      </Link>
                      <h4 className="text-xl font-bold text-ink">{machine.model}</h4>
                      <Link
                        href={`/printers/${machine.id}`}
                        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 text-sm font-semibold text-ink hover:bg-action-hover"
                      >
                        לדגם
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
