import Image from "next/image";
import { Heart, Stethoscope, ArrowDown } from "lucide-react";
import { site } from "@/data/site";
import { HeartDoodle, SparkleDoodle, StarDoodle } from "./Doodles";
import { Typewriter } from "./Playful";

const badgeIcons = {
  stethoscope: Stethoscope,
  heart: Heart,
} as const;

export function Hero() {
  const { hero } = site;
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* soft background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 size-80 rounded-full bg-blush/70 blur-3xl" />
        <div className="absolute -right-20 bottom-10 size-72 rounded-full bg-boraglow/60 blur-3xl" />
      </div>
      {/* floating doodles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <HeartDoodle className="absolute left-[6%] top-24 size-8 text-bora" delay="0s" />
        <SparkleDoodle className="absolute right-[10%] top-32 size-6 text-boraglow" delay="1.2s" />
        <StarDoodle className="absolute bottom-24 left-[12%] size-7 text-peach" delay="2.1s" />
        <HeartDoodle className="absolute bottom-32 right-[8%] size-10 text-plum" delay="0.6s" />
        <SparkleDoodle className="absolute left-[45%] top-16 size-5 text-mint" delay="1.8s" />
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 pb-16 pt-14 md:grid-cols-2 md:pt-20">
        {/* sticker-framed photo */}
        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm">
          {/* borahae purple glow behind the photo */}
          <div
            aria-hidden="true"
            className="animate-glow-pulse pointer-events-none absolute -inset-8 rounded-[3rem] bg-bora/30 blur-3xl"
          />
          <figure className="sticker squishy relative -rotate-2 p-3 pb-4">
            <Image
              src="/images/sunidhi.jpg"
              alt={hero.photoAlt}
              width={878}
              height={1120}
              priority
              className="aspect-[3/4] w-full rounded-3xl object-cover"
            />
            <figcaption className="pt-3 text-center font-display text-lg font-bold text-cocoasoft">
              {site.gallery.photos[0].caption} ♡
            </figcaption>
          </figure>
          {/* floating decorative fan-phrase tag */}
          <span
            aria-hidden="true"
            className="korean animate-floaty absolute -left-6 top-8 -rotate-12 rounded-full border-2 border-white bg-plum px-3 py-1 text-sm font-extrabold text-white shadow-[3px_3px_0_0_var(--color-lavdeep)]"
          >
            {hero.boraTag}
          </span>
          <HeartDoodle
            className="absolute -right-4 -top-4 size-12 text-boradeep"
            delay="0.4s"
          />
          <SparkleDoodle
            className="absolute -bottom-3 -left-5 size-9 text-plum"
            delay="1.5s"
          />
        </div>

        {/* intro copy */}
        <div className="text-center md:text-left">
          <p className="mb-3 inline-block rounded-full bg-lav px-4 py-1.5 text-sm font-bold text-plum">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="font-display text-5xl font-extrabold leading-tight text-cocoa sm:text-6xl"
          >
            {hero.greeting}{" "}
            <span className="text-cute-gradient relative inline-block">
              {site.name}
              <svg
                viewBox="0 0 220 14"
                aria-hidden="true"
                className="absolute -bottom-1 left-0 w-full text-boraglow"
                preserveAspectRatio="none"
              >
                <path
                  d="M3 10 C 60 3, 160 3, 217 8"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-4 font-display text-2xl font-bold text-plum">
            {hero.tagline}
          </p>
          <p className="mt-2 text-lg font-bold text-cocoa">
            <span aria-hidden="true" className="text-plum">
              ✦{" "}
            </span>
            <Typewriter />
          </p>
          <p className="mt-2 text-lg font-semibold text-cocoasoft">
            {hero.subline}
          </p>

          <ul className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            {hero.badges.map((badge) => {
              const Icon = badgeIcons[badge.icon];
              return (
                <li
                  key={badge.label}
                  className="squishy flex items-center gap-2 rounded-full border-2 border-lavdeep bg-white px-4 py-1.5 text-sm font-bold text-cocoa shadow-[4px_4px_0_0_var(--color-lav)]"
                >
                  <Icon className="size-4 text-boradeep" aria-hidden="true" />
                  {badge.label}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            {hero.ctas.map((cta) =>
              cta.primary ? (
                <a
                  key={cta.href}
                  href={cta.href}
                  className="squishy inline-flex items-center gap-2 rounded-full bg-plum px-7 py-3 font-display text-lg font-bold text-white shadow-[6px_6px_0_0_var(--color-lavdeep)]"
                >
                  {cta.label}
                  <ArrowDown className="size-5" aria-hidden="true" />
                </a>
              ) : (
                <a
                  key={cta.href}
                  href={cta.href}
                  className="squishy inline-flex items-center gap-2 rounded-full border-2 border-lavdeep bg-white px-7 py-3 font-display text-lg font-bold text-plum shadow-[6px_6px_0_0_var(--color-lav)]"
                >
                  {cta.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
