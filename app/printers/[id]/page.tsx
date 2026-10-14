import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MachineName } from "@/components/machine-name";
import { ZoomImage } from "@/components/zoom-image";
import { getMachine, guideLabel, machineGuideLinks, machines, placeholderImage } from "@/data/printers";

type MachinePageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return machines.map((machine) => ({ id: machine.id }));
}

export async function generateMetadata({ params }: MachinePageProps): Promise<Metadata> {
  const { id } = await params;
  const machine = getMachine(machines, id);
  if (!machine) return { title: "הדגם לא נמצא" };
  return { title: `${machine.brand} ${machine.model}` };
}

export default async function MachinePage({ params }: MachinePageProps) {
  const { id } = await params;
  const machine = getMachine(machines, id);
  if (!machine) notFound();

  return (
    <div className="wrap">
    <article className="mx-auto max-w-3xl pt-6 pb-12">
      <h1 className="yso-title">
        <MachineName brand={machine.brand} model={machine.model} />
      </h1>
      {machine.sample ? (
        <p className="mt-4 inline-flex rounded-full bg-chip-sand px-3 py-1 text-sm font-semibold text-ink">
          תוכן לדוגמה
        </p>
      ) : null}
      <figure className="mt-8 overflow-hidden rounded-3xl bg-white p-6 shadow-card">
        <ZoomImage
          src={machine.image ?? placeholderImage}
          alt={`${machine.brand} ${machine.model}`}
          width={1254}
          height={1254}
          triggerClassName="block w-full"
          imageClassName="mx-auto aspect-video w-full max-w-md object-contain"
        />
      </figure>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {machineGuideLinks(machine).map((kind) => {
          const label = guideLabel(kind);
          const ready = (machine.guides[kind]?.steps.length ?? 0) > 0;
          return (
            <li key={kind}>
              <Link
                href={`/printers/${machine.id}/${kind}`}
                className="lift flex min-h-36 flex-col justify-between rounded-3xl border border-edge bg-white p-6"
              >
                <span className="text-2xl font-bold text-ink">{label.card}</span>
                <span className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-action px-6 text-sm font-semibold text-ink">
                  {ready ? "למדריך" : "המדריך יעלה בקרוב"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href="/guides"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-mist bg-white px-6 font-semibold text-ink hover:bg-wash"
      >
        חזרה לחיפוש דגם
      </Link>
    </article>
    </div>
  );
}
