"use client";

import { Heebo, Rubik } from "next/font/google";
import { useLayoutEffect } from "react";
import { AccessibilityWidget } from "@/components/ls/a11y/AccessibilityWidget";
import { clearLsA11y } from "@/components/ls/a11y/a11y-prefs";
import { AmbientBlobs } from "@/components/ls/AmbientBlobs";
import { LearningLanding } from "@/components/ls/LearningLanding";
import { ReducedMotionProvider } from "@/components/ls/ReducedMotionContext";
import { WhatsAppFloat } from "@/components/ls/WhatsAppFloat";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--ls-font-heebo",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--ls-font-rubik",
  display: "swap",
});

const generalAttrs = [
  "data-a11y-text",
  "data-a11y-font",
  "data-a11y-links",
  "data-a11y-contrast",
  "data-a11y-grayscale",
  "data-a11y-motion",
];

export function LearningExperience() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const saved = generalAttrs.map((name) => [name, root.getAttribute(name)] as const);
    for (const [name] of saved) root.removeAttribute(name);
    root.setAttribute("data-ls-page", "");
    root.classList.add("splash-skip", "ls-fonts", heebo.variable, rubik.variable);
    return () => {
      root.classList.remove("ls-fonts", heebo.variable, rubik.variable);
      root.removeAttribute("data-ls-page");
      clearLsA11y();
      for (const [name, value] of saved) {
        if (value) root.setAttribute(name, value);
      }
    };
  }, []);

  return (
    <ReducedMotionProvider>
      <div className={`${heebo.variable} ${rubik.variable} ls-page`}>
        <a href="#main-content" className="a11y-skip-link">
          דלג לתוכן הראשי
        </a>
        <div className="a11y-filter-root">
          <LearningLanding />
        </div>
        <AmbientBlobs />
        <WhatsAppFloat />
        <AccessibilityWidget />
      </div>
    </ReducedMotionProvider>
  );
}
