"use client";

/**
 * Playful pastel 3D shapes that float behind sections.
 * Pure CSS transforms — no JS, no images. Decorative only (aria-hidden).
 *
 * Mobile: a curated subset (~3-4 shapes per section) renders on small
 * screens so the page still feels alive. Extra shapes use `hidden sm:block`
 * to keep the GPU layer count low on phones.
 * All animated shapes set `will-change: transform` so the browser keeps
 * them on their own compositor layer. Respects prefers-reduced-motion.
 */
type Variant = "hero" | "values" | "process" | "gallery" | "contact" | "sparse";

const WILL_CHANGE: React.CSSProperties = { willChange: "transform" };

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/components/ls/ReducedMotionContext";

/**
 * Lightweight parallax tilt: listens to pointer/touch position and device
 * orientation, smooths the target with a single rAF loop, and writes a CSS
 * transform on the returned ref. No re-renders, no per-shape JS.
 * Automatically disables when reduced-motion is preferred (system or manual).
 */
function useParallaxTilt(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useReducedMotion();

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;
    if (reducedMotion) return;

    // target & current values in normalized [-1, 1]
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    let raf = 0;
    let running = true;

    const loop = () => {
      if (!running) return;
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      const el = ref.current;
      if (el) {
        // small rotation + translate for depth feel
        el.style.transform = `translate3d(${cx * 12}px, ${cy * 12}px, 0) rotateX(${-cy * 6}deg) rotateY(${cx * 8}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onPointer = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      tx = (t.clientX / window.innerWidth) * 2 - 1;
      ty = (t.clientY / window.innerHeight) * 2 - 1;
    };
    const onOrient = (e: DeviceOrientationEvent) => {
      // gamma: left/right [-90, 90], beta: front/back [-180, 180]
      if (e.gamma == null || e.beta == null) return;
      tx = Math.max(-1, Math.min(1, e.gamma / 35));
      ty = Math.max(-1, Math.min(1, (e.beta - 45) / 45));
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("deviceorientation", onOrient);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("deviceorientation", onOrient);
    };
  }, [enabled, reducedMotion]);
  return ref;
}

export function FloatingShapes({ variant = "hero" }: { variant?: Variant }) {
  const tiltRef = useParallaxTilt(variant === "hero");
  return (
    <div
      aria-hidden
      className="ls:pointer-events-none ls:absolute ls:inset-0 ls:overflow-hidden ls:[perspective:1200px]"
    >
      {variant === "hero" && (
        <div
          ref={tiltRef}
          className="ls:absolute ls:inset-0 ls:[transform-style:preserve-3d]"
          style={{ willChange: "transform", transition: "transform 60ms linear" }}
        >
          {/* mobile keepers */}
          <Sphere
            className="ls:bottom-[14%] ls:left-[4%] ls:h-12 ls:w-12 ls:sm:h-16 ls:sm:w-16"
            from="ls:from-pastel-mint"
            to="ls:to-brand-green/50"
          />
          <Cube
            className="ls:top-[6%] ls:right-[5%] ls:h-14 ls:w-14 ls:sm:h-20 ls:sm:w-20"
            face="ls:bg-pastel-butter"
            back="ls:bg-brand-green/20"
            tilt="ls:[transform:rotateX(35deg)_rotateY(-25deg)]"
          />
          <Star
            className="ls:bottom-[6%] ls:right-[10%] ls:h-10 ls:w-10 ls:sm:h-16 ls:sm:w-16 ls:bg-pastel-lilac"
            delay=".6s"
          />
          <Ring
            className="ls:top-[38%] ls:left-[8%] ls:h-10 ls:w-10 ls:sm:h-14 ls:sm:w-14 ls:border-pastel-pink/80"
            delay=".2s"
          />
          {/* sm+ only */}
          <Tile className="ls:hidden ls:sm:block ls:top-[18%] ls:left-[44%] ls:sm:h-12 ls:sm:w-12 ls:bg-pastel-sky" />
        </div>
      )}

      {variant === "values" && (
        <>
          <Cube
            className="ls:top-[10%] ls:left-[3%] ls:h-12 ls:w-12 ls:sm:h-16 ls:sm:w-16"
            face="ls:bg-pastel-sky"
            back="ls:bg-brand-blue/25"
            tilt="ls:[transform:rotateX(-25deg)_rotateY(30deg)]"
            delay=".3s"
          />
          <Sphere
            className="ls:bottom-[10%] ls:right-[5%] ls:h-11 ls:w-11 ls:sm:h-14 ls:sm:w-14"
            from="ls:from-pastel-pink"
            to="ls:to-pastel-lilac"
            delay=".8s"
          />
          <Ring className="ls:top-[50%] ls:right-[18%] ls:h-9 ls:w-9 ls:sm:h-12 ls:sm:w-12 ls:border-brand-green/50" />
          <Tile
            className="ls:hidden ls:sm:block ls:bottom-[20%] ls:left-[18%] ls:sm:h-10 ls:sm:w-10 ls:bg-pastel-butter"
            delay="1.1s"
          />
        </>
      )}

      {variant === "process" && (
        <>
          <Sphere
            className="ls:top-[38%] ls:left-[2%] ls:h-10 ls:w-10 ls:sm:h-14 ls:sm:w-14"
            from="ls:from-pastel-butter"
            to="ls:to-pastel-pink"
            delay=".5s"
          />
          <Pyramid className="ls:top-[6%] ls:right-[6%] ls:h-14 ls:w-14 ls:sm:h-20 ls:sm:w-20 ls:bg-pastel-mint" />
          <Star
            className="ls:bottom-[8%] ls:right-[8%] ls:h-10 ls:w-10 ls:sm:h-12 ls:sm:w-12 ls:bg-pastel-sky"
            delay=".2s"
          />
          <Ring
            className="ls:hidden ls:sm:block ls:bottom-[12%] ls:right-[4%] ls:sm:h-16 ls:sm:w-16 ls:border-brand-blue/40"
            delay=".9s"
          />
          <Tile className="ls:hidden ls:sm:block ls:bottom-[8%] ls:left-[12%] ls:sm:h-12 ls:sm:w-12 ls:bg-pastel-lilac" />
        </>
      )}

      {variant === "gallery" && (
        <>
          <Star
            className="ls:top-[55%] ls:right-[6%] ls:h-10 ls:w-10 ls:sm:h-12 ls:sm:w-12 ls:bg-pastel-pink"
            delay=".4s"
          />
          <Sphere
            className="ls:top-[6%] ls:right-[4%] ls:h-12 ls:w-12 ls:sm:h-16 ls:sm:w-16"
            from="ls:from-pastel-mint"
            to="ls:to-pastel-sky"
          />
          <Ring
            className="ls:bottom-[10%] ls:left-[5%] ls:h-11 ls:w-11 ls:sm:h-14 ls:sm:w-14 ls:border-pastel-butter"
            delay=".7s"
          />
          <Cube
            className="ls:hidden ls:sm:block ls:bottom-[20%] ls:right-[28%] ls:sm:h-12 ls:sm:w-12"
            face="ls:bg-pastel-lilac"
            back="ls:bg-brand-blue/20"
            tilt="ls:[transform:rotateX(25deg)_rotateY(-15deg)]"
            delay="1s"
          />
        </>
      )}

      {variant === "contact" && (
        <>
          <Sphere
            className="ls:top-[10%] ls:left-[5%] ls:h-14 ls:w-14 ls:sm:h-20 ls:sm:w-20"
            from="ls:from-brand-green/50"
            to="ls:to-pastel-mint"
          />
          <Star
            className="ls:top-[16%] ls:right-[6%] ls:h-11 ls:w-11 ls:sm:h-14 ls:sm:w-14 ls:bg-pastel-butter"
            delay=".5s"
          />
          <Ring
            className="ls:bottom-[14%] ls:left-[12%] ls:h-10 ls:w-10 ls:sm:h-12 ls:sm:w-12 ls:border-pastel-pink"
            delay=".2s"
          />
          <Tile
            className="ls:hidden ls:sm:block ls:bottom-[12%] ls:right-[10%] ls:sm:h-12 ls:sm:w-12 ls:bg-pastel-sky"
            delay=".9s"
          />
        </>
      )}

      {variant === "sparse" && (
        <>
          <Ring className="ls:top-[18%] ls:right-[5%] ls:h-10 ls:w-10 ls:sm:h-12 ls:sm:w-12 ls:border-brand-green/40" />
          <Sphere
            className="ls:bottom-[18%] ls:left-[5%] ls:h-11 ls:w-11 ls:sm:h-14 ls:sm:w-14"
            from="ls:from-pastel-lilac"
            to="ls:to-pastel-pink"
            delay=".6s"
          />
        </>
      )}
    </div>
  );
}

/* ---------- atomic shapes ---------- */

function Cube({
  className,
  face,
  back,
  tilt,
  delay,
}: {
  className: string;
  face: string;
  back: string;
  tilt: string;
  delay?: string;
}) {
  return (
    <div
      className={`ls:absolute ls:animate-float-slow ls:[transform-style:preserve-3d] ${tilt} ${className}`}
      style={{ ...WILL_CHANGE, ...(delay ? { animationDelay: delay } : {}) }}
    >
      <div
        className={`ls:absolute ls:inset-0 ls:rounded-2xl ${face} ls:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)]`}
      />
      <div className={`ls:absolute ls:inset-0 ls:rounded-2xl ${back} ls:[transform:translateZ(-14px)]`} />
    </div>
  );
}

function Sphere({
  className,
  from,
  to,
  delay,
}: {
  className: string;
  from: string;
  to: string;
  delay?: string;
}) {
  return (
    <div
      className={`ls:absolute ls:rounded-full ls:bg-gradient-to-br ${from} ${to} ls:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.25)] ls:animate-float-rotate ${className}`}
      style={{ ...WILL_CHANGE, ...(delay ? { animationDelay: delay } : {}) }}
    />
  );
}

function Ring({ className, delay }: { className: string; delay?: string }) {
  return (
    <div
      className={`ls:absolute ls:rounded-full ls:border-[6px] ls:animate-drift-x ${className}`}
      style={{ ...WILL_CHANGE, ...(delay ? { animationDelay: delay } : {}) }}
    />
  );
}

function Tile({ className, delay }: { className: string; delay?: string }) {
  return (
    <div
      className={`ls:absolute ls:rounded-xl ls:shadow-md ls:animate-spin-slow ${className}`}
      style={{ ...WILL_CHANGE, ...(delay ? { animationDelay: delay } : {}) }}
    />
  );
}

function Star({ className, delay }: { className: string; delay?: string }) {
  return (
    <div
      className={`ls:absolute ls:animate-float-rotate ${className}`}
      style={{
        ...WILL_CHANGE,
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        ...(delay ? { animationDelay: delay } : {}),
      }}
    />
  );
}

function Pyramid({ className }: { className: string }) {
  return (
    <div
      className={`ls:absolute ls:animate-wiggle ${className}`}
      style={{ ...WILL_CHANGE, clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
    />
  );
}
