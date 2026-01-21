import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Globe } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:cse@rmkec.ac.in', label: 'Email' },
  { icon: Globe, href: '#', label: 'Website' },
];

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-primary/20">
      {/* Gradient Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'var(--gradient-primary)' }}
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="font-display text-4xl font-black">
              <span className="text-neon-pink">CYN</span>
              <span className="text-neon-green">APSE</span>
              <span className="text-foreground/80 text-2xl ml-2">2K26</span>
            </span>
          </motion.div>

          {/* College Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-foreground/90 font-semibold">
              Department of Computer Science & Engineering
            </p>
            <p className="text-muted-foreground">RMK Engineering College</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`w-10 h-10 rounded-full glass flex items-center justify-center transition-all duration-300 ${
                  index % 2 === 0 
                    ? 'text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(330_100%_60%/0.3)]'
                    : 'text-muted-foreground hover:text-secondary hover:border-secondary/50 hover:shadow-[0_0_20px_hsl(120_100%_50%/0.3)]'
                }`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            © 2026 CYNAPSE. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
