import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

const navLinks = [
  { name: 'About', href: '#about', sectionId: 'about' },
  { name: 'Events', href: '#events', sectionId: 'events' },
  { name: 'Bus Route', href: '#bus-route', sectionId: 'bus-route' },
  { name: 'Contact', href: '#contact', sectionId: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((link) => link.sectionId));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="font-display text-xl font-black"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-neon-pink">CYN</span>
          <span className="text-neon-green">APSE</span>
          <span className="text-foreground">2K26</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeSection === link.sectionId
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.name}
              {/* Active indicator */}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5"
                initial={false}
                animate={{
                  scaleX: activeSection === link.sectionId ? 1 : 0,
                  opacity: activeSection === link.sectionId ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'var(--gradient-primary)',
                  boxShadow: '0 0 10px hsl(330 100% 60% / 0.8)',
                }}
              />
            </a>
          ))}
          <motion.a
            href="#events"
            onClick={(e) => handleNavClick(e, '#events')}
            className="btn-primary text-sm py-2 px-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-3 mx-4 rounded-2xl overflow-hidden border-primary/20"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`py-2 uppercase tracking-wider font-medium text-sm transition-colors ${
                    activeSection === link.sectionId
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#events"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="btn-primary text-center text-sm mt-2"
                onClick={(e) => handleNavClick(e, '#events')}
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
