'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useAppStore } from '@/store/store';

const transition = { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] };

export function LocaleTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useAppStore((s) => s.locale);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={locale}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={transition}
        style={{ willChange: 'opacity, transform' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
