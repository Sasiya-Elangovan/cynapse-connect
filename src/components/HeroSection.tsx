import { motion } from 'framer-motion';
import { Calendar, ChevronDown, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(330 100% 60%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(330 100% 60%) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      
      {/* Floating Orbs with neon colors */}
      <div className="floating-orb w-[500px] h-[500px] bg-primary/30 top-1/4 -left-64 animate-pulse-slow" />
      <div className="floating-orb w-96 h-96 bg-secondary/25 bottom-1/4 -right-48 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-72 h-72 bg-accent/20 top-1/3 right-1/4 animate-float" />
      <div className="floating-orb w-64 h-64 bg-secondary/15 bottom-1/3 left-1/4 animate-float" style={{ animationDelay: '3s' }} />

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
            className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8 border-primary/30"
          >
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold uppercase tracking-wider">9th February 2026</span>
          </motion.div>

          {/* Main Title - Hacksprint style stacked text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-none">
              <span className="block text-neon-pink">CYN</span>
              <span className="block text-neon-green">APSE</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 text-foreground/90 font-bold">
                2K26
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-4"
          >
            <p className="text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase font-medium">
              A National Level Technical Symposium
            </p>
          </motion.div>

          {/* Organizer Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-secondary" />
              <p className="text-sm md:text-base text-secondary font-bold uppercase tracking-wider">
                Organized by
              </p>
              <Zap className="w-4 h-4 text-secondary" />
            </div>
            <p className="text-base md:text-lg font-semibold text-foreground/90 mt-1">
              Department of Computer Science and Engineering
            </p>
            <p className="text-sm md:text-base text-primary/90 font-medium">
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
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 ticker-wrap">
        <div className="ticker">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              <span className="ticker-item">National Level</span>
              <span className="ticker-item">Technical Events</span>
              <span className="ticker-item">Coding</span>
              <span className="ticker-item">Debugging</span>
              <span className="ticker-item">Paper Presentation</span>
              <span className="ticker-item">Quiz</span>
              <span className="ticker-item">9th Feb 2026</span>
              <span className="ticker-item">RMK Engineering College</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
