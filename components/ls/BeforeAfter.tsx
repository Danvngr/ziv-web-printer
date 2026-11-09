"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
const beforeImg = "/learning-spaces/before.jpg";
const afterImg = "/learning-spaces/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  return (
    <div
      ref={ref}
      className="ls:relative ls:aspect-[16/9] ls:w-full ls:overflow-hidden ls:rounded-3xl ls:ring-1 ls:ring-border ls:shadow-xl ls:select-none ls:cursor-ew-resize ls:touch-none ls:bg-card"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => {
        dragging.current = true;
        updateFromClientX(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        if (dragging.current) {
          e.preventDefault();
          updateFromClientX(e.touches[0].clientX);
        }
      }}
      onTouchEnd={() => (dragging.current = false)}
      onTouchCancel={() => (dragging.current = false)}
    >
      <img
        src={afterImg}
        alt="אחרי - מרחב חכם וחי"
        className="ls:absolute ls:inset-0 ls:h-full ls:w-full ls:object-cover"
        loading="lazy"
      />
      <div
        className="ls:absolute ls:inset-0 ls:overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <img
          src={beforeImg}
          alt="לפני - חלל סטנדרטי"
          className="ls:absolute ls:inset-0 ls:h-full ls:w-full ls:object-cover"
          loading="lazy"
        />
      </div>

      <div className="ls:absolute ls:top-4 ls:right-4 ls:rounded-full ls:bg-foreground/90 ls:backdrop-blur ls:px-3 ls:py-1 ls:text-xs ls:font-bold ls:tracking-wide ls:text-background">
        לפני
      </div>
      <div className="ls:absolute ls:top-4 ls:left-4 ls:rounded-full ls:bg-brand-green ls:px-3 ls:py-1 ls:text-xs ls:font-bold ls:tracking-wide ls:text-primary-foreground ls:shadow">
        אחרי
      </div>

      <div
        className="ls:absolute ls:top-0 ls:bottom-0 ls:w-[3px] ls:bg-gradient-to-b ls:from-brand-green ls:to-brand-blue ls:shadow-[0_0_18px_color-mix(in_oklab,var(--brand-green)_45%,transparent)]"
        style={{ left: `${pos}%` }}
      >
        <div className="ls:absolute ls:top-1/2 ls:left-1/2 ls:-translate-x-1/2 ls:-translate-y-1/2 ls:grid ls:place-items-center ls:h-12 ls:w-12 ls:rounded-full ls:bg-card ls:border-2 ls:border-brand-green ls:shadow-lg">
          <MoveHorizontal className="ls:h-5 ls:w-5 ls:text-brand-green" />
        </div>
      </div>
    </div>
  );
}
