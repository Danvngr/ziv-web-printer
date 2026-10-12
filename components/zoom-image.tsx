"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [broken, setBroken] = useState(!src);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      openRef.current?.focus();
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
        className="block w-full overflow-hidden rounded-3xl bg-wash"
        aria-label={`הגדלת התמונה: ${alt}`}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={450}
          unoptimized
          onError={() => setBroken(true)}
          className="aspect-video w-full object-cover"
        />
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4"
          onClick={() => {
            setOpen(false);
            openRef.current?.focus();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-full w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p id={titleId} className="sr-only">
              {alt}
            </p>
            <Image src={src} alt={alt} width={800} height={450} unoptimized className="max-h-[80vh] w-full object-contain" />
            <button
              ref={closeRef}
              type="button"
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 font-semibold text-ink"
              onClick={() => {
                setOpen(false);
                openRef.current?.focus();
              }}
            >
              סגירה
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
