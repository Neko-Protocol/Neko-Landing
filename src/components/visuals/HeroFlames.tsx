'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const entryTransition = { duration: 0.65, ease: [0.33, 1, 0.68, 1] };
const entry = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: entryTransition,
} as const;

export function HeroFlames() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-0"
      aria-hidden="true"
    >
      {/* Desktop flame — CSS-hidden on mobile, browser skips download via sizes="1px" */}
      <motion.div
        className="absolute bottom-[-2%] left-1/2 hidden w-full max-w-[2400px] -translate-x-1/2 md:block md:h-[65%] lg:h-[70%] xl:h-[75%] 2xl:h-[78%]"
        initial={entry.initial}
        animate={entry.animate}
        transition={entry.transition}
      >
        <Image
          src="/visuals/flames/hero-flames-cropped.png"
          alt=""
          width={3982}
          height={1470}
          className="h-full w-full object-fill"
          priority
          sizes="(max-width: 767px) 1px, 100vw"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-[-2%] left-0 block h-[65%] w-full md:hidden"
        initial={entry.initial}
        animate={entry.animate}
        transition={entry.transition}
      >
        <Image
          src="/visuals/flames/hero-responsive-flames-cropped.png"
          alt=""
          width={3000}
          height={1756}
          className="h-full w-full object-fill"
          priority
          sizes="(max-width: 767px) 100vw, 1px"
        />
      </motion.div>
    </div>
  );
}
