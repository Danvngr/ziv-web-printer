"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import {
  a11yAttrNames,
  a11yDataAttrs,
  defaultA11yPrefs,
  parseA11yPrefs,
  type A11yPrefs,
  type TextSize,
} from "@/lib/a11y-prefs";

const STORAGE_KEY = "a11y-prefs";
const PREFS_EVENT = "a11y-prefs-change";

let snapshot = defaultA11yPrefs;
let snapshotRaw: string | null = null;
let hasRead = false;

function readSnapshot(): A11yPrefs {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    raw = null;
  }
  if (hasRead && raw === snapshotRaw) return snapshot;
  hasRead = true;
  snapshotRaw = raw;
  snapshot = parseA11yPrefs(raw);
  return snapshot;
}

function subscribePrefs(onChange: () => void) {
  window.addEventListener(PREFS_EVENT, onChange);
  return () => window.removeEventListener(PREFS_EVENT, onChange);
}

function writePrefs(next: A11yPrefs) {
  const raw = JSON.stringify(next);
  try {
    localStorage.setItem(STORAGE_KEY, raw);
  } catch {
    // Storage can be blocked. The choice still applies for this visit.
  }
  snapshot = next;
  snapshotRaw = raw;
  hasRead = true;
  window.dispatchEvent(new Event(PREFS_EVENT));
}

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
  const prefs = useSyncExternalStore(subscribePrefs, readSnapshot, () => defaultA11yPrefs);

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
    const current = readSnapshot();
    writePrefs({ ...current, [key]: !current[key] });
  }

  return (
    <div className="fixed end-1 top-1/2 z-40 -translate-y-1/2">
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-s-2xl bg-slate-950 px-2 py-3 text-sm font-semibold text-white shadow-lg [writing-mode:vertical-rl]"
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((value) => !value)}
      >
        נגישות
      </button>
      <div
        id="a11y-panel"
        role="region"
        aria-labelledby={panelTitleId}
        hidden={!open}
        className="absolute end-[calc(100%+0.5rem)] top-1/2 max-h-[min(32rem,80vh)] w-[min(18rem,calc(100vw-4.5rem))] -translate-y-1/2 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 text-start text-slate-900 shadow-2xl"
      >
        <h2 id={panelTitleId} className="px-1 text-base font-bold">
          התאמות נגישות
        </h2>
        <p className="px-1 pt-1 text-xs leading-5 text-slate-600">גודל טקסט</p>
        <div role="group" aria-label="גודל טקסט" className="mt-1 grid grid-cols-3 gap-2">
          {textSizes.map((size) => (
            <button
              key={size.value}
              type="button"
              aria-pressed={prefs.text === size.value}
              onClick={() => writePrefs({ ...readSnapshot(), text: size.value })}
              className={`inline-flex min-h-11 items-center justify-center rounded-xl border px-2 text-sm font-medium ${
                prefs.text === size.value
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white"
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
            onClick={() => writePrefs(defaultA11yPrefs)}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-3 text-sm font-medium"
          >
            איפוס
          </button>
          <Link
            href="/accessibility"
            onClick={() => setOpen(false)}
            className="inline-flex min-h-11 items-center justify-center rounded-xl px-3 text-sm font-semibold text-teal-800 underline"
          >
            הצהרת נגישות
          </Link>
        </div>
      </div>
    </div>
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
        pressed ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white"
      }`}
    >
      <span>{children}</span>
      <span className="text-xs">{pressed ? "פעיל" : "כבוי"}</span>
    </button>
  );
}
