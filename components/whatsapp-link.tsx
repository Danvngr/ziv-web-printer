import { whatsappHref } from "@/data/site";

export function WhatsAppLink({
  text,
  className,
  label,
  children,
}: {
  text?: string;
  className: string;
  label?: string;
  children: React.ReactNode;
}) {
  const href = whatsappHref(text);
  if (!href) {
    return (
      <p className="text-sm leading-6 text-muted" role="status">
        לא הצלחנו לפתוח את הוואטסאפ. מספר המשרד עדיין לא הוגדר.
      </p>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
      {children}
    </a>
  );
}

export function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 4.2a7.8 7.8 0 0 0-6.6 12L4.4 19.8l3.7-1A7.8 7.8 0 1 0 12 4.2Z" />
      <path d="M9 9.3c.3.8 1.2 2.2 1.5 2.6.2.3.2.5 0 .7-.3.4 1.2 1.6 2.6 2.4.6.3 1 .2 1.3-.1.4-.4 1-1.2 1.2-1.4" />
    </svg>
  );
}

