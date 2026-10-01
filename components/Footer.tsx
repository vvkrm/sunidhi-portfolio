import { Heart } from "lucide-react";
import { site } from "@/data/site";
import { Scallop } from "./Doodles";

export function Footer() {
  return (
    <>
      <Scallop fill="#5c4033" />
      <footer className="bg-cocoa px-6 py-10 text-center">
        <p className="flex items-center justify-center gap-2 font-display text-2xl font-extrabold text-cream">
          <Heart className="animate-wiggle size-6 text-blushdeep" aria-hidden="true" />
          {site.footer.line}
          <Heart className="animate-wiggle size-6 text-blushdeep" aria-hidden="true" />
        </p>
        <p className="mt-2 text-sm font-semibold text-cream/70">
          {site.footer.credit}
        </p>
      </footer>
    </>
  );
}
