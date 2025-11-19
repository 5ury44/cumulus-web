import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import LogoCarousel from "@/components/LogoCarousel";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black">
      {/* Global Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <CTA />
      </div>
    </main>
  );
}
