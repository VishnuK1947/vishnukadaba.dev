import { motion } from 'framer-motion';
import { fadeIn } from '../data/animations';

export function Bio() {
  return (
    <motion.div
      className="space-y-8 pb-12 pt-16 text-left font-manrope lowercase"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <p className="text-sm md:text-base">
        I'm a SWE based in LA studying{' '}
        <a
          href="https://www.cs.usc.edu/academic-programs/undergrad/computer-engineering-and-computer-science/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Computer Engineering and Computer Science
        </a>{' '}
        at USC on a full scholarship. I'm grateful to be building for millions of users on {' '}
        <a
          href="https://www.google.com/ai"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Mode
        </a>{' '}at Google currently. I've also worked at {' '}
        <a
          href="https://www.uselemma.ai/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >Lemma</a>{' '}(YC F25) as a Founding Engineer and built products like{' '}
        <a
          href="https://usevector.app/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vector
        </a>{' '} and{' '}
        <a
          href="https://useideavine.com/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          IdeaVine
        </a>{' '}for thousands of users. 
      </p>

      <p className="text-sm md:text-base">
        Reach out to me at{' '}
        <a
          href="mailto:vkadaba@usc.edu"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          vkadaba@usc.edu
        </a>{' '}
        if you want to collaborate on something exciting!
      </p>
    </motion.div>
  );
}
