import type { Metadata } from "next";
import { LearningExperience } from "@/components/ls/experience";
import { learningFaqItems } from "@/components/ls/faq-items";
import { absoluteUrl, site } from "@/data/site";

const path = site.learningSpacesPath;
const pageUrl = absoluteUrl(path);
const title = "יאיר Smart Office | מרחבי למידה חכמים לבתי ספר – אשדוד והדרום";
const description =
  "תכנון והקמת מרחבי למידה חכמים ואינטראקטיביים לבתי ספר יסודיים. מבוסס באשדוד, פועלים בכל הדרום והארץ. תכנון אדריכלי, גבס, מסכי מגע ואמנות חזותית. 40+ בתי ספר, אחריות מלאה.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "מרחבי למידה חכמים",
    "כיתה חכמה",
    "כיתות חכמות",
    "מסכי מגע לבתי ספר",
    "מסך אינטראקטיבי לכיתה",
    "עיצוב סביבות למידה",
    "סביבת למידה חדשנית",
    "אמנות חזותית לבתי ספר",
    "תכנון בית ספר",
    "מרחב למידה אשדוד",
    "כיתות חכמות אשדוד",
    "מרחבי למידה דרום",
    "בתי ספר באר שבע",
    "בתי ספר אשקלון",
    "בתי ספר קרית גת",
    "smart classrooms Israel",
    "interactive learning spaces",
    "אופק החדשה",
    "משרד החינוך",
    "חינוך יסודי",
    "חדשנות חינוכית",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    locale: "he_IL",
    type: "website",
    siteName: "YAIR Smart Office",
    url: pageUrl,
    title: "יאיר Smart Office | מרחבי למידה חכמים – אשדוד והדרום",
    description:
      "פתרון מלא למוסדות חינוך יסודיים: כיתות ומרחבי למידה חכמים. תכנון, תשתיות, מסכי מגע ואמנות חזותית. מבוסס באשדוד, פעילים בכל הדרום והארץ. 40+ בתי ספר.",
    images: [
      {
        url: "/learning-spaces/og-image.jpg",
        width: 1536,
        height: 1024,
        alt: "מרחב למידה חכם",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "יאיר Smart Office | מרחבי למידה חכמים – אשדוד",
    description:
      "תכנון והקמת מרחבי למידה חכמים לבתי ספר יסודיים בישראל. מבוסס באשדוד, פעילים בכל הדרום והארץ.",
    images: ["/learning-spaces/og-image.jpg"],
  },
};

export default function LearningSpacesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: pageUrl,
    mainEntity: learningFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LearningExperience />
    </>
  );
}
