import { motion } from 'framer-motion';
import { Calendar, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Floating Orbs */}
      <div className="floating-orb w-96 h-96 bg-primary/20 top-1/4 -left-48 animate-pulse-slow" />
      <div className="floating-orb w-80 h-80 bg-secondary/20 bottom-1/4 -right-40 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-64 h-64 bg-primary/10 top-1/3 right-1/4 animate-float" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Event Date Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8"
          >
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">9th February 2026</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          >
            <span className="text-gradient">CYNAPSE</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-foreground/80">
              2K26
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 tracking-widest uppercase"
          >
            A National Level Technical Symposium
          </motion.p>

          {/* Organizer Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-sm md:text-base text-muted-foreground/80">
              Organized by
            </p>
            <p className="text-base md:text-lg font-medium text-foreground/90 mt-1">
              Department of Computer Science and Engineering
            </p>
            <p className="text-sm md:text-base text-primary/80">
              RMK Engineering College
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#events" className="btn-primary">
              Register Now
            </a>
            <a href="#events" className="btn-secondary">
              Explore Events
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
