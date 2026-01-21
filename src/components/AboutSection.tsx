import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Users, Trophy, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Innovation',
    description: 'Explore cutting-edge technologies and groundbreaking ideas',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Connect with brilliant minds from across the nation',
  },
  {
    icon: Trophy,
    title: 'Competition',
    description: 'Compete in challenging events and showcase your skills',
  },
  {
    icon: Lightbulb,
    title: 'Learning',
    description: 'Gain knowledge from industry experts and peers',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="floating-orb w-96 h-96 bg-secondary/10 top-0 right-0 animate-pulse-slow" />
      
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
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
