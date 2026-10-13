import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הדמיית לוגו",
};

export default function LogoPreviewPage() {
  return (
    <section className="flex flex-col items-center px-3 py-10 text-center sm:py-16">
      <div className="logo-preview-mark">
        <img src="/splash-fill.png" alt="" className="logo-preview-fill" />
        <img src="/splash-outline.png" alt="" className="logo-preview-outline" />
      </div>
      <p className="mt-6 text-lg font-medium text-ink">זו הדמיה בלבד</p>
    </section>
  );
}
