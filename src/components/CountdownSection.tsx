import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CountdownSection = () => {
  const eventDate = new Date('2026-02-09T09:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        setHasStarted(true);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section 
      id="countdown"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      <motion.div 
        className="floating-orb w-[500px] h-[500px] bg-primary/20 top-0 left-1/4"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div 
        className="floating-orb w-96 h-96 bg-secondary/15 bottom-0 right-1/4"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ opacity, y }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          {/* Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-display font-bold mb-12"
          >
            <span className="text-neon-pink">Event</span>{' '}
            <span className="text-neon-green">Begins In</span>
          </motion.h2>

          {hasStarted ? (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="glass p-10 rounded-3xl border-primary/30 inline-block"
            >
              <p className="text-3xl md:text-5xl font-display font-bold text-neon-green animate-pulse">
                Event has started!
              </p>
            </motion.div>
          ) : (
            <>
              {/* Countdown blocks */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
                {timeBlocks.map((block, index) => (
                  <motion.div
                    key={block.label}
                    variants={itemVariants}
                    className="glass p-6 md:p-8 rounded-3xl border-primary/30 min-w-[100px] md:min-w-[140px] group hover:border-primary/60 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 40px hsl(330 100% 60% / 0.3)',
                    }}
                  >
                    <motion.div 
                      className="text-4xl md:text-6xl font-display font-black text-neon-pink mb-2"
                      key={block.value}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {String(block.value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-medium">
                      {block.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-secondary font-bold uppercase tracking-wider"
              >
                Don't Miss Out! The Countdown Is On!
              </motion.p>
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CountdownSection;
