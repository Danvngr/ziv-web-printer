"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const focusable = "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])";

export function ZoomImage({
  src,
  alt,
  width = 800,
  height = 450,
  label,
  triggerClassName = "block w-full overflow-hidden rounded-3xl bg-wash",
  imageClassName = "aspect-video w-full object-cover",
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  label?: string;
  triggerClassName?: string;
  imageClassName?: string;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [broken, setBroken] = useState(!src);

  function close() {
    setOpen(false);
    openRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        openRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const items = [...dialog.querySelectorAll<HTMLElement>(focusable)].filter(
        (el) => !el.hasAttribute("disabled"),
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (broken) {
    return (
      <p className="flex aspect-video items-center justify-center rounded-3xl bg-wash px-4 text-center text-muted">
        התמונה חסרה
      </p>
    );
  }

  return (
    <>
      <button
        ref={openRef}
        type="button"
        className={triggerClassName}
        aria-label={label ?? (alt ? `הגדלת התמונה: ${alt}` : "תמונה מוגדלת")}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized
          onError={() => setBroken(true)}
          className={imageClassName}
        />
      </button>
      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/80 p-4"
              onClick={close}
            >
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="תמונה מוגדלת"
                className="max-h-full w-full max-w-3xl"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  unoptimized
                  className="max-h-[80vh] w-full object-contain"
                />
                <button
                  ref={closeRef}
                  type="button"
                  className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 font-semibold text-ink"
                  onClick={close}
                >
                  סגירה
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
