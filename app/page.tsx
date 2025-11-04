import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import LogoCarousel from "@/components/LogoCarousel";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTA />
    </main>
  );
}
