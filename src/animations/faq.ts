import { type Variants } from 'framer-motion';

const spring = { type: 'spring', stiffness: 110, damping: 22, mass: 0.7 } as const;

interface FAQVariants {
  container: Variants;
  items: Variants;
  item: Variants;
}

export const faqVariants: FAQVariants = {
  container: {
    hidden: {},
    show:   { transition: { staggerChildren: 0.08, delayChildren: 0.03 } },
  },
  items: {
    hidden: {},
    show:   { transition: { staggerChildren: 0.06, delayChildren: 0.03 } },
  },
  item: {
    hidden: { opacity: 0, y: 10 },
    show:   { opacity: 1, y: 0,  transition: spring },
  },
};
