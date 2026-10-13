// מספר הוואטסאפ והמיתוג במקום אחד, כדי להחליף אותם בלי לגעת בעמודים.
// המספר הוא המספר הציבורי מאתר yso.co.il. לאשר אותו לפני הדפסת מדבקות.

export const site = {
  name: "YAIR SMART OFFICE LTD",
  hebrewName: "יאיר סמארט אופיס בע״מ",
  homeTitle: "איך אפשר לעזור עם המדפסת?",
  whatsappE164: "972585554901",
  whatsappDisplay: "058-555-4901",
  instagram: "yair_smart_office",
  instagramHref: "https://instagram.com/yair_smart_office",
} as const;

export const counterWhatsappText = "שם מוסד:\nמספר מכונה:\n*נא לצרף תמונה של המונה*";

export function whatsappHref(text?: string): string | null {
  if (!site.whatsappE164) return null;
  const base = `https://wa.me/${site.whatsappE164}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
