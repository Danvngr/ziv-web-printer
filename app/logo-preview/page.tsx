import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הדמיית לוגו",
};

export default function LogoPreviewPage() {
  return (
    <section className="flex flex-col items-center px-3 py-10 text-center sm:py-16">
      <div className="logo-preview-mark">
        <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
          <filter id="logo-preview-outline" x="-4%" y="-8%" width="108%" height="116%" colorInterpolationFilters="sRGB">
            <feMorphology in="SourceAlpha" operator="dilate" radius="2.2" result="dilated" />
            <feComposite in="dilated" in2="SourceAlpha" operator="out" result="edge" />
            <feFlood floodColor="#001e44" result="ink" />
            <feComposite in="ink" in2="edge" operator="in" />
          </filter>
        </svg>
        <img src="/logo.png" alt="" className="logo-preview-outline" />
        <img src="/logo.png" alt="" className="logo-preview-color" />
      </div>
      <p className="mt-6 text-lg font-medium text-ink">זו הדמיה בלבד</p>
    </section>
  );
}
