"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Heart, Music } from "lucide-react";
import { site } from "@/data/site";
import { Wave, HeartDoodle, SparkleDoodle, BowDoodle, Floaties } from "./Doodles";
import { HeartShower } from "./Playful";

export function ArmyCorner() {
  const { army } = site;
  const [phrase, setPhrase] = useState<string | null>(null);
  const [showerKey, setShowerKey] = useState(0);
  const squashRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number | null>(null);
  const lastPhrase = useRef<string | null>(null);

  const pokePlushie = () => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = squashRef.current;
    if (el && !reduced) {
      el.classList.remove("animate-plushie-squash");
      void el.offsetWidth; // restart the animation
      el.classList.add("animate-plushie-squash");
    }
    const pool = army.plushiePhrases.filter((p) => p !== lastPhrase.current);
    const next = pool[Math.floor(Math.random() * pool.length)];
    lastPhrase.current = next;
    setPhrase(next);
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setPhrase(null), 2600);
  };

  const onPlushieKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      pokePlushie();
    }
  };

  return (
    <>
      <Wave fill="#e9e1ff" />
      <section
        id="army"
        aria-labelledby="army-heading"
        className="relative scroll-mt-28 bg-lav"
      >
        <Floaties />
        <div className="relative mx-auto max-w-5xl px-6 py-14 md:py-20">
          <HeartDoodle
            className="absolute left-[6%] top-12 size-9 text-plum"
            delay="0.3s"
          />
          <SparkleDoodle
            className="absolute bottom-16 right-[5%] size-7 text-white"
            delay="1.6s"
          />

          <div className="sticker sticker-lav squishy grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
            <div className="relative mx-auto w-full max-w-[280px]">
              {phrase && (
                <div
                  role="status"
                  className="speech-bubble absolute -top-2 left-1/2 z-20 w-max max-w-[220px] -translate-x-1/2 -translate-y-full rounded-2xl bg-white px-4 py-2 text-center font-display text-base font-bold text-rose shadow-[4px_4px_0_0_var(--color-lavdeep)]"
                >
                  {phrase}
                </div>
              )}
              <div ref={squashRef}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={pokePlushie}
                  onKeyDown={onPlushieKeyDown}
                  aria-label="Poke the plushie study buddy for a cute message"
                  className="squishy cursor-pointer rounded-3xl"
                >
                  <figure className="animate-bob rotate-2 rounded-3xl border-4 border-white bg-white p-3 shadow-[8px_8px_0_0_var(--color-lavdeep)]">
                    <Image
                      src="/images/bts-plushie.webp"
                      alt={army.plushieAlt}
                      width={1600}
                      height={1600}
                      className="aspect-square w-full rounded-2xl object-cover"
                    />
                    <figcaption className="pb-1 pt-3 text-center text-sm font-bold text-cocoasoft">
                      {army.plushieCaption}
                    </figcaption>
                  </figure>
                </div>
              </div>
              <HeartDoodle
                className="absolute -left-4 -top-4 size-10 text-rose"
                delay="1.1s"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="squishy mb-3 inline-flex items-center gap-2 rounded-full bg-plum px-4 py-1.5 text-sm font-bold text-white">
                <Music className="size-4" aria-hidden="true" />
                ARMY corner
              </p>
              <h2
                id="army-heading"
                className="text-cute-gradient font-display text-3xl font-extrabold md:text-4xl"
              >
                {army.heading}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-cocoasoft">
                {army.copy}
              </p>
              <ul className="mt-5 flex flex-wrap justify-center gap-2.5 md:justify-start">
                {army.chips.map((chip) => (
                  <li
                    key={chip}
                    className="squishy flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-plum shadow-[3px_3px_0_0_var(--color-lavdeep)]"
                  >
                    <Heart className="size-3.5" aria-hidden="true" />
                    {chip}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setShowerKey((k) => k + 1)}
                  className="squishy inline-flex items-center gap-2 rounded-full bg-plum px-6 py-2.5 font-display text-base font-bold text-white shadow-[5px_5px_0_0_var(--color-lavdeep)]"
                >
                  <Heart
                    className="size-4 fill-white/90 text-white"
                    aria-hidden="true"
                  />
                  {army.showerLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-lav">
        <Wave fill="#fffaf4" flip />
      </div>
      <HeartShower burstKey={showerKey} />
    </>
  );
}
