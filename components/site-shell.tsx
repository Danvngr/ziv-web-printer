"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const homeBackground =
  "flex min-h-screen flex-col bg-[linear-gradient(180deg,#0f4f5e_0%,#0e4560_34%,#0d3554_66%,#0b2138_100%)] text-white";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <div className={home ? homeBackground : "flex min-h-screen flex-col bg-gray-50 text-slate-900"}>
      <SiteHeader pathname={pathname} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
