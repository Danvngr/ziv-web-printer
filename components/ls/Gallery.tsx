"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion, useMotionValue, useScroll, useMotionValueEvent } from "framer-motion";
import { WhatsAppCTA } from "@/components/ls/WhatsAppCTA";
import { WHATSAPP_MESSAGES } from "@/components/ls/whatsapp";
const handsWall = "/learning-spaces/hands-wall.jpg";
const pastelArches = "/learning-spaces/pastel-arches.jpg";
const chevrutaWall = "/learning-spaces/chevruta-wall.jpg";
const stemWall = "/learning-spaces/stem-wall.jpg";
const girlsKiosks = "/learning-spaces/girls-kiosks.jpg";
const learningNoLimits = "/learning-spaces/learning-no-limits.jpg";
const chevrutaMusic = "/learning-spaces/chevruta-music.jpg";

type Direction = "left" | "right";

const PHOTOS = [
  { src: pastelArches, alt: "מרחב חכם בקשתות פסטל" },
  { src: handsWall, alt: "עמדת ידיים אינטראקטיבית בכיתה חכמה" },
  { src: learningNoLimits, alt: "מרחב מסכים חכם · Learning without Limits" },
  { src: chevrutaWall, alt: "מרחב חברותא חכם · דרך ארץ · חברותא · ידע" },
  { src: stemWall, alt: "עמדת STEM בכיתה יסודית" },
  { src: girlsKiosks, alt: "תלמידות לומדות בעמדות אישיות במרחב חכם" },
  { src: chevrutaMusic, alt: "עמדות חברותא וידע במרחב משותף" },
];

const DESKTOP_SPREAD = [
  { order: 0, x: -370, y: 15, z: 50, direction: "left" as Direction },
  { order: 1, x: -185, y: 32, z: 40, direction: "left" as Direction },
  { order: 2, x: 0, y: 8, z: 30, direction: "right" as Direction },
  { order: 3, x: 185, y: 22, z: 20, direction: "right" as Direction },
  { order: 4, x: 370, y: 44, z: 10, direction: "left" as Direction },
];

// Touch layout: compact 3-over-2 stack that fits inside phone widths.
const MOBILE_SPREAD_BASE = [
  { order: 0, x: -74, y: -48, z: 40, direction: "left" as Direction },
  { order: 1, x: 0, y: -56, z: 50, direction: "right" as Direction },
  { order: 2, x: 74, y: -46, z: 40, direction: "left" as Direction },
  { order: 3, x: -40, y: 54, z: 30, direction: "right" as Direction },
  { order: 4, x: 40, y: 58, z: 30, direction: "left" as Direction },
];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function SpreadPhoto({
  src,
  alt,
  direction,
  width,
  height,
  forceHover,
  hoverScale = 1.12,
  onClick,
  onHoverStart,
  onHoverEnd,
}: {
  src: string;
  alt: string;
  direction: Direction;
  width: number;
  height: number;
  forceHover?: boolean;
  hoverScale?: number;
  onClick: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const [rotation, setRotation] = useState(0);
  const x = useMotionValue(width / 2);
  const y = useMotionValue(height / 2);

  useEffect(() => {
    // Mount-only random tilt. A render-time random value would mismatch hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRotation(rand(1.5, 4) * (direction === "left" ? -1 : 1));
  }, [direction]);

  return (
    <motion.div
      className="ls:relative ls:cursor-pointer ls:overflow-hidden ls:rounded-3xl"
      style={{ rotate: rotation, width, height }}
      animate={forceHover ? { scale: hoverScale, rotate: 0 } : { scale: 1, rotate: rotation }}
      whileHover={{ scale: hoverScale, rotate: 0, zIndex: 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        x.set(e.clientX - r.left);
        y.set(e.clientY - r.top);
      }}
      onMouseLeave={() => {
        x.set(width / 2);
        y.set(height / 2);
      }}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="ls:h-full ls:w-full ls:object-cover"
        draggable={false}
      />
    </motion.div>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isLargeTouch, setIsLargeTouch] = useState(false);
  const [containerWidth, setContainerWidth] = useState(360);
  const [hoveredOrder, setHoveredOrder] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(hover: none)");
    const update = () => setIsTouch(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 640px) and (hover: none)");
    const update = () => setIsLargeTouch(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    // Clamp to the viewport here, not during render: reading window.innerWidth
    // while rendering makes the client's hydration pass disagree with the
    // server (which has no window), which React reports as a mismatch.
    const update = () => setContainerWidth(Math.min(el.clientWidth || 360, window.innerWidth - 32));
    update();

    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(update);
      ro.observe(el);
      return () => ro.disconnect();
    }

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            setTimeout(() => setLoaded(true), 400);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll-driven focus on touch devices (replaces hover).
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!isTouch && isDesktop) return;
    // Map scroll progress 0.25..0.85 across the 5 photos.
    const t = Math.max(0, Math.min(1, (p - 0.25) / 0.6));
    const idx = Math.min(4, Math.max(0, Math.floor(t * 5)));
    setHoveredOrder((cur) => (cur === idx ? cur : idx));
  });

  const featured = PHOTOS.slice(0, 5);
  // Touch devices (phones + tablets) use the stacked 3+2 layout with scroll-driven focus.
  // Only true desktop (with hover) uses the single-row spread.
  const useTouchLayout = isTouch || !isDesktop;
  const isWideTouch = useTouchLayout && (isLargeTouch || containerWidth >= 600);
  const mobileCardW = isWideTouch
    ? Math.min(210, Math.max(180, Math.round(containerWidth * 0.28)))
    : Math.min(112, Math.max(96, Math.round(containerWidth * 0.31)));
  const mobileCardH = isWideTouch ? 290 : Math.round(mobileCardW * 1.3);
  const cardW = useTouchLayout ? mobileCardW : 280;
  const cardH = useTouchLayout ? (isWideTouch ? 290 : Math.round(cardW * 1.3)) : 360;
  const containerH = useTouchLayout
    ? isWideTouch
      ? 480
      : Math.max(320, Math.round(cardW * 2.25))
    : 520;
  const hoverScale = useTouchLayout ? (isWideTouch ? 1.08 : 1.03) : 1.12;
  const pushAmount = useTouchLayout ? (isWideTouch ? 28 : 0) : 60;

  const MOBILE_SPREAD = useMemo(() => {
    const yScale = cardW / 110;
    const desiredXScale = cardW / 110;
    const maxX = Math.max(0, containerWidth / 2 - (cardW * hoverScale) / 2 - 10);
    const xScale = Math.min(desiredXScale, maxX / 74);
    return MOBILE_SPREAD_BASE.map((pos) => ({
      ...pos,
      x: Math.round(pos.x * xScale),
      y: Math.round(pos.y * yScale),
    }));
  }, [cardW, hoverScale, containerWidth]);

  const spread = useTouchLayout ? MOBILE_SPREAD : DESKTOP_SPREAD;

  const hoveredX = useMemo(() => {
    if (hoveredOrder === null) return null;
    return spread.find((p: (typeof spread)[0]) => p.order === hoveredOrder)?.x ?? null;
  }, [hoveredOrder, spread]);

  return (
    <>
      <div
        ref={wrapRef}
        className={`ls:relative ls:flex ls:w-full ls:items-center ls:justify-center ls:transition-opacity ls:duration-700 ${
          visible ? "ls:opacity-100" : "ls:opacity-0"
        }`}
        style={{ minHeight: containerH + 40, paddingTop: 16, paddingBottom: 16 }}
      >
        <motion.div
          className="ls:relative ls:mx-auto ls:flex ls:w-full ls:max-w-6xl ls:items-center ls:justify-center"
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 1 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          <div
            className={`ls:relative ls:mx-auto ls:w-full ${useTouchLayout ? "" : "ls:hidden"}`}
            style={{ maxWidth: isWideTouch ? 760 : 430, height: Math.max(300, mobileCardH * 2.05) }}
          >
            <div className="ls:grid ls:grid-cols-3 ls:place-items-center ls:gap-x-2 ls:pt-16">
              {[0, 1, 2].map((order) => {
                const photo = featured[order];
                return (
                  <SpreadPhoto
                    key={order}
                    src={photo.src}
                    alt={photo.alt}
                    direction={MOBILE_SPREAD_BASE[order].direction}
                    width={mobileCardW}
                    height={mobileCardH}
                    forceHover={hoveredOrder === order}
                    hoverScale={1.03}
                    onClick={() => setOpen(order)}
                    onHoverStart={() => setHoveredOrder(order)}
                    onHoverEnd={() => setHoveredOrder((cur) => (cur === order ? null : cur))}
                  />
                );
              })}
              <div className="ls:col-span-3 ls:-mt-8 ls:flex ls:w-full ls:justify-center ls:gap-5">
                {[3, 4].map((order) => {
                  const photo = featured[order];
                  return (
                    <SpreadPhoto
                      key={order}
                      src={photo.src}
                      alt={photo.alt}
                      direction={MOBILE_SPREAD_BASE[order].direction}
                      width={mobileCardW}
                      height={mobileCardH}
                      forceHover={hoveredOrder === order}
                      hoverScale={1.03}
                      onClick={() => setOpen(order)}
                      onHoverStart={() => setHoveredOrder(order)}
                      onHoverEnd={() => setHoveredOrder((cur) => (cur === order ? null : cur))}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={`ls:relative ls:w-full ${useTouchLayout ? "ls:hidden" : ""}`}
            style={{ height: containerH }}
          >
            {[...spread].reverse().map((pos, idx) => {
              const photo = featured[pos.order];
              const isHovered = hoveredOrder === pos.order;
              const isSiblingHovered = hoveredOrder !== null && !isHovered;
              const push =
                isSiblingHovered && hoveredX !== null
                  ? (pos.x === hoveredX ? 0 : pos.x > hoveredX ? 1 : -1) * pushAmount
                  : 0;
              return (
                <motion.div
                  key={pos.order}
                  className="ls:absolute ls:left-1/2 ls:top-1/2"
                  style={{
                    zIndex: isHovered ? 100 : pos.z,
                    marginLeft: -cardW / 2,
                    marginTop: -cardH / 2,
                  }}
                  custom={pos}
                  variants={{
                    hidden: { x: 0, y: 0 },
                    visible: (c: typeof pos) => ({
                      x: c.x,
                      y: c.y,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 12,
                        mass: 1,
                        delay: c.order * 0.15,
                      },
                    }),
                  }}
                  animate={loaded ? { x: pos.x + push, y: pos.y } : undefined}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                >
                  <SpreadPhoto
                    src={photo.src}
                    alt={photo.alt}
                    direction={pos.direction}
                    width={cardW}
                    height={cardH}
                    forceHover={useTouchLayout && isHovered}
                    hoverScale={hoverScale}
                    onClick={() => setOpen(pos.order)}
                    onHoverStart={() => setHoveredOrder(pos.order)}
                    onHoverEnd={() => setHoveredOrder((cur) => (cur === pos.order ? null : cur))}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="ls:mt-8 ls:md:mt-12">
        <WhatsAppCTA
          message={WHATSAPP_MESSAGES.gallery}
          caption="רוצים מרחב חכם כזה אצלכם?"
          label="דברו איתנו בוואטסאפ"
        />
      </div>

      {/* Portalled to <body>: the lightbox is position:fixed, and inside
          .a11y-filter-root a colour filter would re-anchor it to the document.
          .a11y-float keeps it filtered along with the rest of the page. */}
      {open !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="a11y-float ls:fixed ls:inset-0 ls:z-[1000] ls:grid ls:place-items-center ls:bg-black/70 ls:backdrop-blur-sm ls:p-4 animate-in fade-in ls:duration-200"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(null);
              }}
              aria-label="סגור"
              className="ls:absolute ls:top-4 ls:left-4 ls:grid ls:h-10 ls:w-10 ls:place-items-center ls:rounded-full ls:bg-background/90 ls:text-foreground ls:hover:bg-background ls:transition"
            >
              <X className="ls:h-5 ls:w-5" />
            </button>
            <img
              src={PHOTOS[open].src}
              alt={PHOTOS[open].alt}
              className="ls:max-h-[88vh] ls:max-w-[92vw] ls:rounded-2xl ls:object-contain ls:shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
