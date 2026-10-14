"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import {
  a11yAttrNames,
  a11yDataAttrs,
  defaultA11yPrefs,
  readA11ySnapshot,
  subscribeA11y,
  writeA11yPrefs,
  type A11yPrefs,
  type TextSize,
} from "@/lib/a11y-prefs";

const textSizes: { value: TextSize; label: string }[] = [
  { value: "normal", label: "רגיל" },
  { value: "110", label: "110%" },
  { value: "125", label: "125%" },
];

function applyA11yPrefs(prefs: A11yPrefs) {
  const root = document.documentElement;
  const attrs = a11yDataAttrs(prefs);
  for (const name of a11yAttrNames) {
    const value = attrs[name];
    if (value) root.setAttribute(name, value);
    else root.removeAttribute(name);
  }
}

export function AccessibilityMenu() {
  const panelTitleId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const prefs = useSyncExternalStore(subscribeA11y, readA11ySnapshot, () => defaultA11yPrefs);

  useEffect(() => {
    applyA11yPrefs(prefs);
  }, [prefs]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function toggleFlag(key: "contrast" | "grayscale" | "links" | "font" | "motion") {
    const current = readA11ySnapshot();
    writeA11yPrefs({ ...current, [key]: !current[key] });
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-edge bg-white text-sm font-semibold text-ink sm:w-auto sm:px-3"
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <AccessIcon />
        <span className="sr-only sm:not-sr-only sm:ms-1">נגישות</span>
      </button>
      <div
        id="a11y-panel"
        role="region"
        aria-labelledby={panelTitleId}
        hidden={!open}
        className="absolute end-0 top-[calc(100%+0.5rem)] z-50 max-h-[min(32rem,70vh)] w-[min(18rem,calc(100vw-2rem))] overflow-y-auto rounded-[1.75rem] border border-edge bg-white p-3 text-start text-ink shadow-card"
      >
        <h2 id={panelTitleId} className="px-1 text-base font-bold text-ink">
          התאמות נגישות
        </h2>
        <p className="px-1 pt-1 text-xs leading-5 text-muted">גודל טקסט</p>
        <div role="group" aria-label="גודל טקסט" className="mt-1 grid grid-cols-3 gap-2">
          {textSizes.map((size) => (
            <button
              key={size.value}
              type="button"
              aria-pressed={prefs.text === size.value}
              onClick={() => writeA11yPrefs({ ...readA11ySnapshot(), text: size.value })}
              className={`inline-flex min-h-11 items-center justify-center rounded-xl border px-2 text-sm font-medium ${
                prefs.text === size.value
                  ? "border-action bg-action text-ink"
                  : "border-mist bg-white text-ink"
              }`}
            >
              {size.label}
            </button>
          ))}
        </div>
        <div className="mt-2 grid gap-2">
          <Toggle pressed={prefs.contrast} onClick={() => toggleFlag("contrast")}>
            ניגודיות גבוהה
          </Toggle>
          <Toggle pressed={prefs.grayscale} onClick={() => toggleFlag("grayscale")}>
            גווני אפור
          </Toggle>
          <Toggle pressed={prefs.links} onClick={() => toggleFlag("links")}>
            הדגשת קישורים
          </Toggle>
          <Toggle pressed={prefs.font} onClick={() => toggleFlag("font")}>
            גופן קריא
          </Toggle>
          <Toggle pressed={prefs.motion} onClick={() => toggleFlag("motion")}>
            הפחתת תנועה
          </Toggle>
          <button
            type="button"
            onClick={() => writeA11yPrefs(defaultA11yPrefs)}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-mist px-3 text-sm font-medium text-ink"
          >
            איפוס
          </button>
          <Link
            href="/accessibility"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-11 items-center justify-center rounded-xl px-3 text-sm font-semibold text-accent underline"
          >
            הצהרת נגישות
          </Link>
        </div>
      </div>
    </div>
  );
}

function AccessIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-4 sm:w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="1.4" fill="currentColor" stroke="none" />
      <path d="M5 9h14M12 9v11M12 13l-5 7M12 13l5 7" strokeLinecap="round" />
    </svg>
  );
}

function Toggle({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`inline-flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border px-3 text-start text-sm font-medium ${
        pressed ? "border-action bg-action text-ink" : "border-mist bg-white text-ink"
      }`}
    >
      <span>{children}</span>
      <span className="text-xs">{pressed ? "פעיל" : "כבוי"}</span>
    </button>
  );
}
