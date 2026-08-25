import { motion } from 'framer-motion';
import { fadeIn, staggerChildren } from '../data/animations';

export function NotFound() {
  return (
    <motion.main
      className="mx-auto min-h-screen max-w-2xl px-5 pt-48 font-manrope lowercase"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={fadeIn} className="mb-4 text-sm text-gray-500">
        404
      </motion.p>
      <motion.h1 variants={fadeIn} className="text-3xl font-bold tracking-normal">
        page not found.
      </motion.h1>
      <motion.p variants={fadeIn} className="mt-6 text-sm md:text-base">
        this page doesn't exist or may have moved.
      </motion.p>
      <motion.div variants={fadeIn} className="mt-8">
        <a
          href="/"
          className="border-b-2 border-dotted border-[#120315] transition-opacity hover:opacity-60"
        >
          go back home
        </a>
      </motion.div>
    </motion.main>
  );
}
