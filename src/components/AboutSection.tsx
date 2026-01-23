import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Users, Trophy, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Innovation',
    description: 'Explore cutting-edge technologies and groundbreaking ideas',
    color: 'pink',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Connect with brilliant minds from across the nation',
    color: 'green',
  },
  {
    icon: Trophy,
    title: 'Competition',
    description: 'Compete in challenging events and showcase your skills',
    color: 'purple',
  },
  {
    icon: Lightbulb,
    title: 'Learning',
    description: 'Gain knowledge from industry experts and peers',
    color: 'pink',
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-secondary/10 group-hover:bg-secondary/20',
          icon: 'text-secondary',
          glow: 'group-hover:shadow-[0_0_40px_hsl(120_100%_50%/0.3)]',
          border: 'border-secondary/20 hover:border-secondary/50',
        };
      case 'purple':
        return {
          bg: 'bg-accent/10 group-hover:bg-accent/20',
          icon: 'text-accent',
          glow: 'group-hover:shadow-[0_0_40px_hsl(280_100%_65%/0.3)]',
          border: 'border-accent/20 hover:border-accent/50',
        };
      default:
        return {
          bg: 'bg-primary/10 group-hover:bg-primary/20',
          icon: 'text-primary',
          glow: 'group-hover:shadow-[0_0_40px_hsl(330_100%_60%/0.3)]',
          border: 'border-primary/20 hover:border-primary/50',
        };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="floating-orb w-[500px] h-[500px] bg-primary/20 top-0 right-0 animate-pulse-slow" />
        <div className="floating-orb w-80 h-80 bg-secondary/15 bottom-0 left-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </motion.div>
      
      <div className="container mx-auto px-6">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            className="inline-block text-primary font-bold uppercase tracking-widest text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            About The Event
          </motion.span>
          <h2 className="section-heading">
            Redefining Tech Excellence
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            CYNAPSE 2K26 is a prestigious national-level technical symposium that brings together 
            the brightest minds in technology. Join us for an immersive experience of innovation, 
            competition, and learning that will shape the future of technology.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={`glass-card p-8 text-center group transition-all duration-500 cursor-pointer ${colors.glow} ${colors.border}`}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${colors.bg} transition-colors duration-300`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <feature.icon className={`w-8 h-8 ${colors.icon}`} />
                </motion.div>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
