import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { getMachine, guideLabel, isGuideKind, machines, readyGuide } from "@/data/printers";
import { counterWhatsappText } from "@/data/site";

type GuidePageProps = {
  params: Promise<{ id: string; guideId: string }>;
};

export function generateStaticParams() {
  return machines.flatMap((machine) => [
    { id: machine.id, guideId: "counter" },
    { id: machine.id, guideId: "toner" },
  ]);
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
    <article className="lift mx-auto my-8 max-w-3xl rounded-3xl border border-edge bg-white px-4 py-10 sm:px-8">
      <nav aria-label="פירורי לחם" className="text-sm text-muted">
        <Link href="/" className="inline-flex min-h-11 items-center text-accent hover:underline">
          חיפוש דגם
        </Link>
        <span aria-hidden="true"> › </span>
        <Link
          href={`/printers/${machine.id}`}
          className="inline-flex min-h-11 items-center text-accent hover:underline"
        >
          {machine.brand} {machine.model}
        </Link>
      </nav>
      <h1 className="mt-4 text-4xl font-bold text-ink md:text-5xl">
        <span className="block">{label.title}</span>
        <span className="mt-1 block text-3xl md:text-4xl">{machine.model}</span>
      </h1>
      {machine.sample ? (
        <p className="mt-4 inline-flex rounded-full bg-chip-sand px-3 py-1 text-sm font-semibold text-ink">
          תוכן לדוגמה
        </p>
      ) : null}

      {guide ? (
        <>
          <p className="mt-4 leading-8 text-muted">{guide.intro}</p>
          <ol className="relative mt-12 space-y-10">
            <span className="absolute top-0 bottom-0 start-4 w-0.5 bg-line" aria-hidden="true" />
            {guide.steps.map((step, index) => (
              <li key={`${step.title}-${index}`} className="relative ps-14">
                <span className="absolute start-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h2 className="text-lg font-bold text-ink">{step.title}</h2>
                <p className="mt-2 leading-7 text-muted">{step.text}</p>
                <div className="mt-4 flex aspect-video items-center justify-center rounded-2xl border border-edge bg-[#f9fcff] px-4 text-center text-sm text-muted">
                  כאן תופיע התמונה
                </div>
              </li>
            ))}
          </ol>
          {guideId === "counter" ? (
            <section className="mt-12 rounded-3xl bg-chip-mint px-5 py-6">
              <h2 className="text-xl font-bold text-ink">שליחת המונה</h2>
              <p className="mt-3 text-lg font-semibold leading-8 text-ink">
                צלמו את המונה ושלחו את התמונה בוואטסאפ למשרד. חובה לרשום בהודעה גם את מספר המכונה
                הפנימי שמופיע על המדבקה.
              </p>
              <p className="mt-3 leading-7 text-muted">
                השליחה מתבצעת בוואטסאפ, אחרי שמצרפים את התמונה ומחליפים את הטקסט במספר המכונה. האתר
                לא שולח את התמונה ולא בודק שהמספר נכתב.
              </p>
              <WhatsAppLink
                text={counterWhatsappText}
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 font-semibold text-ink hover:bg-action-hover"
              >
                פתיחת וואטסאפ לשליחת מונה
              </WhatsAppLink>
            </section>
          ) : (
            <section className="mt-12 rounded-3xl bg-wash px-5 py-6">
              <h2 className="text-xl font-bold text-ink">סיימתם?</h2>
              <p className="mt-3 leading-7 text-muted">אם משהו לא הסתדר, אפשר לפנות לשירות.</p>
              <WhatsAppLink className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 font-semibold text-ink hover:bg-action-hover">
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
          <WhatsAppLink className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 font-semibold text-ink hover:bg-action-hover">
            פתיחת וואטסאפ
          </WhatsAppLink>
        </section>
      )}

      <Link
        href={`/printers/${machine.id}`}
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-mist bg-page px-6 font-semibold text-ink hover:bg-wash"
      >
        חזרה לדגם
      </Link>
    </article>
  );
}
