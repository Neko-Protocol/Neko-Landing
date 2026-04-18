'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/i18n/i18n';
import { useAppStore } from '@/store/store';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { scrollSectionVariants, SCROLL_VIEWPORT } from '@/animations/scrollSection';
import { useWaitlistForm } from './useWaitlistForm';
import { cn } from '@/utils/cn';

const INPUT_CLASS =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-zinc-500 disabled:opacity-60 focus:outline-none focus:ring-1 focus:border-(--color-primary) focus:ring-(--color-primary)';

const BUTTON_BASE_CLASS =
  'shrink-0 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-(--color-primary)';

export function WaitlistSection({ className }: { className?: string }) {
  const locale = useAppStore((s) => s.locale);
  const { t } = useTranslations(locale);

  const { submit, status, errorKind, isLoading, isSuccess, isError } = useWaitlistForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (new FormData(form).get('email') as string)?.trim() ?? '';
    const success = await submit(email);
    if (success) form.reset();
  };

  const message =
    status === 'success'
      ? t('waitlist.success')
      : status === 'already'
        ? t('waitlist.alreadyJoined')
        : isError && errorKind === 'invalid_email'
          ? t('waitlist.errorInvalidEmail')
          : isError
            ? t('waitlist.errorGeneric')
            : null;

  return (
    <section
      id="waitlist"
      className={cn(
        'relative overflow-hidden bg-black px-3 py-12 max-[390px]:py-10 sm:px-6 sm:py-20',
        className
      )}
    >
      <motion.div
        className="mx-auto max-w-2xl"
        variants={scrollSectionVariants.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: SCROLL_VIEWPORT.once, amount: SCROLL_VIEWPORT.amount, margin: SCROLL_VIEWPORT.margin }}
      >
        <motion.div variants={scrollSectionVariants.header}>
          <SectionHeader
            title={
              <>
                {t('waitlist.headlineLine1')}
                <br />
                {t('waitlist.headlineLine2')}
              </>
            }
            subtitle={t('waitlist.subheadline')}
            as="h2"
          />
        </motion.div>

        <motion.div variants={scrollSectionVariants.item}>
          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur-sm sm:mt-10 sm:p-8"
          >
            <div className="flex flex-row items-stretch gap-3">
              <div className="flex-1 min-w-0">
                <label htmlFor="waitlist-email" className="sr-only">
                  {t('waitlist.emailLabel')}
                </label>
                <input
                  id="waitlist-email"
                  name="email"
                  type="email"
                  required
                  disabled={isLoading}
                  placeholder={t('waitlist.emailPlaceholder')}
                  className={INPUT_CLASS}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  BUTTON_BASE_CLASS,
                  isLoading ? 'bg-zinc-600' : 'bg-(--color-primary) hover:opacity-90'
                )}
              >
                {isLoading ? t('waitlist.submitting') : t('waitlist.submit')}
              </button>
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              {t('waitlist.disclaimer')}
            </p>

            {message && (
              <motion.p
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  'mt-4 rounded-xl px-4 py-3 text-sm font-medium',
                  isError && 'bg-red-500/10 text-red-400',
                  isSuccess && 'bg-emerald-500/10 text-emerald-400'
                )}
              >
                {message}
              </motion.p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
