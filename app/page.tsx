import { HomeGuides } from "@/components/home-guides";
import { printers } from "@/data/printers";

export default function HomePage() {
  return (
    <section className="px-4 pb-20 pt-14 text-center">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">המדריכים שלכם לכל מדפסת</h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 md:text-xl">
        סרקו את ה-QR שעל המדפסת שלכם, או חפשו את הדגם
      </p>
      <HomeGuides printers={printers} />
    </section>
  );
}
