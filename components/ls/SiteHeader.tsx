"use client";

import Link from "next/link";
import { Instagram } from "@/components/ls/icons/Instagram";
import { WhatsAppIcon } from "@/components/ls/icons/WhatsAppIcon";
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from "@/components/ls/whatsapp";
import { site } from "@/data/site";
const yairLogoUrl = "/learning-spaces/yair-logo.png";

/** Sticky site header. Shared by the landing page and every inner page. */
export function SiteHeader() {
  return (
    <header className="ls:sticky ls:top-0 ls:z-40 ls:backdrop-blur-xl ls:bg-background/80 ls:border-b ls:border-border">
      <div className="ls:mx-auto ls:max-w-7xl ls:px-4 ls:md:px-12 ls:lg:px-16 ls:py-4 ls:grid ls:grid-cols-[minmax(0,1fr)_auto] ls:items-center ls:gap-4">
        <div className="ls:flex ls:min-w-0 ls:items-center ls:gap-3">
          <Link href={`${site.learningSpacesPath}#top`} className="ls:shrink-0">
            <img
              src={yairLogoUrl}
              alt="פיתוח מרחבי למידה חכמים"
              width={44}
              height={44}
              className="ls:h-11 ls:w-11 ls:shrink-0 ls:object-contain"
            />
          </Link>
          <span className="ls:flex ls:min-w-0 ls:flex-col ls:leading-tight">
            <Link
              href={`${site.learningSpacesPath}#top`}
              className="ls:truncate ls:font-extrabold ls:tracking-tight ls:text-foreground ls:text-base ls:sm:text-lg"
            >
              פיתוח מרחבי למידה חכמים
            </Link>
            <Link href="/" className="ls:truncate ls:text-[11px] ls:sm:text-xs ls:text-foreground/60 ls:font-medium">
              מקבוצת יאיר סמארט אופיס בע״מ
            </Link>
          </span>
        </div>
        <div className="ls:flex ls:items-center ls:gap-2 ls:sm:gap-3">
          <a
            href="https://instagram.com/yair_smart_office"
            target="_blank"
            rel="noreferrer"
            className="ls:grid ls:h-10 ls:w-10 ls:place-items-center ls:rounded-xl ls:border ls:border-border ls:bg-card ls:hover:border-brand-green ls:hover:text-brand-green ls:transition"
            aria-label="Instagram"
          >
            <Instagram className="ls:h-4 ls:w-4" />
          </a>
          <a
            href={buildWhatsAppUrl(WHATSAPP_MESSAGES.consult)}
            target="_blank"
            rel="noreferrer"
            className="ls:hidden ls:sm:inline-flex ls:items-center ls:gap-2 ls:rounded-2xl ls:bg-brand-green ls:px-4 ls:py-2.5 ls:text-sm ls:font-bold ls:text-primary-foreground ls:shadow-md ls:hover:shadow-lg ls:hover:-translate-y-0.5 ls:transition"
          >
            <WhatsAppIcon size={16} />
            דברו איתנו בוואטסאפ
          </a>
          <a
            href={buildWhatsAppUrl(WHATSAPP_MESSAGES.consult)}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="ls:sm:hidden ls:grid ls:h-10 ls:w-10 ls:place-items-center ls:rounded-xl ls:bg-brand-green ls:text-primary-foreground ls:shadow-md ls:hover:shadow-lg ls:transition"
          >
            <WhatsAppIcon size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
