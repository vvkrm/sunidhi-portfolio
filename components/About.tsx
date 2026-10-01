import { site } from "@/data/site";
import { Wave, HeartDoodle, SparkleDoodle, BowDoodle, Floaties } from "./Doodles";

export function About() {
  const { about } = site;
  return (
    <>
      <Wave fill="#f1e9ff" />
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative scroll-mt-28 bg-[#f1e9ff]"
      >
        <Floaties />
        <div className="relative mx-auto max-w-3xl px-6 py-14 md:py-20">
          <HeartDoodle
            className="absolute right-8 top-10 size-8 text-boraglow"
            delay="1s"
          />
          <SparkleDoodle
            className="absolute bottom-12 left-6 size-6 text-white"
            delay="2s"
          />
          <BowDoodle className="mx-auto mb-3 size-12 text-plum" delay="0.5s" />
          <p className="korean mx-auto mb-5 w-fit rounded-full bg-white/85 px-4 py-1.5 text-sm font-extrabold tracking-wide text-plum shadow-[3px_3px_0_0_var(--color-lavdeep)]">
            {about.kicker}
          </p>
          <div className="sticker sticker-lav squishy p-8 md:p-10">
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
      <div className="bg-[#f1e9ff]">
        <Wave fill="#fffaf4" flip />
      </div>
    </>
  );
}
