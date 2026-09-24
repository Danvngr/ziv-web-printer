import QRCode from "qrcode";

const QUIET = 4;

export function guideQrPayload(id: string): string {
  const origin = (process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "").replace(/\/$/, "");
  return `${origin}/printers/${id}`;
}

export function GuideQr({ id }: { id: string }) {
  const payload = guideQrPayload(id);
  const qr = QRCode.create(payload, { errorCorrectionLevel: "M" });
  const size = qr.modules.size;
  const total = size + QUIET * 2;
  const cells = [];

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (qr.modules.get(row, col)) {
        cells.push(
          <rect key={`${row}-${col}`} x={col + QUIET} y={row + QUIET} width="1" height="1" />,
        );
      }
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${total} ${total}`}
      className="h-44 w-44 rounded-md border border-gray-200 bg-white"
      role="img"
      aria-label="קוד QR למדריך זה"
    >
      <rect width={total} height={total} fill="#ffffff" />
      <g fill="#0f172a">{cells}</g>
    </svg>
  );
}
