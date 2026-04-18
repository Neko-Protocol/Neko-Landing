import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

export interface SectionHeaderProps {
  title: ReactNode;
  subtitle: ReactNode;
  /** Heading level: use 'h1' for the main hero, 'h2' for sections */
  as?: 'h1' | 'h2';
  align?: 'center' | 'left';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  title,
  subtitle,
  as: Tag = 'h2',
  align = 'center',
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        'mb-8 max-[390px]:mb-6 sm:mb-12 lg:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <Tag
        className={cn(
          'mb-3 font-bold leading-tight text-white max-[390px]:mb-2 max-[390px]:text-2xl',
          'text-3xl',
          titleClassName
        )}
      >
        {title}
      </Tag>
      <p
        className={cn(
          'mx-auto max-w-2xl text-sm text-zinc-400 max-[390px]:text-xs max-[390px]:max-w-full sm:text-base lg:text-lg',
          align === 'left' && 'mx-0',
          subtitleClassName
        )}
      >
        {subtitle}
      </p>
    </header>
  );
}
