import Image from 'next/image';
import { cn } from '@/utils/cn';

interface FeatureFlameProps {
  src: string;
  position: 'bottom-right' | 'top-right';
  className?: string;
  imageClassName?: string;
}

const positionClasses = {
  'bottom-right': 'bottom-0 right-0 w-[70%] h-[52%] object-cover object-bottom-right',
  'top-right': 'right-0 bottom-[15%] w-[75%] h-[48%] object-cover object-bottom-right',
};

export function FeatureFlame({ src, position, className = '', imageClassName }: FeatureFlameProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        width={400}
        height={300}
        className={cn('absolute', imageClassName ?? positionClasses[position])}
      />
    </div>
  );
}
