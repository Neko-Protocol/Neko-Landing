'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useAppStore } from '@/store/store';
import { useTranslations } from '@/i18n/i18n';

interface StockIcon {
  src: string;
  alt: string;
  positionClass: string;
  positionClassMobile?: string;
  size: number;
  floatDuration: number;
  delay: number;
  rotate: number;
  tooltipKey: string;
}

const STOCKS: StockIcon[] = [
  {
    src: '/visuals/stocks/paypal.svg',
    alt: 'PYUSD',
    positionClass: 'top-[32%] left-[8%]',
    positionClassMobile: 'top-[20%] left-[9%]',
    size: 120,
    floatDuration: 3.2,
    delay: 0.1,
    rotate: -10,
    tooltipKey: 'hero.assets.pyusd',
  },
  {
    src: '/visuals/stocks/usdc.svg',
    alt: 'USDC',
    positionClass: 'top-[65%] left-[8%]',
    positionClassMobile: 'top-[58%] left-[8%]',
    size: 112,
    floatDuration: 3.8,
    delay: 0.3,
    rotate: -8,
    tooltipKey: 'hero.assets.usdc',
  },
  {
    src: '/visuals/stocks/stellar.svg',
    alt: 'Stellar',
    positionClass: 'top-[16%] right-[10%]',
    positionClassMobile: 'top-[60%] right-[10%]',
    size: 112,
    floatDuration: 3.5,
    delay: 0.5,
    rotate: 8,
    tooltipKey: 'hero.assets.stellar',
  },
  {
    src: '/visuals/stocks/etherfuse.svg',
    alt: 'Etherfuse',
    positionClass: 'top-[70%] left-[40%]',
    positionClassMobile: 'top-[70%] left-[38%]',
    size: 120,
    floatDuration: 4.1,
    delay: 0.4,
    rotate: -7,
    tooltipKey: 'hero.assets.etherfuse',
  },
  {
    src: '/visuals/stocks/usdy.svg',
    alt: 'USDY',
    positionClass: 'top-[68%] right-[10%]',
    positionClassMobile: 'top-[68%] right-[10%]',
    size: 116,
    floatDuration: 3.3,
    delay: 0.6,
    rotate: 9,
    tooltipKey: 'hero.assets.usdy',
  },
];

const MOBILE_SIZE_SCALE = 0.5;
const ENTRY_DURATION = 0.7;

function StockItem({
  stock,
  isMobile,
  tooltip,
}: {
  stock: StockIcon;
  isMobile: boolean;
  tooltip: string;
}) {
  const positionClass =
    isMobile && stock.positionClassMobile ? stock.positionClassMobile : stock.positionClass;
  const size = isMobile ? Math.round(stock.size * MOBILE_SIZE_SCALE) : stock.size;
  const [hovered, setHovered] = useState(false);

  return (
    // Entry: fade in + slide up + scale
    <motion.div
      className={`absolute ${positionClass}`}
      initial={{ opacity: 0, y: 18, scale: 0.93 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: ENTRY_DURATION,
        delay: stock.delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Float loop — CSS on compositor thread, zero JS overhead */}
      <div
        style={{
          willChange: 'transform',
          animationName: 'heroFloat',
          animationDuration: `${stock.floatDuration}s`,
          animationTimingFunction: 'ease-in-out',
          animationIterationCount: 'infinite',
          animationDelay: `${stock.delay + ENTRY_DURATION}s`,
          animationFillMode: 'both',
        }}
      >
        {/* Resting tilt + hover */}
        <motion.div
          className="pointer-events-auto relative cursor-pointer"
          initial={{ rotate: stock.rotate }}
          animate={{ rotate: stock.rotate }}
          whileHover={{ rotate: 0, scale: 1.08 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <Image
            src={stock.src}
            alt=""
            width={size}
            height={size}
            className="drop-shadow-xl select-none"
            draggable={false}
          />

          <AnimatePresence>
            {hovered && tooltip && (
              <motion.div
                className="pointer-events-none absolute bottom-full left-1/2 z-100 mb-3 -translate-x-1/2 whitespace-nowrap rounded-xl border border-white/15 bg-zinc-900/95 px-3 py-2 text-xs font-medium text-white shadow-2xl"
                initial={{ opacity: 0, y: 4, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.95 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                {tooltip}
                <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-zinc-900/95" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HeroStocks() {
  const isMobile = useIsMobile();
  const locale = useAppStore((state) => state.locale);
  const { t } = useTranslations(locale);

  // Don't render until breakpoint is known — prevents CLS flash
  if (isMobile === null) return null;

  const stocksToShow = isMobile ? STOCKS.slice(0, 4) : STOCKS;

  return (
    <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
      {stocksToShow.map((stock) => (
        <StockItem
          key={stock.alt}
          stock={stock}
          isMobile={isMobile}
          tooltip={t(stock.tooltipKey)}
        />
      ))}
    </div>
  );
}
