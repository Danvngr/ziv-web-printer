"use client";

import { usePathname } from "next/navigation";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="a11y-canvas flex min-h-screen flex-col text-ink">
        <SiteHeader pathname={pathname} />
        <div className="flex flex-1 flex-col px-14">
          <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-5xl flex-1">
            {children}
          </main>
        </div>
        <SiteFooter pathname={pathname} />
      </div>
      <AccessibilityMenu />
    </>
  );
}
