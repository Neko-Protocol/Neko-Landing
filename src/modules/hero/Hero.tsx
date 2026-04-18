'use client';

import { motion } from 'framer-motion';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';
import { HeroFlames } from '@/components/visuals/HeroFlames';
import { HeroStocks } from '@/components/visuals/HeroStocks';
import { DirectionalButton } from '@/components/ui/DirectionalButton';
import { heroVariants } from '@/animations/hero';
import { DAPP_URL, DAPP_ORACLE_URL } from '@/constants/appUrls';

export function Hero() {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  return (
    <section
      className="relative min-h-screen bg-black pt-20 max-[390px]:pt-16"
      id="hero"
    >
      <HeroFlames />
      <HeroStocks />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-start px-3 pt-40 text-center max-[390px]:min-h-[calc(100vh-3.5rem)] max-[390px]:pt-32 sm:px-6 sm:pt-52 lg:px-8"
        variants={heroVariants.container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={heroVariants.title} className="mb-2 max-[390px]:mb-2 sm:mb-3">
          <h1 className="mb-3 font-bold leading-tight text-white text-4xl max-[390px]:text-[1.6rem] max-[390px]:leading-snug max-[390px]:mb-2 sm:mb-4 sm:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-zinc-400 max-[390px]:text-xs max-[390px]:leading-snug sm:text-base lg:text-lg leading-relaxed">
            {t('hero.description')}
          </p>
        </motion.div>

        <motion.div
          className="flex w-full max-w-[320px] flex-col items-center gap-2 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
          variants={heroVariants.buttons}
        >
          <DirectionalButton variant="primary" size="md" asLink href={DAPP_URL} target="_blank" rel="noopener noreferrer" className="max-[390px]:!h-9 max-[390px]:!px-3 max-[390px]:!text-xs">
            {t('hero.ctaPrimary')} →
          </DirectionalButton>
          <DirectionalButton variant="dark" size="md" asLink href={DAPP_ORACLE_URL} target="_blank" rel="noopener noreferrer" className="max-[390px]:!h-9 max-[390px]:!px-3 max-[390px]:!text-xs">
            {t('hero.ctaSecondary')}
          </DirectionalButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
