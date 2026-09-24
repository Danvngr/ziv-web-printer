import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: {
    default: "PrinterGuides",
    template: "%s | PrinterGuides",
  },
  description: "סרקו את ה-QR שעל המדפסת שלכם, או חפשו את הדגם",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.className} ${heebo.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a href="#main-content" className="skip-link">
          דלגו לתוכן הראשי
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
