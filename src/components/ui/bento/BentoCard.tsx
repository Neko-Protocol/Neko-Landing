'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from '@/i18n/i18n';
import { useAppStore } from '@/store/store';
import { FeatureFlame } from '@/components/visuals/FeatureFlame';
import { cn } from '@/utils/cn';

const FEATURE_IMAGE_WIDTH = 1920;
const FEATURE_IMAGE_HEIGHT = 1040;

/**
 * Where the image container is anchored inside the card.
 * The image itself is never cropped or transformed — only the container moves.
 */
const IMAGE_CONTAINER_POSITION: Record<string, string> = {
  bottom: 'absolute bottom-0 left-0 right-0',
  right:  'absolute bottom-0 right-0 left-[15%]',
  left:   'absolute bottom-0 left-0 right-[15%]',
  top:    'absolute top-0 left-0 right-0',
};

export interface BentoCardProps {
  titleKey: string;
  descriptionKey: string;
  descriptionSubKey?: string;
  featureImage: string;
  flameImage: string;
  flamePosition: 'bottom-right' | 'top-right';
  flameImageClassName?: string;
  /** Which side of the card the image container anchors to. Default: 'bottom' */
  featureImagePosition?: 'bottom' | 'right' | 'left' | 'top';
  /** Fully override the image container positioning classes for this card */
  featureImageContainerClass?: string;
  featureImageClassName?: string;
  className?: string;
}

export function BentoCard({
  titleKey,
  descriptionKey,
  descriptionSubKey,
  featureImage,
  flameImage,
  flamePosition,
  flameImageClassName,
  featureImagePosition = 'bottom',
  featureImageContainerClass,
  featureImageClassName,
  className,
}: BentoCardProps) {
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  const containerClass = featureImageContainerClass ?? IMAGE_CONTAINER_POSITION[featureImagePosition];

  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.35)' }}
      transition={{ duration: 0.32, ease: [0.33, 1, 0.68, 1] }}
      className={cn(
        'group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl bg-zinc-900 transition-colors',
        className
      )}
    >
      <FeatureFlame
        src={flameImage}
        position={flamePosition}
        imageClassName={flameImageClassName}
      />

      {/* Text */}
      <div className="relative z-10 shrink-0 p-6">
        <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
          {t(titleKey)}
        </h3>
        <p className="text-sm text-zinc-400 sm:text-base">
          {t(descriptionKey)}
        </p>
        {descriptionSubKey && (
          <p className="mt-1 text-sm text-zinc-400 sm:text-base">
            {t(descriptionSubKey)}
          </p>
        )}
      </div>
      <div className="relative min-h-[72px] flex-1 sm:min-h-0" aria-hidden />

      {/* Image container — only its position changes, image is untouched */}
      <div className={cn(containerClass, 'transition-transform duration-300 group-hover:scale-105')}>
        <Image
          src={featureImage}
          alt=""
          width={FEATURE_IMAGE_WIDTH}
          height={FEATURE_IMAGE_HEIGHT}
          className={cn('w-full h-auto', featureImageClassName)}
        />
      </div>
    </motion.article>
  );
}
