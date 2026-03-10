import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SignatureSection from "@/components/SignatureSection";
import ReservationSection from "@/components/ReservationSection";
import MenuPreview from "@/components/MenuPreview";
import TakeAwaySection from "@/components/TakeAwaySection";
import LunchSection from "@/components/LunchSection";
import AtmosphereSection from "@/components/AtmosphereSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SignatureSection />
        <ReservationSection />
        <MenuPreview />
        <TakeAwaySection />
        <LunchSection />
        <AtmosphereSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
