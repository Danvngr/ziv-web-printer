import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-slate-900">העמוד לא נמצא</h1>
      <p className="mt-4 text-slate-600">הכתובת שביקשתם אינה קיימת במדריכים.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-teal-500 px-6 py-2.5 font-medium text-white hover:bg-teal-400"
      >
        חזרה לדף הבית
      </Link>
    </section>
  );
}
