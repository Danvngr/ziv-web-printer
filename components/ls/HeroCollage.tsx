"use client";

import { useRef, useState, type MouseEvent } from "react";
const pastelArches = "/learning-spaces/pastel-arches.jpg";
const chevrutaWall = "/learning-spaces/chevruta-wall.jpg";
const handsWall = "/learning-spaces/hands-wall.jpg";
import { Check } from "lucide-react";

export function HeroCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 }); // subtle
  };
  const reset = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="ls:relative ls:h-[440px] ls:sm:h-[600px] ls:lg:h-[760px] ls:w-full ls:[perspective:1400px]"
    >
      {/* Soft decorative blobs */}
      <div className="ls:pointer-events-none ls:absolute ls:-bottom-8 ls:-right-8 ls:h-48 ls:w-48 ls:rounded-full ls:bg-pastel-butter/60 ls:blur-2xl" />
      <div className="ls:pointer-events-none ls:absolute ls:top-1/4 ls:-left-12 ls:h-32 ls:w-32 ls:rounded-full ls:bg-pastel-sky/60 ls:blur-2xl" />

      <div
        className="ls:relative ls:h-full ls:w-full ls:[transform-style:preserve-3d] ls:transition-transform ls:duration-300 ls:ease-out"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        {/* Large main arch — top right */}
        <div className="ls:absolute ls:right-0 ls:top-[4%] ls:z-20 ls:h-[82%] ls:w-[55%] ls:rotate-2 ls:[transform:translateZ(40px)_rotate(2deg)]">
          <div className="ls:h-full ls:w-full ls:overflow-hidden ls:rounded-t-full ls:border-[10px] ls:sm:border-[12px] ls:border-card ls:shadow-2xl">
            <img
              src={pastelArches}
              alt="מרחב למידה עם נישות גבס בקשתות פסטל"
              className="ls:h-full ls:w-full ls:object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="ls:absolute ls:top-10 ls:sm:top-14 ls:left-2 ls:sm:left-4 ls:-rotate-3 ls:rounded-xl ls:bg-brand-green ls:px-3 ls:py-1.5 ls:text-xs ls:sm:text-sm ls:font-bold ls:text-primary-foreground ls:shadow-lg ls:whitespace-nowrap ls:animate-pop-in ls:[animation-delay:.4s]">
            ✦ עיצוב שמעורר השראה
          </div>
        </div>

        {/* Mid arch — bottom left */}
        <div className="ls:absolute ls:left-[8%] ls:bottom-0 ls:z-10 ls:h-[72%] ls:w-[50%] ls:overflow-hidden ls:rounded-t-full ls:border-[10px] ls:sm:border-[12px] ls:border-card ls:shadow-2xl ls:-rotate-3 ls:bg-pastel-pink ls:[transform:translateZ(20px)_rotate(-3deg)]">
          <img
            src={chevrutaWall}
            alt="מרחב חברותא בצבעי פסטל"
            className="ls:h-full ls:w-full ls:object-cover"
            loading="eager"
          />
        </div>

        {/* Small accent arch — top left */}
        <div className="ls:absolute ls:left-0 ls:top-[18%] ls:z-30 ls:h-[44%] ls:w-[40%] ls:rotate-6 ls:[transform:translateZ(70px)_rotate(6deg)]">
          <div className="ls:h-full ls:w-full ls:overflow-hidden ls:rounded-t-full ls:border-[8px] ls:sm:border-[10px] ls:border-card ls:shadow-xl ls:bg-pastel-sky">
            <img
              src={handsWall}
              alt="עמדת ידיים אינטראקטיבית במרחב חכם"
              className="ls:h-full ls:w-full ls:object-cover"
              loading="lazy"
            />
          </div>
          <div className="ls:absolute ls:bottom-2 ls:right-2 ls:sm:bottom-4 ls:sm:right-3 ls:flex ls:items-center ls:gap-1.5 ls:rounded-2xl ls:bg-brand-blue ls:px-3 ls:py-1.5 ls:text-xs ls:sm:text-sm ls:font-bold ls:text-primary-foreground ls:shadow-xl ls:whitespace-nowrap ls:animate-pop-in ls:[animation-delay:.7s]">
            <Check className="ls:h-3.5 ls:w-3.5 ls:sm:h-4 ls:sm:w-4" strokeWidth={3} />
            פתרון מלא
          </div>
        </div>
      </div>
    </div>
  );
}
