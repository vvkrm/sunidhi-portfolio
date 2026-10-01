type DoodleProps = {
  className?: string;
  delay?: string;
  /** Override the float animation (e.g. "animate-drift"). Defaults to "animate-floaty". */
  animateClass?: string;
};

/** Cute floating heart doodle (inline SVG, decorative). */
export function HeartDoodle({
  className = "",
  delay = "0s",
  animateClass = "animate-floaty",
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ animationDelay: delay }}
      className={`${animateClass} ${className}`}
      fill="currentColor"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

/** Cute floating four-point sparkle doodle (inline SVG, decorative). */
export function SparkleDoodle({
  className = "",
  delay = "0s",
  animateClass = "animate-floaty",
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ animationDelay: delay }}
      className={`${animateClass} ${className}`}
      fill="currentColor"
    >
      <path d="M12 2c.6 4.8 2.4 7.6 4.6 9.4 1.5 1.2 3.4 2 5.4 2.6-2 .6-3.9 1.4-5.4 2.6-2.2 1.8-4 4.6-4.6 9.4-.6-4.8-2.4-7.6-4.6-9.4-1.5-1.2-3.4-2-5.4-2.6 2-.6 3.9-1.4 5.4-2.6C9.6 9.6 11.4 6.8 12 2z" />
    </svg>
  );
}

/** Cute floating star doodle (inline SVG, decorative). */
export function StarDoodle({
  className = "",
  delay = "0s",
  animateClass = "animate-floaty",
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ animationDelay: delay }}
      className={`${animateClass} ${className}`}
      fill="currentColor"
    >
      <path d="M12 2l2.9 6.26L21.5 9.3l-4.75 4.87L17.8 21 12 17.77 6.2 21l1.05-6.83L2.5 9.3l6.6-1.04L12 2z" />
    </svg>
  );
}

/** Cute little bow doodle to sit above section titles (inline SVG, decorative). */
export function BowDoodle({
  className = "",
  delay = "0s",
  animateClass = "animate-wiggle",
}: DoodleProps) {
  return (
    <svg
      viewBox="0 0 48 36"
      aria-hidden="true"
      style={{ animationDelay: delay }}
      className={`${animateClass} ${className}`}
      fill="currentColor"
    >
      <path
        d="M24 15 C16 5 5 6 6 14 C7 20 15 21 24 15 Z"
        opacity="0.9"
      />
      <path
        d="M24 15 C32 5 43 6 42 14 C41 20 33 21 24 15 Z"
        opacity="0.9"
      />
      <path
        d="M20 19 L15 30 M28 19 L33 30"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.65"
      />
      <circle cx="24" cy="15" r="4.6" />
      <circle cx="24" cy="15" r="1.8" fill="#fff" opacity="0.85" />
    </svg>
  );
}

/**
 * A scatter of slowly drifting hearts, stars and sparkles.
 * Drop inside any `relative` section; parent should not clip it.
 */
export function Floaties({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <HeartDoodle
        animateClass="animate-drift"
        className="absolute left-[4%] top-[14%] size-7 text-blushdeep"
        delay="0s"
      />
      <SparkleDoodle
        animateClass="animate-drift"
        className="absolute right-[7%] top-[24%] size-6 text-lavdeep"
        delay="1.6s"
      />
      <StarDoodle
        animateClass="animate-drift"
        className="absolute bottom-[16%] left-[9%] size-6 text-peach"
        delay="2.8s"
      />
      <HeartDoodle
        animateClass="animate-drift"
        className="absolute bottom-[10%] right-[10%] size-8 text-blush"
        delay="0.9s"
      />
      <SparkleDoodle
        animateClass="animate-drift"
        className="absolute left-[46%] top-[6%] size-5 text-mint"
        delay="2.1s"
      />
    </div>
  );
}

/**
 * Wavy SVG divider. Place between sections: render it on the *previous*
 * section's background with `fill` set to the *next* section's colour.
 */
export function Wave({
  fill,
  flip = false,
  className = "",
}: {
  fill: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`block h-12 w-full md:h-20 ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,48 C180,90 360,90 540,48 C720,6 900,6 1080,48 C1260,90 1350,70 1440,48 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/**
 * Scalloped SVG divider — a row of soft pastel scallops.
 * Render on the *previous* section's background with `fill` set to the
 * *next* section's colour.
 */
export function Scallop({
  fill,
  className = "",
}: {
  fill: string;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 44"
        preserveAspectRatio="none"
        className="block h-8 w-full md:h-12"
      >
        <path
          d="M0 44 L0 40 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 q30 -38 60 0 L1440 44 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
