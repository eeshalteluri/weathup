import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BackedBySection from "./components/BackedBySection";
import WhyWealthUpSection from "./components/WhyWealthUpSection";
import CTASection from "./components/CTASection";
import HowItWorksSection from "./components/HowItWorksSection";
import MultipleWaysSection from "./components/MultipleWaysSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-red-300">
      <Navbar />
      <HeroSection />
      <BackedBySection />
      <MultipleWaysSection />
      <WhyWealthUpSection />
      <CTASection />
      <HowItWorksSection />
    </div>
  );
}
