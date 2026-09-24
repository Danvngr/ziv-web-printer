import Link from "next/link";

const links = [
  { href: "/about", label: "אודותינו" },
  { href: "/contact", label: "יצירת קשר" },
  { href: "/terms", label: "תנאי שימוש" },
  { href: "/privacy", label: "מדיניות פרטיות" },
  { href: "/accessibility", label: "הצהרת נגישות" },
] as const;

export function SiteFooter({ pathname }: { pathname: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-slate-950 text-slate-200">
      <nav aria-label="מידע על האתר" className="mx-auto flex max-w-5xl flex-wrap gap-x-4 gap-y-1 px-6 py-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className="inline-flex min-h-11 items-center text-sm font-semibold text-white hover:text-teal-300"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="border-t border-white/10 px-4 py-4 text-center text-sm leading-6 text-slate-400">
        שמות וסימני מסחר שייכים לבעליהם. האתר אינו קשור ליצרנים.
        <span className="mt-1 block">© {year}</span>
      </p>
    </footer>
  );
}
