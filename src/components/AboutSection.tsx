import { motion } from 'framer-motion';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-secondary/10 group-hover:bg-secondary/20',
          icon: 'text-secondary',
          glow: 'group-hover:shadow-[0_0_30px_hsl(120_100%_50%/0.3)]',
        };
      case 'purple':
        return {
          bg: 'bg-accent/10 group-hover:bg-accent/20',
          icon: 'text-accent',
          glow: 'group-hover:shadow-[0_0_30px_hsl(280_100%_65%/0.3)]',
        };
      default:
        return {
          bg: 'bg-primary/10 group-hover:bg-primary/20',
          icon: 'text-primary',
          glow: 'group-hover:shadow-[0_0_30px_hsl(330_100%_60%/0.3)]',
        };
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="floating-orb w-96 h-96 bg-primary/20 top-0 right-0 animate-pulse-slow" />
      <div className="floating-orb w-72 h-72 bg-secondary/15 bottom-0 left-0 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-heading">About The Event</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            CYNAPSE 2K26 is a prestigious national-level technical symposium that brings together 
            the brightest minds in technology. Join us for an immersive experience of innovation, 
            competition, and learning that will shape the future of technology.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card p-6 text-center group transition-all duration-500 ${colors.glow}`}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${colors.bg} transition-colors duration-300`}>
                  <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
