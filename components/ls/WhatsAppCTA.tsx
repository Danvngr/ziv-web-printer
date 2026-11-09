"use client";

import { WhatsAppIcon } from "@/components/ls/icons/WhatsAppIcon";
import { buildWhatsAppUrl } from "@/components/ls/whatsapp";

type Props = {
  message?: string;
  label?: string;
  caption?: string;
  variant?: "solid" | "outline" | "soft";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
};

const variantClasses = {
  solid:
    "ls:bg-brand-green ls:text-primary-foreground ls:shadow-lg ls:shadow-brand-green/20 ls:hover:bg-brand-green/90 ls:hover:shadow-xl",
  outline:
    "ls:border-2 ls:border-brand-green ls:text-brand-green ls:bg-card ls:hover:bg-brand-green ls:hover:text-primary-foreground",
  soft: "ls:bg-pastel-mint ls:text-brand-navy ls:hover:bg-brand-green ls:hover:text-primary-foreground",
} as const;

const sizeClasses = {
  sm: "ls:px-4 ls:py-2 ls:text-sm ls:rounded-xl ls:gap-2",
  md: "ls:px-5 ls:py-3 ls:text-base ls:rounded-2xl ls:gap-2",
  lg: "ls:px-7 ls:py-4 ls:text-lg ls:rounded-3xl ls:gap-2.5",
} as const;

export function WhatsAppCTA({
  message,
  label = "דברו איתנו בוואטסאפ",
  caption,
  variant = "solid",
  size = "md",
  className = "",
  fullWidth = false,
}: Props) {
  const inner = (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={`ls:inline-flex ls:items-center ls:justify-center ls:font-bold ls:transition-all ls:duration-200 ls:hover:-translate-y-0.5 ${
        variantClasses[variant]
      } ${sizeClasses[size]} ${fullWidth ? "ls:w-full" : ""} ${className}`}
    >
      <WhatsAppIcon size={size === "lg" ? 22 : size === "sm" ? 16 : 18} />
      {label}
    </a>
  );

  if (!caption) return inner;

  return (
    <div className="ls:mt-8 ls:flex ls:flex-col ls:items-center ls:gap-3 ls:text-center ls:sm:flex-row ls:sm:justify-center ls:sm:gap-5">
      <p className="ls:text-sm ls:sm:text-base ls:font-semibold ls:text-foreground/75">{caption}</p>
      {inner}
    </div>
  );
}
