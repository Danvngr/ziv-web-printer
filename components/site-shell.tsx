"use client";

import { usePathname } from "next/navigation";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-link";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="a11y-canvas flex min-h-screen flex-col bg-page pe-16 pb-8 text-ink">
        <SiteHeader pathname={pathname} />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <SiteFooter pathname={pathname} />
      </div>
      <AccessibilityMenu />
      <WhatsAppFab />
    </>
  );
}
