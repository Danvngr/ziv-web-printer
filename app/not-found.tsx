import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";

export default function NotFound() {
  return (
    <section className="wrap py-24 text-center">
      <h1 className="text-4xl font-bold text-ink">העמוד לא נמצא</h1>
      <p className="mt-4 text-muted">הכתובת לא מובילה לעמוד, לדגם או למדריך קיימים.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="btn btn-green">
          לדף הבית
        </Link>
        <Link href="/guides" className="btn btn-blue">
          למרכז המדריכים
        </Link>
        <WhatsAppLink className="inline-flex min-h-11 items-center justify-center rounded-full border border-mist bg-white px-6 font-semibold text-ink">
          וואטסאפ לשירות
        </WhatsAppLink>
      </div>
    </section>
  );
}
