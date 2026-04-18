'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { useTranslations } from '@/i18n/i18n';
import { useAppStore } from '@/store/store';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQ_SECTIONS } from '@/constants/faq';
import type { FaqSectionId } from '@/constants/faq';
import { scrollSectionVariants, SCROLL_VIEWPORT } from '@/animations/scrollSection';
import { faqVariants } from '@/animations/faq';
import { cn } from '@/utils/cn';

export function FaqSection({ className }: { className?: string }) {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  const [activeTab, setActiveTab] = useState<FaqSectionId>(FAQ_SECTIONS[0].id);
  const [openKey, setOpenKey] = useState<string | null>('aboutNeko-1');

  const activeSection = FAQ_SECTIONS.find((s) => s.id === activeTab);
  if (!activeSection) return null;

  return (
    <section
      id="faq"
      className={cn('relative overflow-hidden bg-black py-12 max-[390px]:py-10 sm:py-24', className)}
    >
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-3 text-center max-[390px]:px-3 sm:px-6"
        variants={scrollSectionVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: SCROLL_VIEWPORT.once, amount: SCROLL_VIEWPORT.amount, margin: SCROLL_VIEWPORT.margin }}
      >
        <motion.div variants={scrollSectionVariants.header}>
          <SectionHeader
            title={
              <>
                {t('faq.headlineLine1')}
                <br />
                {t('faq.headlineLine2')}
              </>
            }
            subtitle={t('faq.subheadline')}
            as="h2"
            titleClassName="text-white"
            subtitleClassName="text-zinc-400"
          />
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={scrollSectionVariants.item}
          className="mt-10 flex flex-nowrap justify-center gap-0 overflow-x-auto border-b border-white/10"
          role="tablist"
          aria-label={t('faq.title')}
        >
          {FAQ_SECTIONS.map((section) => {
            const isActive = activeTab === section.id;
            return (
              <button
                key={section.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`faq-panel-${section.id}`}
                id={`faq-tab-${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveTab(section.id);
                  setOpenKey(null);
                }}
                className={cn(
                  'relative shrink-0 whitespace-nowrap px-2 py-2 text-sm font-medium transition-colors max-[390px]:px-2.5 sm:px-4 sm:py-3 sm:text-base',
                  isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                )}
              >
                {t(`faq.${section.id}.title`)}
                {isActive && (
                  <motion.span
                    layoutId="faq-tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#279EDD]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Panel: questions for active tab */}
        <div
          id={`faq-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`faq-tab-${activeTab}`}
          className="mx-auto mt-6 max-w-3xl text-left"
        >
          <motion.div
            key={activeTab}
            variants={faqVariants.items}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.05, margin: '-20px' }}
            className="space-y-2"
          >
            {Array.from({ length: activeSection.count }, (_, i) => {
              const index = i + 1;
              const key = `${activeSection.id}-${index}`;
              const isOpen = openKey === key;

              return (
                <motion.div
                  key={key}
                  layout
                  variants={faqVariants.item}
                  animate={{
                    borderColor: isOpen ? 'transparent' : 'rgba(255,255,255,0.15)',
                  }}
                  transition={{
                    layout: { duration: 0.55, ease: [0.32, 1, 0.5, 1] },
                    borderColor: { duration: 0.3, ease: [0.32, 1, 0.5, 1] },
                  }}
                  className={cn(
                    'relative overflow-hidden rounded-2xl border transition-[background] duration-500 ease-in-out',
                    isOpen
                      ? 'border-transparent border-b-0 bg-linear-to-b from-[#279EDD] to-[#004671]'
                      : 'border-white/15 bg-[#080808]'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className={cn(
                      'flex w-full items-center justify-between gap-3 px-3 text-left max-[390px]:px-3 sm:px-6',
                      isOpen ? 'pb-2 pt-3 sm:pb-3 sm:pt-5' : 'py-3 sm:py-5'
                    )}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${key}`}
                    id={`faq-question-${key}`}
                  >
                    <motion.span
                      animate={{ color: isOpen ? '#ffffff' : '#d4d4d8' }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="font-medium leading-relaxed text-sm max-[390px]:text-xs sm:text-lg"
                    >
                      {t(`faq.${activeSection.id}.q${index}`)}
                    </motion.span>

                    <motion.div
                      initial={false}
                      animate={{
                        backgroundColor: isOpen ? '#ffffff' : '#151515',
                      }}
                      whileHover={{
                        backgroundColor: isOpen
                          ? 'rgba(255,255,255,0.8)'
                          : 'rgba(21,21,21,0.8)',
                      }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10"
                    >
                      <AnimatePresence mode="wait">
                        {isOpen ? (
                          <motion.div
                            key="close"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          >
                            <X className="h-3.5 w-3.5 text-[#279EDD] sm:h-4 sm:w-4" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="open"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                          >
                            <ChevronDown className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${key}`}
                        role="region"
                        aria-labelledby={`faq-question-${key}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.55, ease: [0.32, 1, 0.5, 1] },
                          opacity: { duration: 0.3, ease: [0.32, 1, 0.5, 1] },
                        }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            transition: { duration: 0.2, ease: [0.32, 1, 0.5, 1] },
                          }}
                          transition={{ duration: 0.35, delay: 0.08, ease: [0.32, 1, 0.5, 1] }}
                          className="whitespace-pre-line px-3 pb-3 pt-0 text-xs leading-relaxed text-white/95 max-[390px]:px-3 max-[390px]:pb-3 sm:px-6 sm:pb-6 sm:text-sm"
                        >
                          {t(`faq.${activeSection.id}.a${index}`)}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
