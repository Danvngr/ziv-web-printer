import Link from "next/link";

const columns = [
  {
    href: "/about",
    title: "אודותינו",
    body: "מדריכי התקנה בעברית, צעד אחר צעד, למי שמחבר מדפסת חדשה בבית או במשרד קטן.",
  },
  {
    href: "/contact",
    title: "יצירת קשר",
    body: "רחוב הדפוס 18, תל אביב-יפו. טלפון 03-555-0142. hello@printerguides.example",
  },
  {
    href: "/terms",
    title: "תנאי שירות",
    body: "המדריכים הם הסבר כללי. הדגמים באתר הם דוגמאות בלבד ואינם מחייבים את היצרן.",
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-12 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column.href}>
            <Link href={column.href} className="text-lg font-semibold text-white hover:text-teal-300">
              {column.title}
            </Link>
            <p className="mt-3 text-sm leading-7 text-slate-300">{column.body}</p>
          </div>
        ))}
      </div>
      <p className="border-t border-white/10 px-4 py-4 text-center text-sm text-slate-400">
        © PrinterGuides 2024. כל הזכויות שמורות.
      </p>
    </footer>
  );
}
