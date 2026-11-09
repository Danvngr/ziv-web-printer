// פרטי החברה והקשר במקום אחד, כדי להחליף אותם בלי לגעת בעמודים.

export const site = {
  url: "https://www.yso.co.il",
  name: "YAIR SMART OFFICE LTD",
  hebrewName: "יאיר סמארט אופיס בע״מ",
  homeTitle: "איך אפשר לעזור עם המדפסת?",
  whatsappE164: "972585554901",
  whatsappDisplay: "058-555-4901",
  instagram: "yair_smart_office",
  instagramHref: "https://instagram.com/yair_smart_office",
  address: "הבנאים 9 אשדוד",
  hours: "ימים א׳–ה׳ 09:00–16:00",
  regNo: "516121720",
  email: "office@smartcopy.co.il",
  contactPerson: "זיו סרויה",
  learningSpacesPath: "/solutions/learning-spaces",
} as const;

export const counterWhatsappText = "שם מוסד:\nמספר מכונה:\n*נא לצרף תמונה של המונה*";

export const learningSpacesWhatsappText =
  "שלום, הגעתי דרך האתר ואשמח לקבל פרטים על מרחבי הלמידה החכמים.";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? site.url : `${site.url}${normalized}`;
}

export const ogImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 800,
  alt: site.hebrewName,
} as const;

// Child openGraph replaces the layout object, so the image has to travel with the URL.
export function pageShare(path: string) {
  return {
    alternates: { canonical: path },
    openGraph: { url: path, images: [ogImage] },
  };
}

export function whatsappHref(text?: string): string | null {
  if (!site.whatsappE164) return null;
  const base = `https://wa.me/${site.whatsappE164}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
