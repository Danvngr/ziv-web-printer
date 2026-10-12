"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { filterMachines, machinesByBrand, type Machine } from "@/data/printers";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function HomeSearch({ machines }: { machines: Machine[] }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => filterMachines(machines, query), [machines, query]);
  const browsing = query.trim() === "";
  const groups = machinesByBrand(browsing ? machines : matches);

  return (
    <div id="search" className="mx-auto mt-8 w-full max-w-2xl text-start">
      <form role="search" onSubmit={(event) => event.preventDefault()}>
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
        <div className="mt-8 rounded-3xl bg-white px-6 py-8 text-center shadow-card">
          <h2 className="text-2xl font-bold text-ink">לא מצאתם את הדגם?</h2>
          <p className="mt-3 leading-7 text-muted">אפשר לפנות לשירות בוואטסאפ ונעזור לזהות את המכונה.</p>
          <WhatsAppLink className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 font-semibold text-ink hover:bg-action-hover">
            פתיחת וואטסאפ
          </WhatsAppLink>
        </div>
      ) : (
        <div className="mt-8 space-y-8">
          {browsing ? <h2 className="text-xl font-bold text-ink">עיון לפי יצרן</h2> : null}
          {groups.map(([brand, items]) => (
            <section key={brand} aria-label={brand}>
              <h3 className="text-lg font-bold text-ink">{brand}</h3>
              <ul className="mt-3 grid gap-3">
                {items.map((machine) => (
                  <li key={machine.id}>
                    <Link
                      href={`/printers/${machine.id}`}
                      className="flex min-h-14 items-center justify-between gap-3 rounded-3xl bg-white px-5 shadow-card"
                    >
                      <span>
                        <span className="block text-sm text-muted">{machine.brand}</span>
                        <span className="text-lg font-bold text-ink">{machine.model}</span>
                      </span>
                      <span className="text-sm font-semibold text-accent">לדגם</span>
                    </Link>
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
