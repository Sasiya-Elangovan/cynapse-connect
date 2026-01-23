import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const organizers = [
  {
    name: 'Rithuparan',
    role: 'Event Coordinator',
    phone: '+91 91506 24440',
    email: 'rithuparan@rmkec.ac.in',
    color: 'pink',
  },
  {
    name: 'Akila',
    role: 'Event Coordinator',
    phone: '+91 89253 99098',
    email: 'akila@rmkec.ac.in',
    color: 'green',
  },
];

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -60]);

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

  const cardVariants = {
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

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="floating-orb w-80 h-80 bg-primary/15 top-0 left-1/4 animate-pulse-slow" />
        <div className="floating-orb w-72 h-72 bg-secondary/10 bottom-0 right-1/4 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-primary font-bold uppercase tracking-widest text-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Get In Touch
          </motion.span>
          <h2 className="section-heading">Contact Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            If you have any queries, feel free to ask our respective event organizers.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Organizer Cards */}
          {organizers.map((organizer, index) => (
            <motion.div
              key={organizer.name}
              variants={cardVariants}
              className={`glass-card p-8 text-center transition-all duration-500 ${
                organizer.color === 'green' 
                  ? 'border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_50px_hsl(120_100%_50%/0.25)]'
                  : 'border-primary/30 hover:border-primary/60 hover:shadow-[0_0_50px_hsl(330_100%_60%/0.25)]'
              }`}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div 
                className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  organizer.color === 'green' 
                    ? 'bg-gradient-to-br from-secondary/20 to-accent/20' 
                    : 'bg-gradient-to-br from-primary/20 to-accent/20'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className={`font-display text-4xl font-black ${
                  organizer.color === 'green' ? 'text-neon-green' : 'text-neon-pink'
                }`}>
                  {organizer.name.charAt(0)}
                </span>
              </motion.div>
              <h3 className="font-display text-xl font-bold mb-1 text-foreground">{organizer.name}</h3>
              <p className={`text-sm font-semibold mb-6 uppercase tracking-wider ${
                organizer.color === 'green' ? 'text-secondary' : 'text-primary'
              }`}>
                {organizer.role}
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <motion.div 
                  className="flex items-center justify-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <Phone className={`w-4 h-4 ${organizer.color === 'green' ? 'text-secondary/60' : 'text-primary/60'}`} />
                  <a href={`tel:${organizer.phone.replace(/\s/g, '')}`} className="hover:text-foreground transition-colors">
                    {organizer.phone}
                  </a>
                </motion.div>
                <motion.div 
                  className="flex items-center justify-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <Mail className={`w-4 h-4 ${organizer.color === 'green' ? 'text-secondary/60' : 'text-primary/60'}`} />
                  <a href={`mailto:${organizer.email}`} className="hover:text-foreground transition-colors">
                    {organizer.email}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* College Info Card */}
          <motion.div
            variants={cardVariants}
            className="glass-card p-8 text-center lg:col-span-1 border-accent/30 hover:border-accent/60 transition-all duration-500 hover:shadow-[0_0_50px_hsl(280_100%_65%/0.25)]"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <MapPin className="w-10 h-10 text-neon-purple" />
            </motion.div>
            <h3 className="font-display text-xl font-bold mb-1 text-foreground">Venue</h3>
            <p className="text-sm font-semibold mb-6 text-accent uppercase tracking-wider">RMK Engineering College</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              RSM Nagar, Kavaraipettai<br />
              Chennai - 601 206<br />
              Tamil Nadu, India
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
