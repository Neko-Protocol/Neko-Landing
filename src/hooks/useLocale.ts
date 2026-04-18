import { useState, useEffect } from 'react';
import type { Locale } from '@/i18n/i18n';

export function useLocale(
  locale: Locale,
  setLocale: (locale: Locale) => void
) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setMounted(true);
      const savedLocale = localStorage.getItem('neko-locale') as Locale;
      if (savedLocale === 'es' || savedLocale === 'en') {
        setLocale(savedLocale);
      }
    });
  }, [setLocale]);

  return { mounted };
}
