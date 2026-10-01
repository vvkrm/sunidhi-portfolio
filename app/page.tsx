import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { ArmyCorner } from "@/components/ArmyCorner";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Journey />
        <ArmyCorner />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
