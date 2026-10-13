"use client";

import { useEffect, useState } from "react";
import { shouldSkipSplash, splashStorageKey } from "@/lib/splash-skip";

export function Splash() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motionStop = root.getAttribute("data-a11y-motion") === "on";
    let seen: string | null = null;
    try {
      seen = sessionStorage.getItem(splashStorageKey);
    } catch {
      setOn(false);
      return;
    }
    if (root.classList.contains("splash-skip") || shouldSkipSplash({ seen, reduce, motionStop })) {
      setOn(false);
      return;
    }
    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(splashStorageKey, "1");
      } catch {
        // A blocked store replays the splash on the next load.
      }
      setOn(false);
    }, 2100);
    return () => window.clearTimeout(timer);
  }, []);

  if (!on) return null;

  return (
    <div
      className="splash"
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.animationName !== "splash-leave") return;
        try {
          sessionStorage.setItem(splashStorageKey, "1");
        } catch {
          // A blocked store replays the splash on the next load.
        }
        setOn(false);
      }}
    >
      <svg className="splash-filter" aria-hidden="true">
        <filter id="logo-outline" x="-4%" y="-8%" width="108%" height="116%" colorInterpolationFilters="sRGB">
          <feMorphology in="SourceAlpha" operator="dilate" radius="1.6" result="dilated" />
          <feComposite in="dilated" in2="SourceAlpha" operator="out" result="edge" />
          <feFlood floodColor="#001e44" result="ink" />
          <feComposite in="ink" in2="edge" operator="in" />
        </filter>
      </svg>
      <div className="splash-mark">
        <img src="/logo.png" alt="" className="splash-outline" />
        <img src="/logo.png" alt="" className="splash-color" />
      </div>
    </div>
  );
}
