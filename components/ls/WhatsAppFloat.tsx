"use client";

import { WhatsAppIcon } from "@/components/ls/icons/WhatsAppIcon";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/components/ls/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_MESSAGES.default)}
      target="_blank"
      rel="noreferrer"
      aria-label="פתחו צ׳אט וואטסאפ"
      className="a11y-float ls:fixed ls:left-5 ls:z-50 ls:group ls:bottom-[calc(1.25rem+var(--consent-h,0px))]"
    >
      <span
        className="ls:absolute ls:inset-0 ls:rounded-full ls:bg-brand-green/50 ls:animate-ping"
        aria-hidden="true"
      />
      <span className="ls:relative ls:grid ls:h-14 ls:w-14 ls:sm:h-16 ls:sm:w-16 ls:place-items-center ls:rounded-full ls:bg-brand-green ls:text-primary-foreground ls:shadow-2xl ls:shadow-brand-green/40 ls:ring-4 ls:ring-background/60 ls:transition-transform ls:duration-200 ls:group-hover:scale-110">
        <WhatsAppIcon size={28} />
      </span>
    </a>
  );
}
