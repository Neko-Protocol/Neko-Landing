import type { Variants } from 'framer-motion';

// Slightly softer spring for hero — a touch more dramatic on first load
const spring = { type: 'spring', stiffness: 85, damping: 17, mass: 0.8 } as const;

interface HeroVariants {
  container: Variants;
  badge: Variants;
  title: Variants;
  description: Variants;
  buttons: Variants;
}

export const heroVariants: HeroVariants = {
  container: {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.08,
        staggerChildren: 0.07,
      },
    },
  },
  badge: {
    hidden: { opacity: 0, y: -10, scale: 0.96 },
    show:   { opacity: 1, y: 0,   scale: 1,    transition: spring },
  },
  title: {
    hidden: { opacity: 0, y: 18 },
    show:   { opacity: 1, y: 0,  transition: spring },
  },
  description: {
    hidden: { opacity: 0, y: 12 },
    show:   { opacity: 1, y: 0,  transition: spring },
  },
  buttons: {
    hidden: { opacity: 0, y: 10 },
    show:   { opacity: 1, y: 0,  transition: spring },
  },
};

export type { HeroVariants };
