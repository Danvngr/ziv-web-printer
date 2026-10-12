export function MachineName({
  brand,
  model,
  className = "",
}: {
  brand: string;
  model: string;
  className?: string;
}) {
  return (
    <bdi dir="ltr" className={className} style={{ unicodeBidi: "isolate" }}>
      {brand} {model}
    </bdi>
  );
}
