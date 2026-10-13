"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/data/site";
import { defaultA11yPrefs, readA11ySnapshot, subscribeA11y, writeA11yPrefs } from "@/lib/a11y-prefs";

export function SiteFooter() {
  const prefs = useSyncExternalStore(subscribeA11y, readA11ySnapshot, () => defaultA11yPrefs);
  const stopped = prefs.motion;

  return (
    <footer className="mt-auto w-full min-w-0 max-w-full bg-transparent pb-24 text-ink">
      <div
        dir="ltr"
        className="flex w-full min-w-0 flex-col items-center gap-1 px-3 py-4 text-center sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-4">
          <a
            href={site.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink"
            aria-label={`אינסטגרם ${site.instagram}`}
          >
            <InstagramIcon />
            {site.instagram}
          </a>
          <a
            href={`tel:${site.whatsappDisplay.replace(/-/g, "")}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink"
          >
            <PhoneIcon />
            {site.whatsappDisplay}
          </a>
        </div>
        <button
          type="button"
          aria-pressed={stopped}
          onClick={() => writeA11yPrefs({ ...readA11ySnapshot(), motion: !stopped })}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink"
        >
          <ZapIcon />
          {stopped ? "הפעל אנימציה" : "הפסק אנימציה"}
        </button>
        <p className="text-sm leading-6 text-ink">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}

function ZapIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L17 13l4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 4 5a2 2 0 0 1 2-2Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
