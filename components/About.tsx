import { site } from "@/data/site";
import { Wave, HeartDoodle, SparkleDoodle, BowDoodle, Floaties } from "./Doodles";

export function About() {
  const { about } = site;
  return (
    <>
      <Wave fill="#ffe3ef" />
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative scroll-mt-28 bg-blush"
      >
        <Floaties />
        <div className="relative mx-auto max-w-3xl px-6 py-14 md:py-20">
          <HeartDoodle
            className="absolute right-8 top-10 size-8 text-blushdeep"
            delay="1s"
          />
          <SparkleDoodle
            className="absolute bottom-12 left-6 size-6 text-white"
            delay="2s"
          />
          <BowDoodle className="mx-auto mb-3 size-12 text-rose" delay="0.5s" />
          <div className="sticker sticker-peach squishy p-8 md:p-10">
            <h2
              id="about-heading"
              className="text-cute-gradient font-display text-3xl font-extrabold md:text-4xl"
            >
              {about.heading}
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-cocoasoft">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blush">
        <Wave fill="#fffaf4" flip />
      </div>
    </>
  );
}
