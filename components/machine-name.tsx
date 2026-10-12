import { machineNameWords } from "@/data/printers";

export function MachineName({
  brand,
  model,
  className = "",
}: {
  brand: string;
  model: string;
  className?: string;
}) {
  const words = machineNameWords(brand, model);
  return (
    <span dir="rtl" className={`inline-flex max-w-full flex-wrap items-baseline gap-x-[0.35em] ${className}`}>
      {words.map((word, index) => (
        <bdi key={`${word}-${index}`}>{word}</bdi>
      ))}
    </span>
  );
}
