import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socialLinks';
import { fadeIn } from '../data/animations';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      variants={fadeIn}
      custom={0.16}
      initial="hidden"
      animate="visible"
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white py-4' : 'py-16'
      }`}
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between px-5">
        <h1 className="text-3xl font-bold tracking-normal font-manrope">Vishnu Kadaba</h1>
        <div className="flex items-center gap-2">
          {socialLinks.map(link => (
            <button
              key={link.label}
              className="inline-flex h-7 w-7 items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
