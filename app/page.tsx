import { Header } from "../components/portfolio/header";
import { TickerBand } from "../components/portfolio/ticker-band";
import { HeroSection } from "../components/portfolio/hero-section";
import { ExperienceSection } from "../components/portfolio/experience-section";
import { CapabilitiesSection } from "../components/portfolio/capabilities-section";
import { ApproachSection } from "../components/portfolio/approach-section";
import { CoursesSection } from "../components/portfolio/courses-section";
import { ContactSection } from "../components/portfolio/contact-section";
import { Footer } from "../components/portfolio/footer";

export default function Home() {
  return (
    <>
      <Header />
      <TickerBand />
      <main id="top">
        <HeroSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <ApproachSection />
        <CoursesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
