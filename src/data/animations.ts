import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay,
      ease: [0.14, 0.61, 0.1, 1.02],
    },
  }),
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.09,
    },
  },
};

export const slideIn: Variants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.14, 0.61, 0.1, 1.02],
    },
  },
};
