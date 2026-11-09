"use client";

/**
 * Soft ambient wash layered over the animated body gradient.
 *
 * Mounted once in the root shell, OUTSIDE .a11y-filter-root: it is
 * position:fixed, and a filtered ancestor would re-anchor it to the document
 * instead of the viewport. It carries .a11y-ambient so the accessibility
 * colour modes still filter it directly.
 */
export function AmbientBlobs() {
  return (
    <div className="a11y-ambient ls:pointer-events-none ls:fixed ls:inset-0 ls:-z-10" aria-hidden="true">
      <div className="ls:absolute ls:-top-32 ls:right-1/4 ls:h-[520px] ls:w-[520px] ls:rounded-full ls:bg-pastel-mint/30 ls:blur-[120px]" />
      <div className="ls:absolute ls:bottom-0 ls:left-1/4 ls:h-[520px] ls:w-[520px] ls:rounded-full ls:bg-pastel-sky/30 ls:blur-[120px]" />
    </div>
  );
}
