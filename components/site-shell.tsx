"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-link";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="a11y-canvas flex min-h-screen min-w-0 flex-col text-ink">
        <SiteHeader pathname={pathname} />
        <main id="main-content" tabIndex={-1} className="min-w-0 flex-1">
          {children}
        </main>
        <SiteFooter />
      </div>
      <WhatsAppButton />
    </>
  );
}
