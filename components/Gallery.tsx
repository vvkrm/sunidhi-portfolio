import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { site } from "@/data/site";
import { HeartDoodle, BowDoodle, Floaties } from "./Doodles";

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
        <div className="absolute -left-20 bottom-10 size-64 rounded-full bg-blush/60 blur-3xl" />
        <div className="absolute -right-24 top-16 size-72 rounded-full bg-peach/50 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-14 md:py-20">
        <BowDoodle className="mx-auto mb-3 size-12 text-rose" delay="1.4s" />
        <h2
          id="gallery-heading"
          className="text-cute-gradient text-center font-display text-3xl font-extrabold md:text-4xl"
        >
          {gallery.heading}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.photos.map((photo, i) => (
            <figure
              key={photo.src}
              className={`sticker washi squishy p-3 pb-5 ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={878}
                height={1120}
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
              <figcaption className="pt-4 text-center font-display text-xl font-bold text-cocoasoft">
                {photo.caption} ♡
              </figcaption>
            </figure>
          ))}

          {Array.from({ length: gallery.emptySlots }).map((_, i) => (
            <figure
              key={`empty-${i}`}
              className={`squishy rounded-[2rem] border-4 border-dashed border-blushdeep bg-white/60 p-3 pb-5 ${
                i % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
              aria-label={gallery.emptyCaption}
            >
              <div className="grid aspect-[3/4] w-full place-items-center rounded-2xl bg-blush/50">
                <ImagePlus
                  className="size-12 text-blushdeep"
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
          className="mx-auto mt-10 size-8 text-blushdeep"
          delay="0.9s"
        />
      </div>
    </section>
  );
}
