import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { fadeIn } from './data/animations';
import {
  Navbar,
  Bio,
  WorkExperience,
  InvolvementExperience,
  Projects,
} from './components';

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <main className="mx-auto max-w-2xl px-5 pt-24">
        <motion.section
          id="about"
          variants={fadeIn}
          custom={0.25}
          initial="hidden"
          animate="visible"
        >
          <Bio />
        </motion.section>
        <motion.section
          id="work"
          variants={fadeIn}
          custom={0.34}
          initial="hidden"
          animate="visible"
        >
          <WorkExperience />
        </motion.section>
        <motion.section
          id="involvements"
          variants={fadeIn}
          custom={0.43}
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
          custom={0.52}
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
