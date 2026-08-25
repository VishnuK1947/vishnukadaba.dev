import { motion } from 'framer-motion';
import { fadeIn, staggerChildren } from '../data/animations';

export function Bio() {
  return (
    <motion.div
      className="space-y-8 pb-12 pt-16 text-left font-manrope lowercase"
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={fadeIn} className="text-sm md:text-base">
        Based in Los Angeles. studying cecs at USC on a full scholarship.
      </motion.p>

      <motion.p variants={fadeIn} className="text-sm md:text-base">
        I'm grateful to have worked on{' '}
        <a
          href="https://www.google.com/ai"
          className="border-b-2 border-dotted border-[#120315] hover:border-[#120315] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Mode
        </a>{' '}at Google and at{' '}
        <a
          href="https://www.uselemma.ai/"
          className="border-b-2 border-dotted border-[#120315] hover:border-[#120315] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >Lemma (YC F25)</a>,{' '}
        <a
          href="https://www.expedia.com/"
          className="border-b-2 border-dotted border-[#120315] hover:border-[#120315] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Expedia
        </a>
        ,{' '}
        <a
          href="https://www.vellum.ai/"
          className="border-b-2 border-dotted border-[#120315] hover:border-[#120315] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vellum
        </a>
        , and{' '}
        <a
          href="https://www.ushur.com/"
          className="border-b-2 border-dotted border-[#120315] hover:border-[#120315] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ushur
        </a>
        . I've also built products like{' '}
        <a
          href="https://usevector.vercel.app/"
          className="border-b-2 border-dotted border-[#120315] hover:border-[#120315] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vector
        </a>{' '} and{' '}
        <a
          href="https://useideavine.com/"
          className="border-b-2 border-dotted border-[#120315] hover:border-[#120315] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          IdeaVine
        </a>{' '}for thousands of users. 
      </motion.p>

      <motion.p variants={fadeIn} className="text-sm md:text-base">
        My mission is to build things that deeply impact millions of people,
        bringing the world forward and closer.
      </motion.p>
    </motion.div>
  );
}
