// WhatsApp contact helper — number lives in one place.
// Format: international, no leading 0, no '+', no spaces/dashes.
export const WHATSAPP_NUMBER = "972585554901";
export const WHATSAPP_DISPLAY = "058-555-4901";
export const WHATSAPP_TEL = "+972585554901";

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  default: "שלום, הגעתי דרך האתר ואשמח לקבל פרטים על מרחבי הלמידה החכמים.",
  consult: "שלום, הגעתי דרך האתר ואשמח לקבל פרטים על מרחבי הלמידה החכמים.",
  values: "שלום, הגעתי דרך האתר ואשמח לקבל פרטים על מרחבי הלמידה החכמים.",
  beforeAfter: "שלום, הגעתי דרך האתר ואשמח לקבל פרטים על מרחבי הלמידה החכמים.",
  process: "שלום, הגעתי דרך האתר ואשמח לקבל פרטים על מרחבי הלמידה החכמים.",
  hotspots: "שלום, הגעתי דרך האתר ואשמח לקבל פרטים על מרחבי הלמידה החכמים.",
  gallery: "שלום, הגעתי דרך האתר ואשמח לקבל פרטים על מרחבי הלמידה החכמים.",
  faq: "שלום, הגעתי דרך האתר ואשמח לקבל פרטים על מרחבי הלמידה החכמים.",
} as const;

export const SERVICE_LIST = [
  "🎓 כיתות חכמות ומרחבי למידה",
  "💡 פתרונות טכנולוגיים לחינוך ועסקים",
  "💻 מחשוב, שירות ותחזוקה",
  "🛜 רשתות ותקשורת",
  "📹 אבטחה ובקרה",
  "📢 כריזה והגברה",
  "🖨️ הדפסה וצילום",
] as const;
