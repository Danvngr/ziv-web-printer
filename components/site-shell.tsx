"use client";

import { usePathname } from "next/navigation";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const homeBackground =
  "a11y-canvas flex min-h-screen flex-col bg-[linear-gradient(180deg,#0f4f5e_0%,#0e4560_34%,#0d3554_66%,#0b2138_100%)] pe-16 text-white";

const pageBackground = "a11y-canvas flex min-h-screen flex-col bg-gray-50 pe-16 text-slate-900";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <>
      <div className={home ? homeBackground : pageBackground}>
        <SiteHeader pathname={pathname} />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter pathname={pathname} />
      </div>
      <AccessibilityMenu />
    </>
  );
}
