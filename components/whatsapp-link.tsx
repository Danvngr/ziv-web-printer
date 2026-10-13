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

export function WhatsAppButton() {
  return (
    <WhatsAppLink
      label="וואטסאפ לשירות"
      className="group fixed bottom-4 left-2 z-30 inline-flex h-14 w-14 lg:bottom-5 lg:left-5 lg:h-16 lg:w-16"
    >
      <span className="wa-ping absolute inset-0 rounded-full" aria-hidden="true" />
      <span className="wa-btn relative grid h-full w-full place-items-center rounded-full transition-transform duration-200 group-hover:scale-110">
        <WhatsAppMark />
      </span>
    </WhatsAppLink>
  );
}

export function WhatsAppMark({ size = 28 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.077 4.928A9.97 9.97 0 0 0 12.012 2C6.487 2 1.989 6.498 1.987 12.022c0 1.766.461 3.49 1.34 5.01L1.9 22.061a.5.5 0 0 0 .614.613l5.155-1.395a9.98 9.98 0 0 0 4.34.994h.004c5.524 0 10.022-4.498 10.024-10.022a9.96 9.96 0 0 0-2.96-7.323M12.014 20.27h-.003a8.3 8.3 0 0 1-4.221-1.156l-.302-.18-3.124.819.835-3.045-.198-.314a8.26 8.26 0 0 1-1.27-4.413c.002-4.59 3.74-8.327 8.336-8.327a8.28 8.28 0 0 1 5.891 2.443 8.28 8.28 0 0 1 2.439 5.89c-.002 4.591-3.74 8.283-8.383 8.283m4.571-6.234c-.25-.125-1.482-.732-1.711-.815s-.397-.125-.563.125-.646.815-.793.982-.292.188-.541.063c-.25-.125-1.057-.39-2.014-1.244-.744-.664-1.247-1.485-1.393-1.734s-.016-.385.11-.51c.112-.111.25-.292.376-.438.125-.146.166-.25.25-.417.083-.166.041-.312-.021-.438s-.563-1.356-.771-1.856c-.203-.486-.41-.42-.563-.428a10 10 0 0 0-.479-.009.92.92 0 0 0-.667.312c-.229.25-.875.855-.875 2.085s.896 2.419 1.021 2.586 1.764 2.693 4.272 3.776c.597.258 1.063.413 1.426.529.6.19 1.146.164 1.578.099.481-.072 1.482-.606 1.69-1.191s.208-1.086.146-1.191c-.063-.104-.229-.166-.479-.292" />
    </svg>
  );
}

