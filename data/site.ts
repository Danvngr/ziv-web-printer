// מספר הוואטסאפ והמיתוג במקום אחד, כדי להחליף אותם בלי לגעת בעמודים.
// המספר הוא המספר הציבורי מאתר yso.co.il. לאשר אותו לפני הדפסת מדבקות.

export const site = {
  name: "YAIR Smart Office",
  homeTitle: "איך אפשר לעזור עם המדפסת?",
  whatsappE164: "972585554901",
  whatsappDisplay: "058-555-4901",
} as const;

export const counterWhatsappText =
  "שלום, אני שולח/ת צילום מונה. מספר מכונה פנימי: [יש לרשום כאן]. מצורפת תמונת המונה.";

export function whatsappHref(text?: string): string | null {
  if (!site.whatsappE164) return null;
  const base = `https://wa.me/${site.whatsappE164}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}
