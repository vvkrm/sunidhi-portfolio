import { Heart } from "lucide-react";
import { site } from "@/data/site";

/**
 * Cute tilted marquee ribbon. Two identical halves make the
 * translateX(-50%) loop seamless. Decorative only.
 */
export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 -rotate-1 overflow-hidden border-y-4 border-white bg-blushdeep/95 py-3 shadow-[0_6px_0_0_var(--color-blush)]"
    >
      <div className="animate-marquee flex w-max">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {site.marquee.map((word) => (
              <span
                key={`${half}-${word}`}
                className="flex items-center gap-3 px-5 font-display text-lg font-extrabold tracking-wide text-white"
              >
                {word}
                <Heart
                  className="size-4 fill-white/90 text-white/90"
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
