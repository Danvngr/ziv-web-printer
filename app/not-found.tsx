import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-ink">העמוד לא נמצא</h1>
      <p className="mt-4 text-muted">הכתובת שביקשתם אינה קיימת במדריכים.</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 font-semibold text-ink hover:bg-action-hover"
      >
        חזרה לדף הבית
      </Link>
    </section>
  );
}
