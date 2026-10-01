"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { site } from "@/data/site";
import { HeartDoodle, BowDoodle, Floaties } from "./Doodles";

type Photo = (typeof site.gallery.photos)[number];

function FlipPolaroid({ photo, tilt }: { photo: Photo; tilt: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={tilt}>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={
          flipped
            ? `Show photo: ${photo.caption}`
            : `Flip photo to read the caption: ${photo.caption}`
        }
        className="flip-card squishy block w-full cursor-pointer"
      >
        <span className="flip-inner" data-flipped={flipped}>
          <span className="flip-face sticker washi washi-bora p-3 pb-5">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={878}
              height={1120}
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
            <span className="block pt-4 text-center font-display text-xl font-bold text-cocoasoft">
              {photo.caption} ♡
            </span>
          </span>
          <span className="flip-face flip-back sticker grid place-items-center p-6 text-center">
            <span>
              <span className="text-cute-gradient block font-display text-2xl font-extrabold">
                {photo.caption}
              </span>
              <span className="mt-2 block text-sm font-bold text-cocoasoft/70">
                tap to flip back ♡
              </span>
            </span>
          </span>
        </span>
      </button>
    </div>
  );
}

export function Gallery() {
  const { gallery } = site;
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative scroll-mt-28 overflow-hidden"
    >
      <Floaties />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 bottom-10 size-64 rounded-full bg-lav/60 blur-3xl" />
        <div className="absolute -right-24 top-16 size-72 rounded-full bg-peach/50 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-14 md:py-20">
        <BowDoodle className="mx-auto mb-3 size-12 text-plum" delay="1.4s" />
        <p className="korean mx-auto mb-4 w-fit rounded-full bg-lav px-4 py-1.5 text-sm font-extrabold tracking-wide text-plum shadow-[3px_3px_0_0_var(--color-lavdeep)]">
          {gallery.kicker}
        </p>
        <h2
          id="gallery-heading"
          className="text-cute-gradient text-center font-display text-3xl font-extrabold md:text-4xl"
        >
          {gallery.heading}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.photos.map((photo, i) => (
            <FlipPolaroid
              key={photo.src}
              photo={photo}
              tilt={i % 2 === 0 ? "-rotate-1" : "rotate-1"}
            />
          ))}

          {Array.from({ length: gallery.emptySlots }).map((_, i) => (
            <figure
              key={`empty-${i}`}
              className={`squishy rounded-[2rem] border-4 border-dashed border-lavdeep bg-white/60 p-3 pb-5 ${
                i % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
              aria-label={gallery.emptyCaption}
            >
              <div className="grid aspect-[3/4] w-full place-items-center rounded-2xl bg-lav/60">
                <ImagePlus
                  className="size-12 text-plum"
                  aria-hidden="true"
                />
              </div>
              <figcaption className="pt-4 text-center font-display text-xl font-bold text-cocoasoft/70">
                {gallery.emptyCaption}
              </figcaption>
            </figure>
          ))}
        </div>

        <HeartDoodle
          className="mx-auto mt-10 size-8 text-plum"
          delay="0.9s"
        />
      </div>
    </section>
  );
}
