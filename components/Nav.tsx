import { Heart } from "lucide-react";
import { site } from "@/data/site";

export function Nav() {
  return (
    <header className="sticky top-3 z-50 px-4 sm:top-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-fit max-w-full items-center gap-1 rounded-full border-2 border-lavdeep bg-white/85 py-2 pl-4 pr-2 shadow-[6px_6px_0_0_var(--color-lavdeep),0_0_28px_rgba(139,92,246,0.35)] backdrop-blur"
      >
        <a
          href="#top"
          className="mr-1 flex items-center gap-2 rounded-full font-display text-lg font-bold text-cocoa"
        >
          <span className="grid size-8 place-items-center rounded-full bg-lav">
            <Heart className="size-4 text-boradeep" aria-hidden="true" />
          </span>
          <span>Sunidhi</span>
        </a>
        <ul className="flex items-center gap-1 overflow-x-auto">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link squishy block whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-bold text-cocoasoft transition-colors hover:bg-lav hover:text-cocoa sm:px-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
