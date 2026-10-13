"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
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

export function HomeSearch({ machines }: { machines: Machine[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DeviceCategory>("printer");
  const [brand, setBrand] = useState<string | null>(null);
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
    setBrand(null);
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
              className={`choice ${pressed ? "choice-on" : "choice-off"}`}
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
          <WhatsAppLink className="choice choice-on mt-5">
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
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const choice = brand ?? "הכל";
  const brandKey = brands.join("\0");

  useEffect(() => {
    setOpen(false);
  }, [brandKey]);

  useEffect(() => {
    if (!open) return;
    const selected = menuRef.current?.querySelector<HTMLButtonElement>("[aria-checked='true']");
    (selected ?? menuRef.current?.querySelector("button"))?.focus();
    function onPointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: globalThis.KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(next: string | null) {
    onChange(next);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function onMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const items = [...(menuRef.current?.querySelectorAll("button") ?? [])];
    const index = items.indexOf(document.activeElement as HTMLButtonElement);
    if (event.key === "ArrowDown" || event.key === "ArrowUp" || event.key === "Home" || event.key === "End") {
      event.preventDefault();
    }
    if (event.key === "ArrowDown") items[(index + 1) % items.length]?.focus();
    if (event.key === "ArrowUp") items[(index - 1 + items.length) % items.length]?.focus();
    if (event.key === "Home") items[0]?.focus();
    if (event.key === "End") items[items.length - 1]?.focus();
  }

  const options: { id: string; value: string | null; label: string }[] = [
    { id: "all", value: null, label: "הכל" },
    ...brands.map((name) => ({ id: name, value: name, label: name })),
  ];

  return (
    <div ref={rootRef} className="relative z-20 mx-auto mt-6 flex w-fit flex-col items-center">
      <span id="brand-label" className="mb-2 text-sm font-bold text-ink">
        יצרן
      </span>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="brand-menu"
        aria-labelledby="brand-label"
        onClick={() => setOpen((value) => !value)}
        className="choice choice-on min-w-36"
      >
        {brand ? <bdi dir="ltr">{choice}</bdi> : choice}
        <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-4 w-4 ${open ? "rotate-180" : ""}`}>
          <path d="M5 7.5 10 12.5 15 7.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      <div
        ref={menuRef}
        id="brand-menu"
        role="menu"
        aria-label="יצרן"
        hidden={!open}
        onKeyDown={onMenuKeyDown}
        className="choice-menu absolute top-full z-20 mt-2 w-full min-w-44 rounded-2xl bg-white p-1.5 shadow-[0_16px_36px_-16px_#0a203655]"
      >
        {options.map((option) => {
          const selected = option.value === brand;
          return (
            <button
              key={option.id}
              type="button"
              role="menuitemradio"
              aria-checked={selected}
              onClick={() => choose(option.value)}
              className={`choice w-full justify-start ${selected ? "choice-on" : "choice-off shadow-none"}`}
            >
              {option.value ? <bdi dir="ltr">{option.label}</bdi> : option.label}
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
              triggerClassName="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white"
              imageClassName="h-[62%] w-[62%] object-contain"
          />
        </span>
        <h4 className="text-xl font-bold text-ink">
          <Link href={href} className="inline-flex max-w-full justify-center">
            <MachineName brand={machine.brand} model={machine.model} />
          </Link>
        </h4>
        <Link
          href={href}
          className="choice choice-on mt-3"
        >
          לדגם
        </Link>
      </article>
    </li>
  );
}
