import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "אודותינו",
};

export default function AboutPage() {
  return (
    <article className="mx-auto my-10 max-w-3xl rounded-3xl bg-white px-6 py-14 text-muted shadow-card sm:px-10 md:my-16">
      <h1 className="text-4xl font-bold text-ink md:text-5xl">אודותינו</h1>
      <div className="mt-6 space-y-4 leading-8">
        <p>
          זהו אתר הדרכה קצר של {site.name} למדפסות ולמכונות צילום. סורקים מדבקת QR אחת, מחפשים
          את הדגם, ובוחרים הוצאת מונה או החלפת טונר.
        </p>
        <p>
          האתר אינו מערכת קריאות שירות ואינו דורש הרשמה. הדגמים שמופיעים כרגע הם תוכן לדוגמה, לא
          הוראות מאומתות.
        </p>
        <p>
          מפעיל האתר: [שם העוסק]. מספר עוסק: [מספר עוסק]. האתר אינו קשור ליצרני המדפסות, אלא אם
          צוין אחרת במפורש.
        </p>
      </div>
    </article>
  );
}
