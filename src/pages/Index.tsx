import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
