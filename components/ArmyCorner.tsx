import Image from "next/image";
import { Heart, Music } from "lucide-react";
import { site } from "@/data/site";
import { Wave, HeartDoodle, SparkleDoodle, BowDoodle, Floaties } from "./Doodles";

export function ArmyCorner() {
  const { army } = site;
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
            </div>
          </div>
        </div>
      </section>
      <div className="bg-lav">
        <Wave fill="#fffaf4" flip />
      </div>
    </>
  );
}
