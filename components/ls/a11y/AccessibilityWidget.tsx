"use client";

import Link from "next/link";
import { PersonStanding } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  A11Y_STORAGE_KEY,
  DEFAULT_PREFS,
  SCALE_STEPS,
  applyPrefs,
  readPrefs,
  type A11yPrefs,
} from "./a11y-prefs";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function AccessibilityWidget({
  corner = "bottom-right",
}: {
  corner?: "bottom-left" | "bottom-right";
}) {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yPrefs>(DEFAULT_PREFS);
  const [ready, setReady] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const initial = readPrefs();
    applyPrefs(initial);
    // localStorage and prefers-* are read after mount so the saved panel does not flash.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefs(initial);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyPrefs(prefs);
    try {
      localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      /* storage unavailable */
    }
  }, [prefs, ready]);

  const update = useCallback(
    (patch: Partial<A11yPrefs>) => setPrefs((p) => ({ ...p, ...patch })),
    [],
  );

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Focus management: move focus to heading, trap inside, Esc closes.
  useEffect(() => {
    if (!open) return;
    headingRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || active === headingRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  const scaleIndex = SCALE_STEPS.indexOf(prefs.scale) === -1 ? 0 : SCALE_STEPS.indexOf(prefs.scale);
  const percent = Math.round(prefs.scale * 100);

  const ui = (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="a11y-trigger ls:grid ls:h-14 ls:w-14 ls:sm:h-16 ls:sm:w-16 ls:place-items-center ls:rounded-full ls:bg-brand-blue ls:text-primary-foreground ls:shadow-2xl ls:shadow-brand-blue/40 ls:ring-4 ls:ring-background/60 ls:transition-transform ls:duration-200 ls:hover:scale-110"
        data-corner={corner}
        aria-label="תפריט נגישות"
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <PersonStanding size={30} aria-hidden="true" />
      </button>

      {open && (
        <div
          className="a11y-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            ref={panelRef}
            id="a11y-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-panel-title"
            className="a11y-panel"
            dir="rtl"
          >
            <div className="a11y-panel-head">
              <h2 id="a11y-panel-title" tabIndex={-1} ref={headingRef}>
                תפריט נגישות
              </h2>
              <button
                type="button"
                className="a11y-close"
                onClick={close}
                aria-label="סגירת תפריט הנגישות"
              >
                ✕
              </button>
            </div>

            <div className="a11y-scale-row">
              <button
                type="button"
                onClick={() =>
                  update({ scale: SCALE_STEPS[Math.min(scaleIndex + 1, SCALE_STEPS.length - 1)] })
                }
                disabled={scaleIndex === SCALE_STEPS.length - 1}
              >
                הגדלת טקסט
              </button>
              <span aria-live="polite" style={{ flex: 1, textAlign: "center", fontWeight: 800 }}>
                גודל טקסט: {percent}%
              </span>
              <button
                type="button"
                onClick={() => update({ scale: SCALE_STEPS[Math.max(scaleIndex - 1, 0)] })}
                disabled={scaleIndex === 0}
              >
                הקטנת טקסט
              </button>
            </div>

            <div className="a11y-grid">
              <Toggle
                label="ניגודיות גבוהה"
                pressed={prefs.contrast === "high"}
                onToggle={() => update({ contrast: prefs.contrast === "high" ? "off" : "high" })}
              />
              <Toggle
                label="ניגודיות הפוכה"
                pressed={prefs.contrast === "invert"}
                onToggle={() =>
                  update({ contrast: prefs.contrast === "invert" ? "off" : "invert" })
                }
              />
              <Toggle
                label="גווני אפור"
                pressed={prefs.grayscale}
                onToggle={() => update({ grayscale: !prefs.grayscale })}
              />
              <Toggle
                label="הדגשת קישורים"
                pressed={prefs.links}
                onToggle={() => update({ links: !prefs.links })}
              />
              <Toggle
                label="גופן קריא"
                pressed={prefs.font}
                onToggle={() => update({ font: !prefs.font })}
              />
              <Toggle
                label="ריווח טקסט מוגדל"
                pressed={prefs.spacing}
                onToggle={() => update({ spacing: !prefs.spacing })}
              />
              <Toggle
                label="עצירת אנימציות"
                pressed={prefs.motion}
                onToggle={() => update({ motion: !prefs.motion })}
              />
              <Toggle
                label="סמן גדול"
                pressed={prefs.cursor}
                onToggle={() => update({ cursor: !prefs.cursor })}
              />
              <Toggle
                label="הדגשת מוקד"
                pressed={prefs.focus}
                onToggle={() => update({ focus: !prefs.focus })}
              />
            </div>

            <button type="button" className="a11y-reset" onClick={() => setPrefs(DEFAULT_PREFS)}>
              איפוס הגדרות
            </button>

            <Link href="/accessibility" className="a11y-statement-link" onClick={close}>
              הצהרת נגישות
            </Link>
          </div>
        </div>
      )}
    </>
  );

  if (!ready || typeof document === "undefined") return null;
  return createPortal(ui, document.body);
}

function Toggle({
  label,
  pressed,
  onToggle,
}: {
  label: string;
  pressed: boolean;
  onToggle: () => void;
}) {
  return (
    <button type="button" className="a11y-opt" aria-pressed={pressed} onClick={onToggle}>
      <span>{label}</span>
    </button>
  );
}
