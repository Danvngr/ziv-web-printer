import { HomeSearch } from "@/components/home-search";
import { machines } from "@/data/printers";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <section className="relative px-1 pb-16 pt-12 text-center md:pt-20">
      <HeroDrift />
      <div className="pop-in relative">
        <h1 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {site.homeTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          חפשו את דגם המכונה, בחרו פעולה, ועקבו אחרי השלבים.
        </p>
      </div>
      <HomeSearch machines={machines} />
    </section>
  );
}

function HeroDrift() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <span className="float absolute start-[6%] top-[12%] h-14 w-14 rounded-full bg-[#c5f9b9]/80" />
      <span className="drift-x absolute end-[8%] top-[8%] h-11 w-11 rounded-full border-4 border-[#007bae]/35" />
      <span className="float-rotate absolute bottom-[18%] start-[10%] h-16 w-16 rounded-full bg-[#bbe9ff]/80" />
      <span className="float absolute end-[14%] top-[42%] h-8 w-8 rounded-full bg-[#ffc6c7]/90" style={{ animationDelay: "0.6s" }} />
      <span className="drift-x absolute start-[22%] top-[6%] h-3 w-3 rounded-sm bg-[#63c000]" style={{ animationDelay: "0.4s" }} />
      <span className="float-rotate absolute end-[24%] bottom-[28%] text-2xl font-bold text-[#007bae]/40" style={{ animationDelay: "0.8s" }}>
        +
      </span>
    </div>
  );
}
