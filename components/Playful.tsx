"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Heart } from "lucide-react";
import { site } from "@/data/site";

/** True when the user prefers reduced motion (reactive). */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/* ------------------------------------------------------------------ */
/* 1. Heart-burst on tap/click — tiny hearts & sparkles pop from the   */
/*    pointer, float up and fade. Passive listener, never blocks the   */
/*    underlying click. Particle count is capped for performance.      */
/* ------------------------------------------------------------------ */

type BurstParticle = {
  id: number;
  x: number;
  y: number;
  ch: string;
  color: string;
  size: number;
  dx: string;
  dy: string;
  rot: string;
  dur: string;
};

const BURST_CHARS = ["♥", "♡", "✦", "✧"];
const BURST_COLORS = ["text-rose", "text-plum", "text-blushdeep", "text-[#e58bb1]"];
let burstSeq = 0;

export function HeartBursts() {
  const [particles, setParticles] = useState<BurstParticle[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      const spawn: BurstParticle[] = Array.from({ length: 7 }, () => ({
        id: ++burstSeq,
        x: e.clientX,
        y: e.clientY,
        ch: BURST_CHARS[Math.floor(Math.random() * BURST_CHARS.length)],
        color: BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
        size: 11 + Math.random() * 11,
        dx: `${(Math.random() - 0.5) * 110}px`,
        dy: `${-50 - Math.random() * 80}px`,
        rot: `${(Math.random() - 0.5) * 90}deg`,
        dur: `${0.7 + Math.random() * 0.4}s`,
      }));
      const ids = new Set(spawn.map((p) => p.id));
      setParticles((prev) => {
        const next = [...prev, ...spawn];
        return next.length > 70 ? next.slice(next.length - 70) : next;
      });
      window.setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !ids.has(p.id)));
      }, 1300);
    };
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => window.removeEventListener("pointerdown", onDown);
  }, [reduced]);

  if (reduced) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`particle-burst ${p.color}`}
          style={
            {
              left: p.x,
              top: p.y,
              fontSize: p.size,
              animationDuration: p.dur,
              "--dx": p.dx,
              "--dy": p.dy,
              "--rot": p.rot,
            } as React.CSSProperties
          }
        >
          {p.ch}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Sparkle cursor trail — desktop only (fine pointers), throttled.  */
/* ------------------------------------------------------------------ */

type TrailSpark = { id: number; x: number; y: number; size: number; dur: string };

export function SparkleTrail() {
  const [sparks, setSparks] = useState<TrailSpark[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let last = 0;
    let seq = 0;
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - last < 70) return;
      last = now;
      const id = ++seq;
      const spark: TrailSpark = {
        id,
        x: e.clientX,
        y: e.clientY,
        size: 10 + Math.random() * 10,
        dur: `${0.5 + Math.random() * 0.3}s`,
      };
      setSparks((prev) =>
        prev.length > 26 ? [...prev.slice(-26), spark] : [...prev, spark],
      );
      window.setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id));
      }, 950);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  if (reduced) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="particle-trail text-lavdeep"
          style={
            {
              left: s.x,
              top: s.y,
              fontSize: s.size,
              animationDuration: s.dur,
            } as React.CSSProperties
          }
        >
          ✦
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Purple heart shower — rains hearts for ~3s when triggered.       */
/* ------------------------------------------------------------------ */

type Drop = {
  id: number;
  left: string;
  size: number;
  delay: string;
  dur: string;
  sway: string;
  rot: string;
};

export function HeartShower({ burstKey }: { burstKey: number }) {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    if (burstKey === 0) return;
    if (prefersReducedMotion()) return;
    const base = burstKey * 1000;
    setDrops(
      Array.from({ length: 36 }, (_, i) => ({
        id: base + i,
        left: `${Math.random() * 100}vw`,
        size: 14 + Math.random() * 22,
        delay: `${Math.random() * 1.1}s`,
        dur: `${2 + Math.random() * 1.2}s`,
        sway: `${(Math.random() - 0.5) * 120}px`,
        rot: `${120 + Math.random() * 160}deg`,
      })),
    );
    const t = window.setTimeout(() => setDrops([]), 4800);
    return () => window.clearTimeout(t);
  }, [burstKey]);

  if (drops.length === 0) return null;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      {drops.map((d) => (
        <Heart
          key={d.id}
          aria-hidden="true"
          className="particle-shower fill-plum text-plum"
          style={
            {
              left: d.left,
              width: d.size,
              height: d.size,
              animationDuration: d.dur,
              animationDelay: d.delay,
              "--sway": d.sway,
              "--rot": d.rot,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Hero typewriter — rotates on-page words; static when reduced.    */
/* ------------------------------------------------------------------ */

export function Typewriter() {
  const words = site.hero.rotatingWords;
  const [text, setText] = useState<string>(words[0]);
  const [staticMode, setStaticMode] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setStaticMode(true);
      return;
    }
    let w = 0;
    let c = words[0].length;
    let deleting = true;
    let timer = 0;
    const tick = () => {
      const word = words[w];
      if (!deleting) {
        c += 1;
        setText(word.slice(0, c));
        if (c >= word.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1700);
        } else {
          timer = window.setTimeout(tick, 80);
        }
      } else {
        c -= 1;
        setText(word.slice(0, Math.max(c, 0)));
        if (c <= 0) {
          deleting = false;
          w = (w + 1) % words.length;
          timer = window.setTimeout(tick, 400);
        } else {
          timer = window.setTimeout(tick, 40);
        }
      }
    };
    timer = window.setTimeout(tick, 1700);
    return () => window.clearTimeout(timer);
  }, [words]);

  return (
    <span aria-label={words.join(", ")}>
      <span aria-hidden="true">{staticMode ? words[0] : text}</span>
      {!staticMode && (
        <span aria-hidden="true" className="type-caret">
          |
        </span>
      )}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Back-to-top balloon — appears after scrolling ~600px.            */
/* ------------------------------------------------------------------ */

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label="Back to top"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-[60] grid size-14 place-items-center rounded-full border-4 border-white bg-rose text-white shadow-[5px_5px_0_0_var(--color-blushdeep)] transition-all duration-300 hover:scale-110 active:scale-95 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="animate-backtop-bob grid place-items-center">
        <ArrowUp className="size-6" aria-hidden="true" />
      </span>
    </button>
  );
}
