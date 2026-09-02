import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { fadeIn } from './data/animations';
import {
  Navbar,
  Bio,
  WorkExperience,
  InvolvementExperience,
  Projects,
  NotFound,
} from './components';

export default function App({ pathname = '/' }: { pathname?: string }) {
  const isNotFound = pathname !== '/';

  return (
    <div className="min-h-screen antialiased">
      {isNotFound ? (
        <NotFound />
      ) : (
        <>
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
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
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Projects />
            </motion.section>
          </div>
          <footer
            className="mx-auto max-w-2xl px-5 pb-8 text-center font-manrope text-xs text-gray-500"
          >
            <a
              href="/llms.txt"
              className="border-b border-dotted border-[#120315] transition-opacity hover:opacity-60"
            >
              for agents
            </a>
          </footer>
        </>
      )}
      <Analytics />
    </div>
  );
}
