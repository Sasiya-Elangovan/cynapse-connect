import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const organizers = [
  {
    name: 'Rithuparan',
    role: 'Event Coordinator',
    phone: '+91 98765 43210',
    email: 'rithuparan@rmkec.ac.in',
  },
  {
    name: 'Agila',
    role: 'Event Coordinator',
    phone: '+91 98765 43211',
    email: 'agila@rmkec.ac.in',
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="floating-orb w-72 h-72 bg-primary/10 top-0 left-1/4 animate-pulse-slow" />

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
              className="glass-card p-6 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="font-display text-2xl font-bold text-gradient">
                  {organizer.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-1">{organizer.name}</h3>
              <p className="text-primary/80 text-sm mb-4">{organizer.role}</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary/60" />
                  <span>{organizer.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary/60" />
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
            className="glass-card p-6 text-center lg:col-span-1"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-gradient" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-1">Venue</h3>
            <p className="text-primary/80 text-sm mb-4">RMK Engineering College</p>
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
