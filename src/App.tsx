import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { fadeIn } from './data/animations';
import {
  ThreeBackground,
  Navbar,
  Bio,
  WorkExperience,
  InvolvementExperience,
  Projects,
} from './components';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen antialiased">
      <ThreeBackground theme={theme as 'light' | 'dark'} />

      <Navbar theme={theme} setTheme={setTheme} />
      <main className="mx-auto max-w-2xl px-4 pt-24 md:px-0">
        <motion.section
          id="about"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Bio />
        </motion.section>
        <motion.section
          id="work"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <WorkExperience />
        </motion.section>
        <motion.section
          id="involvements"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <InvolvementExperience />
        </motion.section>
      </main>
      <div className="mx-auto max-w-5xl px-4 pb-24 md:px-0">
        <motion.section
          id="projects"
          className="pt-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Projects />
        </motion.section>
      </div>
      <Analytics />
    </div>
  );
}