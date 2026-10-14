import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import { Splash } from "@/components/splash";
import { site } from "@/data/site";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heebo",
});

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "900"],
  variable: "--font-rubik",
});

const splashBoot = `(function(){try{var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;var seen=sessionStorage.getItem("yair-splash")==="1";var raw=localStorage.getItem("a11y-prefs");var stop=!!(raw&&JSON.parse(raw).motion===true);if(reduce||seen||stop)document.documentElement.classList.add("splash-skip");}catch(e){document.documentElement.classList.add("splash-skip");}})();`;

const metadataBase = new URL(
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://127.0.0.1:43123",
);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: site.hebrewName,
    template: `%s | ${site.name}`,
  },
  description:
    "YSO – Yair Smart Office. פתרונות מחשוב, תקשורת, אבטחה, מרחבי למידה ושירות טכנולוגי למוסדות חינוך ולעסקים.",
  openGraph: {
    locale: "he_IL",
    type: "website",
    siteName: site.name,
    title: site.hebrewName,
    description:
      "פתרונות מחשוב, תקשורת, אבטחה, מרחבי למידה ושירות טכנולוגי למוסדות חינוך ולעסקים.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.className} ${heebo.variable} ${rubik.variable} h-full antialiased`}>
      <body className="min-h-full">
        <script dangerouslySetInnerHTML={{ __html: splashBoot }} />
        <Splash />
        <a href="#main-content" className="skip-link">
          דלגו לתוכן הראשי
        </a>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
