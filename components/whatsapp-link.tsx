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

export function WhatsAppFab() {
  return (
    <WhatsAppLink
      label="וואטסאפ לשירות"
      className="fixed end-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-action text-ink shadow-card hover:bg-action-hover"
    >
      <WhatsAppMark />
    </WhatsAppLink>
  );
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.05c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.63-.61-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.28.64-.41 1.02-.41.13 0 .24 0 .35.01.31.01.47.03.68.52.24.58.83 2 .9 2.15.07.14.12.32.02.51-.1.19-.14.31-.28.48-.14.16-.29.36-.41.49-.14.14-.28.28-.12.55.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.26.13.42.11.57-.07.16-.17.67-.78.85-1.05.19-.26.37-.22.62-.13.26.1 1.62.76 1.9.9.28.14.46.21.53.32.07.12.07.68-.17 1.36Z"
      />
    </svg>
  );
}

