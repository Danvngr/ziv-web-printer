import { HomeSearch } from "@/components/home-search";
import { machines } from "@/data/printers";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <section className="bg-[linear-gradient(180deg,#eaf3f8_0%,#f9fcff_42%)] px-4 pb-16 pt-12 text-center md:pt-20">
      <p className="text-sm font-semibold text-accent">{site.name}</p>
      <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink md:text-6xl">
        {site.homeTitle}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
        חפשו את דגם המכונה, בחרו פעולה, ועקבו אחרי השלבים.
      </p>
      <HomeSearch machines={machines} />
    </section>
  );
}
