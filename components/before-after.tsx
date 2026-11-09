"use client";

import Image from "next/image";
import { useState } from "react";
import { learningCompare } from "@/data/learning-spaces";

export function BeforeAfter() {
  const [pos, setPos] = useState(58);
  const before = learningCompare.before;
  const after = learningCompare.after;

  return (
    <figure>
      <div dir="ltr" className="relative aspect-video overflow-hidden rounded-[2rem] border border-edge bg-wash">
        <Image
          src={after.src}
          alt={after.alt}
          width={after.width}
          height={after.height}
          unoptimized
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <Image
            src={before.src}
            alt={before.alt}
            width={before.width}
            height={before.height}
            unoptimized
            className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
            style={{ width: `${10000 / pos}%` }}
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white"
          style={{ left: `${pos}%` }}
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-bold text-white">לפני</span>
        <span className="absolute right-3 top-3 rounded-full bg-action px-3 py-1 text-xs font-bold text-[#f9fcff]">אחרי</span>
      </div>
      <label className="mt-3 block">
        <span className="sr-only">הזזה בין התמונה שלפני לתמונה שאחרי. שמאלה לפני, ימינה אחרי.</span>
        <input
          type="range"
          min={8}
          max={92}
          value={pos}
          dir="ltr"
          onChange={(event) => setPos(Number(event.target.value))}
          className="h-11 w-full accent-[#007bae]"
        />
      </label>
    </figure>
  );
}
