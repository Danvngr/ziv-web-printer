import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "יצירת קשר",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 text-slate-800">
      <h1 className="text-3xl font-bold text-slate-900">יצירת קשר</h1>
      <p className="mt-6 leading-8">
        לשאלות על המדריכים אפשר לפנות בשעות הפעילות, ראשון עד חמישי, בין 9:00 ל-17:00.
        אין באתר טופס. הפנייה היא בטלפון או בדוא״ל בלבד.
      </p>
      <address className="mt-6 space-y-2 not-italic leading-8">
        <p>כתובת: רחוב הדפוס 18, תל אביב-יפו</p>
        <p>
          טלפון: <a href="tel:+97235550142">03-555-0142</a>
        </p>
        <p>
          דוא״ל: <a href="mailto:hello@printerguides.example">hello@printerguides.example</a>
        </p>
      </address>
    </article>
  );
}
