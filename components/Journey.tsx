import { HeartHandshake, BookOpen, Stethoscope } from "lucide-react";
import { site } from "@/data/site";
import { StarDoodle, BowDoodle, Floaties } from "./Doodles";

const stopIcons = {
  dream: HeartHandshake,
  grind: BookOpen,
  future: Stethoscope,
} as const;

const stopColors = ["bg-lav", "bg-blush", "bg-boraglow/70"] as const;
const stopShadows = [
  "shadow-[8px_8px_0_0_var(--color-lavdeep)]",
  "shadow-[8px_8px_0_0_var(--color-blushdeep)]",
  "shadow-[8px_8px_0_0_#b9a5f2]",
] as const;

export function Journey() {
  const { journey } = site;
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="relative scroll-mt-28 overflow-hidden"
    >
      <Floaties />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 size-72 rounded-full bg-lav/70 blur-3xl" />
        <div className="absolute -right-20 top-16 size-64 rounded-full bg-mint/50 blur-3xl" />
      </div>
      <StarDoodle
        className="absolute right-[8%] top-16 size-8 text-peach"
        delay="0.8s"
      />
      <div className="relative mx-auto max-w-3xl px-6 py-14 md:py-20">
        <BowDoodle className="mx-auto mb-3 size-12 text-plum" delay="1s" />
        <p className="korean mx-auto mb-4 w-fit rounded-full bg-lav px-4 py-1.5 text-sm font-extrabold tracking-wide text-plum shadow-[3px_3px_0_0_var(--color-lavdeep)]">
          {journey.kicker}
        </p>
        <h2
          id="journey-heading"
          className="text-cute-gradient text-center font-display text-3xl font-extrabold md:text-4xl"
        >
          {journey.heading}
        </h2>
        <p className="mt-2 text-center text-lg font-semibold text-cocoasoft">
          {journey.subheading}
        </p>

        <ol className="relative mt-10 space-y-8 before:absolute before:bottom-4 before:left-[27px] before:top-4 before:w-1.5 before:rounded-full before:bg-lavdeep">
          {journey.stops.map((stop, i) => {
            const Icon = stopIcons[stop.icon];
            return (
              <li key={stop.title} className="relative flex gap-5 pl-1">
                <span
                  className={`relative z-10 grid size-14 shrink-0 place-items-center rounded-full border-4 border-white ${stopColors[i % stopColors.length]} shadow-md`}
                >
                  <Icon className="size-6 text-cocoa" aria-hidden="true" />
                </span>
                <article
                  className={`squishy flex-1 rounded-3xl border-4 border-white bg-white p-6 ${stopShadows[i % stopShadows.length]}`}
                >
                  <p className="inline-block rounded-full bg-cream px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-plum">
                    {stop.tag}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-cocoa">
                    {stop.title}
                  </h3>
                  <p className="mt-1 text-lg leading-relaxed text-cocoasoft">
                    {stop.text}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
