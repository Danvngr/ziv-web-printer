"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { ContactDetails } from "@/components/contact-details";
import { domains } from "@/data/domains";
import { site } from "@/data/site";
import { defaultA11yPrefs, readA11ySnapshot, subscribeA11y, writeA11yPrefs } from "@/lib/a11y-prefs";
import { RichText } from "@/components/rich-text";

export function SiteFooter() {
  const prefs = useSyncExternalStore(subscribeA11y, readA11ySnapshot, () => defaultA11yPrefs);
  const stopped = prefs.motion;

  return (
    <footer className="mt-auto w-full border-t border-edge pb-28 text-ink">
      <div className="wrap grid gap-10 py-10 md:grid-cols-3">
        <div>
          <ContactDetails />
        </div>
        <nav aria-label="פוטר" className="grid content-start gap-2 text-sm">
          <Link href="/" className="flex min-h-11 items-center font-medium hover:text-accent">
            ראשי
          </Link>
          <Link href="/projects" className="flex min-h-11 items-center font-medium hover:text-accent">
            פרויקטים
          </Link>
          <a href={site.learningSpacesHref} className="flex min-h-11 items-center font-medium hover:text-accent">
            מרחבי למידה
          </a>
          <Link href="/guides" className="flex min-h-11 items-center font-medium hover:text-accent">
            מרכז שירות
          </Link>
          <Link href="/about" className="flex min-h-11 items-center font-medium hover:text-accent">
            אודות
          </Link>
          <Link href="/contact" className="flex min-h-11 items-center font-medium hover:text-accent">
            צור קשר
          </Link>
        </nav>
        <nav aria-label="תחומים" className="grid content-start gap-2 text-sm">
          {domains.map((domain) => (
            <Link key={domain.slug} href={`/solutions/${domain.slug}`} className="flex min-h-11 items-center font-medium hover:text-accent">
              <RichText text={domain.title} />
            </Link>
          ))}
        </nav>
      </div>
      <div className="wrap flex flex-col items-center gap-3 border-t border-edge py-4 text-center text-sm sm:flex-row sm:flex-wrap sm:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-x-4">
          <Link href="/privacy" className="inline-flex min-h-11 items-center">
            מדיניות פרטיות
          </Link>
          <Link href="/terms" className="inline-flex min-h-11 items-center">
            תנאי שימוש
          </Link>
          <Link href="/accessibility" className="inline-flex min-h-11 items-center">
            הצהרת נגישות
          </Link>
        </div>
        <button
          type="button"
          aria-pressed={stopped}
          onClick={() => writeA11yPrefs({ ...readA11ySnapshot(), motion: !stopped })}
          className="inline-flex min-h-11 items-center"
        >
          {stopped ? "הפעל אנימציה" : "הפסק אנימציה"}
        </button>
        <p>
          <bdi dir="ltr">© 2026 {site.name}</bdi>
        </p>
      </div>
    </footer>
  );
}
