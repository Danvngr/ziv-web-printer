import { HomeGuides } from "@/components/home-guides";
import { printers } from "@/data/printers";

export default function HomePage() {
  return (
    <section className="bg-[linear-gradient(180deg,#eaf3f8_0%,#f9fcff_42%)] px-4 pb-24 pt-16 text-center md:pt-24">
      <h1 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">המדריכים שלכם לכל מדפסת</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-muted md:text-xl">
        סרקו את ה-QR שעל המדפסת שלכם, או חפשו את הדגם
      </p>
      <HomeGuides printers={printers} />
    </section>
  );
}
