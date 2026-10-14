"use client";

import { useEffect, useState } from "react";
import { shouldSkipSplash, splashStorageKey } from "@/lib/splash-skip";

const FILL_MS = 2800;
const HOLD_MS = 350;
const FADE_MS = 700;
const LEAVE_MS = FILL_MS + HOLD_MS;

const WAVE_POINTS = 40;

function ease(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
}

function wavePolygon(level: number, phase: number) {
  const amp = 0.1;
  const pts: string[] = [];
  for (let i = 0; i <= WAVE_POINTS; i++) {
    const x = i / WAVE_POINTS;
    const y =
      level +
      amp * Math.sin((x * 2.15 + phase) * Math.PI * 2) +
      amp * 0.42 * Math.sin((x * 3.6 - phase * 1.35) * Math.PI * 2);
    const yc = Math.min(140, Math.max(-40, y * 100));
    pts.push(`${(x * 100).toFixed(2)}% ${yc.toFixed(2)}%`);
  }
  pts.push("100% 150%", "0% 150%");
  return `polygon(${pts.join(", ")})`;
}

function splashWaveFrames() {
  const frames = [`0% { clip-path: ${wavePolygon(1.2, 0)}; }`];
  const steps = 24;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const pct = (8 + ease(t) * 78).toFixed(2);
    const level = 1.2 + (-0.22 - 1.2) * ease(t);
    frames.push(`${pct}% { clip-path: ${wavePolygon(level, t * 1.8)}; }`);
  }
  frames.push(`100% { clip-path: ${wavePolygon(-0.22, 1.8)}; }`);
  return frames.join("\n");
}

const splashStyle = `
.splash .splash-fill {
  animation: splash-wave ${FILL_MS}ms linear forwards;
}
@keyframes splash-wave {
  ${splashWaveFrames()}
}
`;

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
      // sessionStorage can throw. CSS already hides a skipped splash; unmount on the next turn.
      queueMicrotask(() => setOn(false));
      return;
    }
    if (root.classList.contains("splash-skip") || shouldSkipSplash({ seen, reduce, motionStop })) {
      queueMicrotask(() => setOn(false));
      return;
    }
    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(splashStorageKey, "1");
      } catch {
        // A blocked store replays the splash on the next load.
      }
      setOn(false);
    }, LEAVE_MS + FADE_MS + 80);
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
      <style>{splashStyle}</style>
      <div className="splash-mark">
        <img src="/splash-fill.png" alt="" className="splash-fill" />
        <img src="/splash-outline.png" alt="" className="splash-outline" />
      </div>
    </div>
  );
}
