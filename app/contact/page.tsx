import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "יצירת קשר",
};

export default function ContactPage() {
  return (
    <article className="lift mx-auto my-10 max-w-3xl rounded-3xl border border-edge bg-white px-6 py-14 text-muted sm:px-10 md:my-16">
      <h1 className="text-4xl font-bold text-ink md:text-5xl">יצירת קשר</h1>
      <div className="mt-6 space-y-4 leading-8">
        <p>אין באתר טופס. פנייה לשירות נעשית בוואטסאפ, למספר {site.whatsappDisplay}.</p>
        <WhatsAppLink className="inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 font-semibold text-ink hover:bg-action-hover">
          פתיחת וואטסאפ
        </WhatsAppLink>
        <p>
          מפעיל האתר: [שם העוסק]. מספר עוסק: [מספר עוסק]. פרטים נוספים: [אימייל], [כתובת].
        </p>
      </div>
    </article>
  );
}
