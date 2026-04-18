import type { Variants } from 'framer-motion';

// Overdamped spring — smooth deceleration, no bounce, natural feel
const spring = { type: 'spring', stiffness: 100, damping: 20, mass: 0.8 } as const;

export const SCROLL_VIEWPORT = {
  once: false,
  amount: 0.08,
  margin: '-40px',
} as const;

export interface ScrollSectionVariants {
  container: Variants;
  header: Variants;
  item: Variants;
  items: Variants;
}

export const scrollSectionVariants: ScrollSectionVariants = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.03,
      },
    },
  },
  header: {
    hidden: { opacity: 0, y: 10 },
    show:   { opacity: 1, y: 0,  transition: spring },
  },
  items: {
    hidden: {},
    show:   { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  },
  item: {
    hidden: { opacity: 0, y: 12 },
    show:   { opacity: 1, y: 0,  transition: spring },
  },
};

export const problemCardVariants = {
  left:   {
    hidden: { opacity: 0, x: -16 },
    show:   { opacity: 1, x: 0,  transition: spring },
  },
  center: {
    hidden: { opacity: 0, y: 16 },
    show:   { opacity: 1, y: 0,  transition: spring },
  },
  right:  {
    hidden: { opacity: 0, x: 16 },
    show:   { opacity: 1, x: 0,  transition: spring },
  },
} as const;
