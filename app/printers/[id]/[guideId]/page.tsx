import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MachineName } from "@/components/machine-name";
import { WhatsAppLink, WhatsAppMark } from "@/components/whatsapp-link";
import { ZoomImage } from "@/components/zoom-image";
import { getMachine, guideLabel, isGuideKind, machineGuideLinks, machines, readyGuide } from "@/data/printers";
import { counterWhatsappText } from "@/data/site";

type GuidePageProps = {
  params: Promise<{ id: string; guideId: string }>;
};

export function generateStaticParams() {
  return machines.flatMap((machine) =>
    machineGuideLinks(machine).map((guideId) => ({ id: machine.id, guideId })),
  );
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { id, guideId } = await params;
  const machine = getMachine(machines, id);
  if (!machine || !isGuideKind(guideId)) return { title: "המדריך לא נמצא" };
  const label = guideLabel(guideId);
  return { title: `${label.title} — ${machine.brand} ${machine.model}` };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { id, guideId } = await params;
  const machine = getMachine(machines, id);
  if (!machine || !isGuideKind(guideId)) notFound();
  const label = guideLabel(guideId);
  const guide = readyGuide(machine, guideId);

  return (
    <article className="lift mx-auto my-4 max-w-3xl rounded-3xl border border-edge bg-white px-2 py-6 sm:my-8 sm:px-8 sm:py-10">
      <nav aria-label="פירורי לחם" className="text-sm">
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <li>
            <Link href="/" className="inline-flex min-h-11 items-center text-muted hover:text-ink">
              דף הבית
            </Link>
          </li>
          <li aria-hidden="true" className="text-xs text-muted/40">
            /
          </li>
          <li>
            <Link href="/#search" className="inline-flex min-h-11 items-center text-muted hover:text-ink">
              חיפוש דגם
            </Link>
          </li>
          <li aria-hidden="true" className="text-xs text-muted/40">
            /
          </li>
          <li>
            <Link
              href={`/printers/${machine.id}`}
              aria-current="page"
              className="inline-flex min-h-11 items-center font-semibold text-ink"
            >
              <MachineName brand={machine.brand} model={machine.model} />
            </Link>
          </li>
        </ol>
      </nav>
      <h1 className="mt-6 text-center">
        <span className="yso-title block">{label.title}</span>
        <span className="yso-title yso-green mt-2 block">
          <MachineName brand={machine.brand} model={machine.model} />
        </span>
      </h1>
      {machine.sample ? (
        <p className="mt-4 inline-flex rounded-full bg-chip-sand px-3 py-1 text-sm font-semibold text-ink">
          תוכן לדוגמה
        </p>
      ) : null}

      {guide ? (
        <>
          {guide.intro ? <p className="mt-4 leading-8 text-muted">{guide.intro}</p> : null}
          <ol className="relative mt-12 space-y-10">
            <span className="absolute top-0 bottom-0 start-4 w-0.5 bg-line" aria-hidden="true" />
            {guide.steps.map((step, index) => (
              <li key={`${step.title}-${index}`} className="relative ps-14">
                <span className="absolute start-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h2 className="text-lg font-bold text-ink">{step.title}</h2>
                <p className="mt-2 leading-7 text-muted">{step.text}</p>
                {machine.sample ? (
                  <div className="mt-8 flex aspect-video w-full max-w-full items-center justify-center rounded-2xl border border-edge bg-[#f9fcff] px-4 text-center text-sm text-muted">
                    כאן תופיע התמונה
                  </div>
                ) : (
                  {/* Phone: 1.5rem inside the card. -ms-8 and +0.5rem cancel ps-14 without crossing the card. */}
                  <ZoomImage
                    src={step.image}
                    alt={step.alt}
                    width={1536}
                    height={1024}
                    triggerClassName="mt-8 block min-w-0 w-[calc(100%+0.5rem)] -ms-8 overflow-hidden rounded-2xl border border-edge bg-[#f9fcff] sm:ms-0 sm:w-full"
                    imageClassName="mx-auto block h-auto w-full max-w-full object-contain"
                  />
                )}
                {index < guide.steps.length - 1 ? (
                  <div className="mt-8 border-t border-[#d5dee6]" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
          {guideId === "counter" || guideId === "meter" ? (
            <section className="mt-12 rounded-3xl bg-chip-mint px-5 py-6 text-center">
              <h2 className="yso-title inline-block border-b border-dashed border-ink pb-1">
                אופן שליחת המונה
              </h2>
              <ol className="yso-line mt-5 space-y-2 text-ink">
                <li>1. צלמו את המונה ושלחו את התמונה בוואטסאפ למשרד</li>
                <li>2. חייב לרשום את מספר המכונה ושם המוסד</li>
              </ol>
              <WhatsAppLink text={counterWhatsappText} className="wa-action mt-5">
                <WhatsAppMark size={16} />
                פתיחת וואטסאפ לשליחת מונה
              </WhatsAppLink>
            </section>
          ) : (
            <section className="mt-12 rounded-3xl bg-wash px-5 py-6">
              <h2 className="text-xl font-bold text-ink">סיימתם?</h2>
              <p className="mt-3 leading-7 text-muted">אם משהו לא הסתדר, אפשר לפנות לשירות.</p>
              <WhatsAppLink className="wa-action mt-5">
                <WhatsAppMark size={16} />
                וואטסאפ לשירות
              </WhatsAppLink>
            </section>
          )}
        </>
      ) : (
        <section className="mt-8 rounded-3xl bg-wash px-5 py-8">
          <h2 className="text-2xl font-bold text-ink">המדריך יעלה בקרוב</h2>
          <p className="mt-3 leading-7 text-muted">
            ההוראות לדגם הזה עדיין לא הוזנו. בינתיים אפשר לפנות לשירות בוואטסאפ.
          </p>
          <WhatsAppLink className="wa-action mt-5">
            <WhatsAppMark size={16} />
            פתיחת וואטסאפ
          </WhatsAppLink>
        </section>
      )}

      <div className="mt-8 flex flex-col items-center gap-3">
        <Link
          href={`/printers/${machine.id}`}
          className="inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 rounded-full border border-mist bg-page px-6 text-base font-semibold text-ink hover:bg-wash"
        >
          <PrinterIcon />
          חזרה לדגם
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 rounded-full border border-mist bg-page px-6 text-base font-semibold text-ink hover:bg-wash"
        >
          <HomeIcon />
          חזרה למסך הבית
        </Link>
      </div>
    </article>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" strokeLinejoin="round" />
    </svg>
  );
}

function PrinterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 8V4h10v4" strokeLinejoin="round" />
      <path d="M6 17H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" strokeLinejoin="round" />
      <rect x="7" y="14" width="10" height="6" rx="1" />
    </svg>
  );
}
