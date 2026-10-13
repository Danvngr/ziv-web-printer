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
    }, 2800);
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
      <div className="splash-mark">
        <img src="/splash-fill.png" alt="" className="splash-fill" />
        <img src="/splash-outline.png" alt="" className="splash-outline" />
      </div>
    </div>
  );
}
