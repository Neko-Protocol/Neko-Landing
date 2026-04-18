'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/i18n/i18n';
import { useAppStore } from '@/store/store';
import { BentoCard } from '@/components/ui/bento/BentoCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BENTO_GRID_CLASS, FEATURE_CARDS } from '@/constants/features';
import { scrollSectionVariants, SCROLL_VIEWPORT } from '@/animations/scrollSection';
import { cn } from '@/utils/cn';

const spring = { type: 'spring', stiffness: 100, damping: 20, mass: 0.8 } as const;

const cardVariants = [
  { hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0, transition: spring } },
  { hidden: { opacity: 0, x:  14 }, show: { opacity: 1, x: 0, transition: spring } },
  { hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0, transition: spring } },
  { hidden: { opacity: 0, x:  14 }, show: { opacity: 1, x: 0, transition: spring } },
];

export function FeaturesSection({ className }: { className?: string }) {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  return (
    <section
      id="features"
      className={cn('mx-auto max-w-6xl px-3 py-12 max-[390px]:py-10 sm:px-6 sm:py-24', className)}
    >
      <motion.div
        variants={scrollSectionVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: SCROLL_VIEWPORT.once, amount: SCROLL_VIEWPORT.amount, margin: SCROLL_VIEWPORT.margin }}
      >
        <motion.div variants={scrollSectionVariants.header}>
          <SectionHeader
            title={<>{t('features.headlineLine1')}<br />{t('features.headlineLine2')}</>}
            subtitle={t('features.subheadline')}
            as="h2"
            titleClassName="text-2xl sm:text-3xl md:text-4xl"
            subtitleClassName="text-sm sm:text-base"
          />
        </motion.div>

        <div className={BENTO_GRID_CLASS}>
          {FEATURE_CARDS.map((card, idx) => {
            const { gridClass, ...cardProps } = card;
            return (
              <motion.div
                key={card.titleKey}
                variants={cardVariants[idx] ?? scrollSectionVariants.item}
                className={cn(gridClass, 'h-full min-h-0')}
              >
                <BentoCard {...cardProps} className="h-full" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
