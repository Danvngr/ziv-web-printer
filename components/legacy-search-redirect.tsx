"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// ponytail: only old /#search bookmarks. The guides hub now lives at /guides.
export function LegacySearchRedirect() {
  const router = useRouter();
  useEffect(() => {
    if (window.location.hash === "#search") router.replace("/guides");
  }, [router]);
  return null;
}
