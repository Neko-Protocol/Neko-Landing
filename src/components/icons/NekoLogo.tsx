import Image from 'next/image';

interface NekoLogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function NekoLogo({
  width = 120,
  height = 40,
  className = '',
  priority = false,
}: NekoLogoProps) {
  return (
    <Image
      src="/neko-logos/neko.svg"
      alt="Neko"
      width={width}
      height={height}
      className={className || 'h-auto w-auto'}
      priority={priority}
      {...(priority ? {} : { loading: 'lazy' })}
    />
  );
}
