import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, ChevronDown, Zap, MapPin } from 'lucide-react';
import { useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
      />
      
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
      
      {/* Floating Orbs with enhanced animation */}
      <motion.div 
        className="floating-orb w-[600px] h-[600px] bg-primary/30 top-1/4 -left-80"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="floating-orb w-[500px] h-[500px] bg-secondary/25 bottom-1/4 -right-64"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      <motion.div 
        className="floating-orb w-80 h-80 bg-accent/20 top-1/3 right-1/4"
        animate={{ 
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ opacity, y, scale }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Event Date Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full mb-8 border-primary/30"
          >
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold uppercase tracking-widest">9th February 2026</span>
            <span className="w-px h-4 bg-muted-foreground/30" />
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">Chennai</span>
          </motion.div>

          {/* Main Title with dramatic reveal */}
          <motion.div
            variants={titleVariants}
            className="mb-8"
          >
            <motion.h1 
              className="font-display text-6xl md:text-8xl lg:text-9xl font-black leading-none"
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '0em', opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <motion.span 
                className="text-neon-pink inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                CYN
              </motion.span>
              <motion.span 
                className="text-neon-green inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                APSE
              </motion.span>
              <motion.span 
                className="text-foreground/90 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                2K26
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle with reveal */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <p className="text-lg md:text-2xl text-muted-foreground tracking-[0.3em] uppercase font-medium">
              A National Level Technical Symposium
            </p>
          </motion.div>

          {/* Organizer Info */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-secondary" />
              <p className="text-sm md:text-base text-secondary font-bold uppercase tracking-wider">
                Organized by
              </p>
              <Zap className="w-4 h-4 text-secondary" />
            </div>
            <motion.p 
              className="text-base md:text-xl font-semibold text-foreground/90 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Department of Computer Science and Engineering
            </motion.p>
            <motion.p 
              className="text-sm md:text-lg text-primary/90 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              RMK Engineering College
            </motion.p>
          </motion.div>

          {/* CTA Buttons with enhanced animations */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a 
              href="#events" 
              className="btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Register Now</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a 
              href="#about" 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Events
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3 text-muted-foreground cursor-pointer"
            onClick={() => document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs tracking-[0.3em] uppercase font-medium">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-3 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

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
