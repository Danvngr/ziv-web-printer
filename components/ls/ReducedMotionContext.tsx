"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "ls-reduced-motion";

const ReducedMotionContext = createContext<{
  reducedMotion: boolean;
  toggle: () => void;
}>({ reducedMotion: false, toggle: () => {} });

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    // sessionStorage and matchMedia are only available after mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReducedMotion(stored !== null ? stored === "true" : (mq?.matches ?? false));
    if (stored !== null) return;
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    mq?.addEventListener("change", onChange);
    return () => mq?.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("ls-reduced-motion", reducedMotion);
    return () => document.documentElement.classList.remove("ls-reduced-motion");
  }, [reducedMotion]);

  const toggle = () => {
    setReducedMotion((prev) => {
      const next = !prev;
      sessionStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  return (
    <ReducedMotionContext.Provider value={{ reducedMotion, toggle }}>{children}</ReducedMotionContext.Provider>
  );
}

export function useReducedMotion() {
  return useContext(ReducedMotionContext);
}
