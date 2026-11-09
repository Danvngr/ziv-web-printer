"use client";

import Link from "next/link";
import { Mail, MapPin, Zap, ZapOff } from "lucide-react";
import { Instagram } from "@/components/ls/icons/Instagram";
import type { ReactNode } from "react";

import { WhatsAppIcon } from "@/components/ls/icons/WhatsAppIcon";
import { useReducedMotion } from "@/components/ls/ReducedMotionContext";
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_NAME, COMPANY_REG_NO } from "@/components/ls/company";
import { buildWhatsAppUrl, WHATSAPP_DISPLAY, WHATSAPP_MESSAGES } from "@/components/ls/whatsapp";
const yairLogoUrl = "/learning-spaces/yair-logo.png";

const FOCUS_RING =
  "ls:focus-visible:outline-none ls:focus-visible:ring-2 ls:focus-visible:ring-brand-green ls:focus-visible:ring-offset-2 ls:focus-visible:ring-offset-background";

const linkClass = `inline-flex items-center gap-2 rounded-sm text-sm text-foreground/70 transition-colors hover:text-brand-green ${FOCUS_RING}`;

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="ls:font-display ls:text-xs ls:font-extrabold ls:tracking-wide ls:text-foreground/65">
      {children}
    </h2>
  );
}

/** Site footer. Shared by the landing page and every inner page. */
export function SiteFooter() {
  const { reducedMotion, toggle } = useReducedMotion();
  const motionLabel = reducedMotion ? "הפעל אנימציות" : "הפסק אנימציות";

  return (
    <footer className="ls:mt-16 ls:border-t ls:border-border ls:bg-card/40">
      <div className="ls:mx-auto ls:max-w-7xl ls:px-4 ls:py-12 ls:pb-28 ls:md:px-12 ls:md:py-14 ls:lg:px-16">
        <div className="ls:grid ls:gap-10 ls:md:grid-cols-[1.6fr_1fr_1fr] ls:md:gap-8">
          {/* Brand */}
          <div className="ls:max-w-sm">
            <div className="ls:flex ls:items-center ls:gap-3">
              <img
                src={yairLogoUrl}
                alt=""
                width={40}
                height={40}
                className="ls:h-10 ls:w-10 ls:shrink-0 ls:object-contain"
              />
              <span className="ls:font-display ls:text-base ls:font-extrabold ls:tracking-tight ls:text-foreground">
                פיתוח מרחבי למידה חכמים
              </span>
            </div>
            <p className="ls:mt-4 ls:text-sm ls:leading-relaxed ls:text-foreground/65">
              מתכננים ומקימים כיתות, מסדרונות ומרחבים משותפים אינטראקטיביים בבתי ספר יסודיים —
              מהתכנון ועד הגימור, בספק אחד.
            </p>
            <p className="ls:mt-4 ls:text-xs ls:leading-relaxed ls:text-foreground/65">
              {COMPANY_NAME} · ח.פ. {COMPANY_REG_NO}
            </p>
          </div>

          {/* Contact */}
          <nav aria-label="דרכי יצירת קשר">
            <ColumnHeading>יצירת קשר</ColumnHeading>
            <ul className="ls:mt-4 ls:space-y-3">
              <li>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.default)}
                  target="_blank"
                  rel="noreferrer"
                  className={`ls:inline-flex ls:items-center ls:gap-2 ls:rounded-sm ls:text-sm ls:font-bold ls:text-foreground ls:transition-colors ls:hover:text-brand-green ${FOCUS_RING}`}
                >
                  <span className="ls:text-brand-green" aria-hidden="true">
                    <WhatsAppIcon size={16} />
                  </span>
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className={linkClass}>
                  <Mail className="ls:h-4 ls:w-4 ls:shrink-0 ls:text-foreground/40" aria-hidden="true" />
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/yair_smart_office"
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  <Instagram className="ls:h-4 ls:w-4 ls:shrink-0 ls:text-foreground/40" aria-hidden="true" />
                  @yair_smart_office
                </a>
              </li>
              <li className="ls:flex ls:items-center ls:gap-2 ls:text-sm ls:text-foreground/70">
                <MapPin className="ls:h-4 ls:w-4 ls:shrink-0 ls:text-foreground/40" aria-hidden="true" />
                {COMPANY_ADDRESS}
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="מידע ומדיניות">
            <ColumnHeading>מידע ומדיניות</ColumnHeading>
            <ul className="ls:mt-4 ls:space-y-3">
              <li>
                <Link href="/privacy" className={linkClass}>
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>
                  תנאי שימוש
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className={linkClass}>
                  הצהרת נגישות
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="ls:mt-10 ls:flex ls:flex-col-reverse ls:items-center ls:gap-4 ls:border-t ls:border-border ls:pt-6 ls:sm:flex-row ls:sm:justify-between">
          <p className="ls:text-xs ls:text-foreground/65">
            © {new Date().getFullYear()} YAIR Smart Office · כל הזכויות שמורות.
          </p>
          <button
            type="button"
            onClick={toggle}
            aria-pressed={reducedMotion}
            title={motionLabel}
            className={`ls:inline-flex ls:items-center ls:gap-2 ls:rounded-full ls:border ls:border-border ls:bg-card ls:px-3 ls:py-1.5 ls:text-xs ls:font-medium ls:text-foreground/70 ls:transition-colors ls:hover:border-brand-green ls:hover:text-brand-green ${FOCUS_RING}`}
          >
            {reducedMotion ? (
              <ZapOff className="ls:h-3.5 ls:w-3.5" aria-hidden="true" />
            ) : (
              <Zap className="ls:h-3.5 ls:w-3.5" aria-hidden="true" />
            )}
            {motionLabel}
          </button>
        </div>
      </div>
    </footer>
  );
}
