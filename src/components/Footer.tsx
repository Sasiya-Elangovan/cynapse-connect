import { motion } from 'framer-motion';
import { Instagram, Mail, Globe } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/cynapse2k26?igsh=MWI3ZjRmYXB3a3Z5NA==', label: 'Instagram' },
  { icon: Mail, href: 'mailto:cse@rmkec.ac.in', label: 'Email' },
  { icon: Globe, href: '#', label: 'Website' },
];

const Footer = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <footer className="relative py-20 border-t border-primary/20">
      {/* Gradient Line */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'var(--gradient-primary)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.span 
              className="font-display text-5xl font-black"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-neon-pink">CYN</span>
              <span className="text-neon-green">APSE</span>
              <span className="text-foreground/80 text-3xl ml-2">2K26</span>
            </motion.span>
          </motion.div>

          {/* College Info */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-foreground/90 font-semibold text-lg">
              Department of Computer Science & Engineering
            </p>
            <p className="text-muted-foreground">RMK Engineering College</p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mb-10">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`w-12 h-12 rounded-full glass flex items-center justify-center transition-all duration-300 ${
                  index % 2 === 0 
                    ? 'text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_30px_hsl(330_100%_60%/0.4)]'
                    : 'text-muted-foreground hover:text-secondary hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(120_100%_50%/0.4)]'
                }`}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-muted-foreground"
          >
            © 2026 CYNAPSE. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
