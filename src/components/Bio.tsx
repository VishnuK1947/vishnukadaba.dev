import { motion } from 'framer-motion';
import { fadeIn } from '../data/animations';

export function Bio() {
  return (
    <motion.div
      className="space-y-8 pb-12 pt-16 text-left font-manrope"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <p className="text-[1.07rem]">
        I'm a Software Engineer and Patented ML Researcher based in Los Angeles
        specializing in full-stack, applied AI, MLE workflows, and
        Entrepreneurship. I study{' '}
        <a
          href="https://www.cs.usc.edu/academic-programs/undergrad/computer-engineering-and-computer-science/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Computer Engineering and Computer Science
        </a>{' '}
        at USC on the Trustee Scholarship.
      </p>

      <p className="text-[1.07rem]">
        I lead Actives' Development and Build Sprints at{' '}
        <a
          href="https://uscsep.com/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          USC's flagship startup incubator
        </a>{' '}
        and build ML models for Neuroscience research. I have attended and won
        at hackathons like the{' '}
        <a
          href="https://www.anthropic.com/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anthropic
        </a>{' '}
        Hackathon (1st place),{' '}
        <a
          href="https://www.llamastackchallenge.com/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          8VC x Llama
        </a>{' '}
        Hackathon (1st Place),{' '}
        <a
          href="https://hackmit.org/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          HackMIT
        </a>{' '}
        (Education Track 1st Place),{' '}
        <a
          href="https://lahacks.com/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LAHacks
        </a>{' '}
        (MLH Winner). I have also built startups like{' '}
        <a
          href="https://useideavine.com/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          IdeaVine
        </a>{' '}
        (AI Mindmapping),{' '}
        <a
          href="https://usevector.app/"
          className="border-b-2 border-dotted border-purple-300 hover:border-purple-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vector
        </a>{' '}
        (AI Action-Copilot for In-App Support), and Handover (Code Documentation
        Automation).
      </p>

      <p className="text-[1.07rem]">
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