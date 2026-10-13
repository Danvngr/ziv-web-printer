import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הדמיית לוגו",
};

const WAVE_POINTS = 40;

function ease(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
}

function wavePolygon(level: number, phase: number) {
  const amp = 0.1;
  const pts: string[] = [];
  for (let i = 0; i <= WAVE_POINTS; i++) {
    const x = i / WAVE_POINTS;
    const y =
      level +
      amp * Math.sin((x * 2.15 + phase) * Math.PI * 2) +
      amp * 0.42 * Math.sin((x * 3.6 - phase * 1.35) * Math.PI * 2);
    const yc = Math.min(140, Math.max(-40, y * 100));
    pts.push(`${(x * 100).toFixed(2)}% ${yc.toFixed(2)}%`);
  }
  pts.push("100% 150%", "0% 150%");
  return `polygon(${pts.join(", ")})`;
}

function waveFrames() {
  const frames = [`0% { clip-path: ${wavePolygon(1.2, 0)}; opacity: 1; }`];
  const steps = 24;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const pct = (6 + ease(t) * 64).toFixed(2);
    const level = 1.2 + (-0.22 - 1.2) * ease(t);
    frames.push(`${pct}% { clip-path: ${wavePolygon(level, t * 1.8)}; opacity: 1; }`);
  }
  const full = wavePolygon(-0.22, 1.8);
  frames.push(`74% { clip-path: ${full}; opacity: 1; }`);
  frames.push(`88% { clip-path: ${full}; opacity: 0; }`);
  frames.push(`100% { clip-path: ${wavePolygon(1.2, 0)}; opacity: 0; }`);
  return frames.join("\n");
}

export default function LogoPreviewPage() {
  return (
    <section className="flex flex-col items-center px-3 py-10 text-center sm:py-16">
      <style>{`
        .logo-preview-mark .logo-preview-fill {
          animation: logo-wave 4s linear infinite;
        }
        @keyframes logo-wave {
          ${waveFrames()}
        }
      `}</style>
      <div className="logo-preview-mark">
        <img src="/splash-fill.png" alt="" className="logo-preview-fill" />
        <img src="/splash-outline.png" alt="" className="logo-preview-outline" />
      </div>
      <p className="mt-6 text-lg font-medium text-ink">זו הדמיה בלבד</p>
    </section>
  );
}
