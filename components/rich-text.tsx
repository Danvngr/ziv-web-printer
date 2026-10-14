const latin = /([A-Za-z][A-Za-z0-9+#./-]*)/g;

export function RichText({ text }: { text: string }) {
  const parts = text.split(latin);
  return parts.map((part, index) =>
    /^[A-Za-z]/.test(part) ? (
      <bdi key={index} dir="ltr">
        {part}
      </bdi>
    ) : (
      part
    ),
  );
}
