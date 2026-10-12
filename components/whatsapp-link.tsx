import { whatsappHref } from "@/data/site";

export function WhatsAppLink({
  text,
  className,
  children,
}: {
  text?: string;
  className: string;
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
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function WhatsAppFab() {
  return (
    <div className="fixed end-1 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40">
      <WhatsAppLink className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-s-2xl bg-action px-2 py-3 text-sm font-semibold text-ink shadow-card hover:bg-action-hover [writing-mode:vertical-rl]">
        וואטסאפ
      </WhatsAppLink>
    </div>
  );
}

