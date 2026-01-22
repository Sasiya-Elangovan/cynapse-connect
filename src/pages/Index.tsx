import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
