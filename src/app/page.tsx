import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ApiSection from "@/components/sections/ApiSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import TickerSection from "@/components/sections/TickerSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0F0D]">
      <Navbar />  {/* done */}
      <HeroSection /> {/* done */}
      <TickerSection /> {/* done */}
      <StatsSection /> {/* done */}
      <FeaturesSection /> {/* done */}
      <ApiSection /> {/* done */}
      <PricingSection /> {/* done */}
      <FaqSection /> {/* done */}
      <ContactSection /> {/* done */}
      <Footer />
    </main>
  );
}
