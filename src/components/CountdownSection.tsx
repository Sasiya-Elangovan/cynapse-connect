import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownSection = () => {
  const eventDate = new Date('2026-02-09T09:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasStarted, setHasStarted] = useState(false);

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

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      <div className="floating-orb w-96 h-96 bg-primary/20 top-0 left-1/4" />
      <div className="floating-orb w-72 h-72 bg-secondary/15 bottom-0 right-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
            <span className="text-neon-pink">Event</span>{' '}
            <span className="text-neon-green">Begins In</span>
          </h2>

          {hasStarted ? (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="glass p-8 rounded-2xl border-primary/30 inline-block"
            >
              <p className="text-2xl md:text-4xl font-display font-bold text-neon-green animate-pulse">
                Event has started!
              </p>
            </motion.div>
          ) : (
            <>
              {/* Countdown blocks */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
                {timeBlocks.map((block, index) => (
                  <motion.div
                    key={block.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-4 md:p-6 rounded-2xl border-primary/30 min-w-[80px] md:min-w-[120px]"
                  >
                    <div className="text-3xl md:text-5xl font-display font-black text-neon-pink mb-1">
                      {String(block.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground font-medium">
                      {block.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-secondary font-bold uppercase tracking-wider"
              >
                Don't Miss Out! The Countdown Is On!
              </motion.p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
