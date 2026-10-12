"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  brandsInCategory,
  filterMachines,
  machinesByBrand,
  placeholderImage,
  type DeviceCategory,
  type Machine,
} from "@/data/printers";
import { MachineName } from "@/components/machine-name";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { ZoomImage } from "@/components/zoom-image";

const categories: { id: DeviceCategory; label: string }[] = [
  { id: "printer", label: "מדפסות" },
  { id: "copier", label: "מכונות צילום" },
];

function initialBrand(machines: Machine[], category: DeviceCategory): string | null {
  const brands = brandsInCategory(machines, category);
  return brands.length === 1 ? brands[0] : null;
}

export function HomeSearch({ machines }: { machines: Machine[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DeviceCategory>("printer");
  const [brand, setBrand] = useState<string | null>(() => initialBrand(machines, "printer"));
  const matches = useMemo(
    () => filterMachines(machines, query, category),
    [machines, query, category],
  );
  const browsing = query.trim() === "";
  const categoryBrands = useMemo(() => brandsInCategory(machines, category), [machines, category]);
  const shown = useMemo(
    () => (browsing && brand ? matches.filter((machine) => machine.brand === brand) : matches),
    [browsing, brand, matches],
  );
  const groups = machinesByBrand(shown);

  function chooseCategory(next: DeviceCategory) {
    setCategory(next);
    setBrand(initialBrand(machines, next));
  }

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
              onClick={() => chooseCategory(item.id)}
              className={`lift inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold ${
                pressed
                  ? "bg-action text-ink hover:bg-action-hover"
                  : "border border-edge bg-white text-ink hover:bg-wash"
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
        {shown.length === 1 ? "נמצאה תוצאה אחת" : `נמצאו ${shown.length} תוצאות`}
      </p>

      {browsing ? (
        <BrandPicker brands={categoryBrands} brand={brand} onChange={setBrand} />
      ) : null}

      {shown.length === 0 ? (
        <div className="mx-auto mt-8 max-w-2xl rounded-3xl bg-white px-6 py-8 text-center shadow-card">
          <h2 className="text-2xl font-bold text-ink">לא מצאתם את הדגם?</h2>
          <p className="mt-3 leading-7 text-muted">אפשר לפנות לשירות בוואטסאפ ונעזור לזהות את המכונה.</p>
          <WhatsAppLink className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 font-semibold text-ink hover:bg-action-hover">
            פתיחת וואטסאפ
          </WhatsAppLink>
        </div>
      ) : (
        <div className="mt-6 space-y-12 text-center">
          {groups.map(([name, items]) => (
            <section key={name} aria-label={name}>
              {groups.length > 1 ? <h3 className="text-lg font-bold text-ink">{name}</h3> : null}
              <ul className="mx-auto mt-2 grid w-full max-w-lg">
                {items.map((machine) => (
                  <MachineCard key={machine.id} machine={machine} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function BrandPicker({
  brands,
  brand,
  onChange,
}: {
  brands: string[];
  brand: string | null;
  onChange: (brand: string | null) => void;
}) {
  const chip =
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold";
  return (
    <div className="mx-auto mt-6 max-w-xl rounded-3xl border border-edge bg-white px-4 py-4 shadow-card">
      <div role="group" aria-label="יצרן" className="flex flex-wrap items-center justify-center gap-2">
        <span className="px-1 text-sm font-bold text-accent">יצרן</span>
        <button
          type="button"
          aria-pressed={brand === null}
          onClick={() => onChange(null)}
          className={`${chip} ${brand === null ? "bg-action text-ink" : "bg-chip-sky text-ink hover:bg-wash"}`}
        >
          הכל
        </button>
        {brands.map((name) => {
          const selected = brand === name;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(name)}
              className={`${chip} ${selected ? "bg-action text-ink" : "bg-chip-sky text-ink hover:bg-wash"}`}
            >
              <bdi dir="ltr">{name}</bdi>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MachineCard({ machine }: { machine: Machine }) {
  const href = `/printers/${machine.id}`;
  const image = machine.image ?? placeholderImage;
  return (
    <li className="min-w-0">
      <article className="relative mt-20 rounded-3xl border border-edge bg-white px-5 pb-5 pt-24 text-center shadow-[inset_0_1px_0_#fff,0_8px_16px_-12px_#0a203640]">
        <span className="logo-halo absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full">
          <ZoomImage
            src={image}
            alt=""
            label="הגדלת תמונת המדפסת"
            width={1254}
            height={1254}
            triggerClassName="block h-full w-full overflow-hidden rounded-full bg-white ring-2 ring-white"
            imageClassName="h-full w-full scale-110 object-cover"
          />
        </span>
        <h4 className="text-xl font-bold text-ink">
          <Link href={href} className="inline-flex max-w-full justify-center">
            <MachineName brand={machine.brand} model={machine.model} />
          </Link>
        </h4>
        <Link
          href={href}
          className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 text-sm font-semibold text-ink hover:bg-action-hover"
        >
          לדגם
        </Link>
      </article>
    </li>
  );
}
