import { type Variants } from 'framer-motion';

const spring       = { type: 'spring', stiffness: 100, damping: 20, mass: 0.8 } as const;
const springFast   = { type: 'spring', stiffness: 130, damping: 22, mass: 0.6 } as const;
const springVisual = { type: 'spring', stiffness: 80,  damping: 18, mass: 1.0 } as const;

export interface NavbarVariants {
  topBar: Variants;
  menuButton: Variants;
  logo: Variants;
  topButtons: Variants;
  menuContent: Variants;
  menuSection: Variants;
  menuItem: Variants;
  visual: Variants;
}

export const navbarVariants: NavbarVariants = {
  topBar: {
    hidden: { opacity: 0, y: -10 },
    show:   { opacity: 1, y: 0,   transition: { ...spring, delay: 0.1 } },
  },
  menuButton: {
    hidden: { opacity: 0, x: 8 },
    show:   { opacity: 1, x: 0,  transition: { ...springFast, delay: 0.15 } },
  },
  logo: {
    hidden: { opacity: 0, y: -8 },
    show:   { opacity: 1, y: 0,  transition: { ...spring, delay: 0.15 } },
  },
  topButtons: {
    hidden: { opacity: 0, y: -8 },
    show:   { opacity: 1, y: 0,  transition: { ...spring, delay: 0.2 } },
  },
  menuContent: {
    hidden: {},
    show:   { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  },
  menuSection: {
    hidden: { opacity: 0, y: 10 },
    show:   { opacity: 1, y: 0,  transition: spring },
  },
  menuItem: {
    hidden: { opacity: 0, y: 8 },
    show:   { opacity: 1, y: 0,  transition: springFast },
  },
  visual: {
    hidden: { opacity: 0, y: 16 },
    show:   { opacity: 1, y: 0,  transition: { ...springVisual, delay: 0.25 } },
  },
};

export const navbarVariantsMobile: NavbarVariants = {
  topBar:     navbarVariants.topBar,
  menuButton: navbarVariants.menuButton,
  logo:       navbarVariants.logo,
  topButtons: navbarVariants.topButtons,
  menuContent: {
    hidden: {},
    show:   { transition: { staggerChildren: 0.05, delayChildren: 0.03 } },
  },
  menuSection: {
    hidden: { opacity: 0, y: 8 },
    show:   { opacity: 1, y: 0, transition: spring },
  },
  menuItem: {
    hidden: { opacity: 0, y: 6 },
    show:   { opacity: 1, y: 0, transition: springFast },
  },
  visual: navbarVariants.visual,
};
