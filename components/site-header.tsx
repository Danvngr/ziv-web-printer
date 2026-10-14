"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { RichText } from "@/components/rich-text";
import { domains } from "@/data/domains";
import { site } from "@/data/site";

const links: { href: string; label: string; external?: boolean; current: (path: string) => boolean }[] = [
  { href: "/projects", label: "פרויקטים", current: (path) => path.startsWith("/projects") },
  { href: site.learningSpacesHref, label: "מרחבי למידה", external: true, current: () => false },
  {
    href: "/guides",
    label: "מרכז שירות",
    current: (path) => path.startsWith("/guides") || path.startsWith("/printers"),
  },
  { href: "/about", label: "אודות", current: (path) => path.startsWith("/about") },
  { href: "/contact", label: "צור קשר", current: (path) => path.startsWith("/contact") },
];

export function SiteHeader({ pathname }: { pathname: string }) {
  const menuId = useId();
  const solutionsId = useId();
  const rootRef = useRef<HTMLElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const homeCurrent = pathname === "/";
  const solutionsCurrent = pathname.startsWith("/solutions");
  const [seenPath, setSeenPath] = useState(pathname);
  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setMenuOpen(false);
    setSolutionsOpen(false);
  }

  useEffect(() => {
    if (!menuOpen && !solutionsOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setSolutionsOpen(false);
      (menuOpen ? menuButtonRef : solutionsButtonRef).current?.focus();
    }
    function onPointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menuOpen, solutionsOpen]);

  return (
    <header ref={rootRef} className="sticky top-0 z-40 border-b border-edge bg-page/80 backdrop-blur-xl">
      <div className="wrap flex items-center justify-between gap-3 py-3">
        <Link href="/" aria-current={homeCurrent ? "page" : undefined} className="flex min-w-0 items-center gap-3">
          <img src="/logo.png" alt={site.hebrewName} width={2172} height={724} className="h-8 w-auto sm:h-11" />
          <span className="hidden min-w-0 flex-col leading-tight xl:flex">
            <span className="truncate text-sm font-extrabold text-ink" aria-hidden="true">
              {site.hebrewName}
            </span>
            <span className="truncate text-[11px] font-medium text-ink/60" aria-hidden="true">
              <bdi dir="ltr">{site.name}</bdi>
            </span>
          </span>
        </Link>

        <nav aria-label="ראשי" className="hidden items-center gap-x-4 xl:flex">
          <Link href="/" aria-current={homeCurrent ? "page" : undefined} className={navClass(homeCurrent)}>
            ראשי
          </Link>
          <SolutionsMenu
            id={solutionsId}
            open={solutionsOpen}
            current={solutionsCurrent}
            buttonRef={solutionsButtonRef}
            onToggle={() => setSolutionsOpen((value) => !value)}
          />
          {links.map((link) => (
            <NavLink key={link.href} link={link} pathname={pathname} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <AccessibilityMenu />
          <Link href="/contact" className="btn btn-green btn-sm header-cta">
            דברו איתנו
          </Link>
          <button
            type="button"
            ref={menuButtonRef}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-edge bg-white text-ink xl:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="sr-only">{menuOpen ? "סגירת תפריט" : "פתיחת תפריט"}</span>
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <div id={menuId} hidden={!menuOpen} className="wrap max-h-[calc(100vh-5rem)] overflow-y-auto pb-24 xl:hidden">
        <nav aria-label="תפריט" className="grid gap-1 pb-4">
          <Link href="/" aria-current={homeCurrent ? "page" : undefined} className={mobileClass(homeCurrent)}>
            ראשי
          </Link>
          <button
            type="button"
            className={mobileClass(solutionsCurrent)}
            aria-expanded={solutionsOpen}
            onClick={() => setSolutionsOpen((value) => !value)}
          >
            פתרונות
          </button>
          {solutionsOpen ? <SolutionsList onNavigate={() => setMenuOpen(false)} /> : null}
          {links.map((link) => (
            <NavLink key={link.href} link={link} pathname={pathname} mobile />
          ))}
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  link,
  pathname,
  mobile = false,
}: {
  link: (typeof links)[number];
  pathname: string;
  mobile?: boolean;
}) {
  const current = link.current(pathname);
  const className = mobile ? mobileClass(current) : navClass(current);
  if (link.external) {
    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    );
  }
  return (
    <Link href={link.href} aria-current={current ? "page" : undefined} className={className}>
      {link.label}
    </Link>
  );
}

function SolutionsMenu({
  id,
  open,
  current,
  buttonRef,
  onToggle,
}: {
  id: string;
  open: boolean;
  current: boolean;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        className={navClass(current)}
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        פתרונות
      </button>
      <div
        id={id}
        hidden={!open}
        className="absolute top-[calc(100%+0.5rem)] start-0 z-50 w-72 rounded-[1.75rem] border border-edge bg-white p-2 shadow-card"
      >
        <SolutionsList />
      </div>
    </div>
  );
}

function SolutionsList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="grid gap-1 py-1">
      {domains.map((domain) => (
        <li key={domain.slug}>
          <Link
            href={`/solutions/${domain.slug}`}
            onClick={onNavigate}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-ink hover:bg-wash"
          >
            <RichText text={domain.title} />
          </Link>
        </li>
      ))}
      <li>
        <Link href="/#domains" onClick={onNavigate} className="block rounded-xl px-3 py-2 text-sm font-bold text-accent">
          כל התחומים
        </Link>
      </li>
    </ul>
  );
}

function navClass(current: boolean) {
  return `inline-flex min-h-11 items-center text-sm font-medium ${current ? "font-bold text-accent" : "text-ink hover:text-accent"}`;
}

function mobileClass(current: boolean) {
  return `flex min-h-11 w-full items-center rounded-xl px-3 text-start text-base font-medium ${
    current ? "bg-wash font-bold text-accent" : "text-ink"
  }`;
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      {open ? <path d="M6 6 18 18M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  );
}
