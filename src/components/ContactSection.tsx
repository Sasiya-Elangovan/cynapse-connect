import { motion } from 'framer-motion';
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="floating-orb w-72 h-72 bg-primary/15 top-0 left-1/4 animate-pulse-slow" />
      <div className="floating-orb w-64 h-64 bg-secondary/10 bottom-0 right-1/4 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Contact Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            If you have any queries, feel free to ask our respective event organizers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Organizer Cards */}
          {organizers.map((organizer, index) => (
            <motion.div
              key={organizer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-6 text-center transition-all duration-500 ${
                organizer.color === 'green' 
                  ? 'border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_40px_hsl(120_100%_50%/0.2)]'
                  : 'border-primary/30 hover:border-primary/60 hover:shadow-[0_0_40px_hsl(330_100%_60%/0.2)]'
              }`}
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                organizer.color === 'green' 
                  ? 'bg-gradient-to-br from-secondary/20 to-accent/20' 
                  : 'bg-gradient-to-br from-primary/20 to-accent/20'
              }`}>
                <span className={`font-display text-3xl font-black ${
                  organizer.color === 'green' ? 'text-neon-green' : 'text-neon-pink'
                }`}>
                  {organizer.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-1 text-foreground">{organizer.name}</h3>
              <p className={`text-sm font-semibold mb-4 uppercase tracking-wider ${
                organizer.color === 'green' ? 'text-secondary' : 'text-primary'
              }`}>
                {organizer.role}
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Phone className={`w-4 h-4 ${organizer.color === 'green' ? 'text-secondary/60' : 'text-primary/60'}`} />
                  <span>{organizer.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className={`w-4 h-4 ${organizer.color === 'green' ? 'text-secondary/60' : 'text-primary/60'}`} />
                  <span>{organizer.email}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* College Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 text-center lg:col-span-1 border-accent/30 hover:border-accent/60 transition-all duration-500 hover:shadow-[0_0_40px_hsl(280_100%_65%/0.2)]"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-neon-purple" />
            </div>
            <h3 className="font-display text-xl font-bold mb-1 text-foreground">Venue</h3>
            <p className="text-sm font-semibold mb-4 text-accent uppercase tracking-wider">RMK Engineering College</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              RSM Nagar, Kavaraipettai<br />
              Chennai - 601 206<br />
              Tamil Nadu, India
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
