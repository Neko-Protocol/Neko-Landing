'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from '@/i18n/i18n';
import { useAppStore } from '@/store/store';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { NekoLogo } from '@/components/icons/NekoLogo';
import { CTA_GRADIENT, CTA_SOCIAL_BUTTONS } from '@/constants/cta';
import { scrollSectionVariants, SCROLL_VIEWPORT } from '@/animations/scrollSection';
import { cn } from '@/utils/cn';

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function CtaSection({ className }: { className?: string }) {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);
  return (
    <section
      id="cta"
      className={cn('relative overflow-hidden bg-black px-3 py-12 max-[390px]:py-10 sm:px-6 sm:py-20', className)}
    >
      <motion.div
        className="mx-auto max-w-6xl"
        variants={scrollSectionVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: SCROLL_VIEWPORT.once, amount: SCROLL_VIEWPORT.amount, margin: SCROLL_VIEWPORT.margin }}
      >
        <motion.div variants={scrollSectionVariants.header}>
          <SectionHeader
            title={
              <>
                {t('cta.headlineLine1')}
                <br />
                {t('cta.headlineLine1b')}
              </>
            }
            subtitle={t('cta.headlineLine2')}
            as="h2"
          />
        </motion.div>

        <motion.div
          variants={scrollSectionVariants.item}
          whileHover={{ boxShadow: '0 0 48px 0 rgba(39,158,221,0.22)' }}
          transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
          className="relative mx-auto mt-8 max-w-6xl overflow-hidden rounded-xl sm:mt-10 sm:rounded-2xl"
          style={{ background: CTA_GRADIENT }}
        >
          <Image
            src="/neko-logos/neko-flames-cta.svg"
            alt=""
            fill
            className="pointer-events-none select-none object-cover object-bottom-right opacity-90"
            aria-hidden
          />

          <div className="relative z-10 flex flex-col gap-4 p-3 max-[390px]:gap-3 max-[390px]:p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-10 lg:p-12">
            {/* Left: logo, copy, buttons */}
            <div className="flex flex-col gap-3 max-[390px]:gap-2.5 sm:max-w-xl sm:gap-6">
              <div className="flex items-center gap-2">
                <NekoLogo width={140} height={47} className="shrink-0 max-[390px]:h-9 max-[390px]:w-[120px] sm:w-[200px] sm:h-[67px]" />
              </div>

              <p className="text-sm font-medium leading-snug text-white/95 max-[390px]:text-xs sm:text-base lg:text-xl">
                {t('cta.cardCopy')}
              </p>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {CTA_SOCIAL_BUTTONS.map(({ key, href }) => (
                  <motion.a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.22)', scale: 1.03 }}
                    transition={{ duration: 0.22, ease: [0.33, 1, 0.68, 1] }}
                    className="group flex items-center justify-center gap-1 rounded-lg border border-white/30 bg-white/10 px-2.5 py-2 text-[11px] font-medium text-white backdrop-blur-sm max-[390px]:py-2 sm:justify-start sm:rounded-xl sm:px-5 sm:py-3.5 sm:text-sm sm:gap-2"
                  >
                    {t(`cta.${key}`)}
                    <ArrowUpRight className="shrink-0 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 max-[390px]:h-2.5 max-[390px]:w-2.5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right: mascot */}
            <motion.div
              className="relative flex shrink-0 justify-center sm:justify-end"
              whileHover={{ y: -10, scale: 1.04 }}
              transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
            >
              <div className="relative h-44 w-44 max-[390px]:h-36 max-[390px]:w-36 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/neko-logos/neko-cta.svg"
                  alt=""
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
