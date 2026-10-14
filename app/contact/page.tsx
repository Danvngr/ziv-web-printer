import type { Metadata } from "next";
import { ContactDetails } from "@/components/contact-details";
import { RichText } from "@/components/rich-text";
import { WhatsAppLink, WhatsAppMark } from "@/components/whatsapp-link";
import { getDomain } from "@/data/domains";

export const metadata: Metadata = {
  title: "יצירת קשר",
  description: "יצירת קשר עם יאיר סמארט אופיס. וואטסאפ, כתובת ושעות פעילות. בלי טופס.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  const domain = topic ? getDomain(topic) : undefined;

  return (
    <article className="wrap pb-16 pt-8 md:pt-14">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-edge bg-white px-6 py-10 shadow-card sm:px-10">
        <h1 className="yso-title">יצירת קשר</h1>
        <p className="mt-4 text-lg leading-8 text-muted">אין טופס. מתקשרים, כותבים בוואטסאפ, או מגיעים בשעות הפעילות.</p>
        {domain ? (
          <p className="mt-4 rounded-[1.75rem] bg-wash px-4 py-3 font-bold text-ink">
            בנושא: <RichText text={domain.title} />
          </p>
        ) : null}
        <div className="mt-8">
          <ContactDetails />
        </div>
        <WhatsAppLink className="wa-action mt-8" label="לכתוב בוואטסאפ">
          <WhatsAppMark size={16} />
          לכתוב בוואטסאפ
        </WhatsAppLink>
      </div>
    </article>
  );
}
