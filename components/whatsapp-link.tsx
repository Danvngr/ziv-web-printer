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
      className="fixed end-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card hover:bg-[#1ebe5a]"
    >
      <WhatsAppMark />
    </WhatsAppLink>
  );
}

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M12 3.1a8.9 8.9 0 0 0-7.6 13.4L3.2 20.8l4.4-1.15A8.9 8.9 0 1 0 12 3.1Zm0 1.8a7.1 7.1 0 1 1-3.6 13.15l-.3-.17-2.55.67.68-2.5-.18-.3A7.1 7.1 0 0 1 12 4.9Z"
      />
      <path
        fill="#fff"
        d="M9.05 8.55c.12.28.7 1.55.82 1.72.12.16.12.32.02.48-.1.16-.22.32-.36.5-.14.16-.3.36-.14.68.16.32.74 1.2 1.58 1.94.86.74 1.58.96 1.9 1.06.32.1.5.08.68-.12.18-.2.72-.84.9-1.12.18-.28.36-.22.6-.14.24.1 1.52.72 1.78.84.26.14.44.2.5.3.08.1.08.6-.14 1.16-.22.56-1.18 1.08-1.64 1.14-.42.06-.96.1-1.56-.08-.36-.12-.84-.28-1.44-.54-2.48-1.08-4.1-3.58-4.24-3.76-.14-.18-1.04-1.38-1.04-2.64 0-1.24.64-1.86.88-2.12.22-.24.5-.3.66-.3.16 0 .32 0 .46.02.36.02.46.16.62.54Z"
      />
    </svg>
  );
}

