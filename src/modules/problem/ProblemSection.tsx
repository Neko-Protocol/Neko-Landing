'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from '@/i18n/i18n';
import { useAppStore } from '@/store/store';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { scrollSectionVariants, problemCardVariants, SCROLL_VIEWPORT } from '@/animations/scrollSection';
import { cn } from '@/utils/cn';

const PROBLEM_CARDS = [
  {
    titleKey: 'problem.fragmented.title',
    descriptionKey: 'problem.fragmented.description',
    image: '/visuals/problem/fragmented.svg',
  },
  {
    titleKey: 'problem.discovery.title',
    descriptionKey: 'problem.discovery.description',
    image: '/visuals/problem/no-consumer-friendly.svg',
  },
  {
    titleKey: 'problem.unproductive.title',
    descriptionKey: 'problem.unproductive.description',
    image: '/visuals/problem/unproductive.svg',
  },
] as const;

export function ProblemSection({ className }: { className?: string }) {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  return (
    <section
      id="problem"
      className={cn('mx-auto max-w-[1100px] px-3 py-12 max-[390px]:py-10 sm:px-6 sm:py-24', className)}
    >
      <motion.div
        variants={scrollSectionVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: SCROLL_VIEWPORT.once, amount: SCROLL_VIEWPORT.amount, margin: SCROLL_VIEWPORT.margin }}
        className="mx-auto max-w-[1100px]"
      >
        <motion.div variants={scrollSectionVariants.header}>
          <SectionHeader
            title={<>{t('problem.headlineLine1')}<br />{t('problem.headlineLine2')}</>}
            subtitle={t('problem.subheadline')}
            as="h2"
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 justify-items-center"
          variants={scrollSectionVariants.items}
        >
          {PROBLEM_CARDS.map((card, index) => {
            const direction = index === 0 ? 'left' : index === 1 ? 'center' : 'right';
            return (
            <motion.article
              key={card.titleKey}
              variants={problemCardVariants[direction]}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition-colors hover:border-white/20 w-full max-w-[300px] max-[390px]:max-w-full md:max-w-[340px] md:min-h-[340px] md:rounded-2xl"
            >
            {/* Text with padding */}
            <div className="p-4 sm:p-5">
              <h3 className="mb-2 text-base font-semibold text-white sm:mb-2.5 sm:text-lg">
                {t(card.titleKey)}
              </h3>
              <p className="text-xs leading-snug text-zinc-400 sm:text-sm">
                {t(card.descriptionKey)}
              </p>
            </div>
            {/* Image area: min-height for squarer card proportion */}
            <div className="mt-auto overflow-hidden min-h-[150px] sm:min-h-[170px] flex items-end">
              <Image
                src={card.image}
                alt=""
                width={400}
                height={300}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
