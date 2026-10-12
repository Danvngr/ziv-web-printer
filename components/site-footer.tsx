"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { WhatsAppLink, WhatsAppMark } from "@/components/whatsapp-link";
import { site } from "@/data/site";
import { defaultA11yPrefs, readA11ySnapshot, subscribeA11y, writeA11yPrefs } from "@/lib/a11y-prefs";

const links = [
  { href: "/about", label: "אודותינו" },
  { href: "/contact", label: "יצירת קשר" },
  { href: "/terms", label: "תנאי שימוש" },
  { href: "/privacy", label: "מדיניות פרטיות" },
  { href: "/accessibility", label: "הצהרת נגישות" },
] as const;

export function SiteFooter({ pathname }: { pathname: string }) {
  const prefs = useSyncExternalStore(subscribeA11y, readA11ySnapshot, () => defaultA11yPrefs);
  const stopped = prefs.motion;

  return (
    <footer className="mt-auto w-full min-w-0 max-w-full bg-transparent text-ink">
      {/* dir=ltr keeps the circle on the visual left. Phone wraps and centers; desktop stays one row. */}
      <div
        dir="ltr"
        className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-3 sm:flex-nowrap sm:justify-start sm:px-5"
      >
        <WhatsAppLink
          label="וואטסאפ לשירות"
          className="wa-pulse inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5a]"
        >
          <WhatsAppMark />
        </WhatsAppLink>
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
        <button
          type="button"
          aria-pressed={stopped}
          onClick={() => writeA11yPrefs({ ...readA11ySnapshot(), motion: !stopped })}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink"
        >
          <ZapIcon />
          {stopped ? "הפעל אנימציה" : "הפסק אנימציה"}
        </button>
        <p className="w-full text-center text-sm leading-6 text-ink sm:ms-auto sm:w-auto sm:text-left">
          © 2026 YAIR Smart Office. מרחבי למידה חכמים.
        </p>
      </div>
      <nav aria-label="מידע על האתר" className="flex flex-wrap justify-center gap-x-3 px-3 pb-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className="inline-flex min-h-11 items-center text-xs font-medium text-muted hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
      </nav>
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
