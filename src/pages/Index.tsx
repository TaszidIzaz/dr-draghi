import Header from "@/components/Header";
import DevelopmentBanner from "@/components/DevelopmentBanner";
import HeroSection from "@/components/HeroSection";
import LocationsSection from "@/components/LocationsSection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <DevelopmentBanner />
      <HeroSection />
      <LocationsSection />
      <Footer />
    </div>
  );
};

export default Index;
