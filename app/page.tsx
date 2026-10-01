import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { ArmyCorner } from "@/components/ArmyCorner";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { GlowHeartDivider } from "@/components/Doodles";
import { HeartBursts, SparkleTrail, BackToTop } from "@/components/Playful";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <div className="mx-auto max-w-5xl px-6 pb-2 pt-10">
          <GlowHeartDivider />
        </div>
        <About />
        <Journey />
        <ArmyCorner />
        <Gallery />
      </main>
      <Footer />
      <BackToTop />
      <HeartBursts />
      <SparkleTrail />
    </>
  );
}
