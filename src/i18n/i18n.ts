import es from './es.json';
import en from './en.json';

export type Locale = 'es' | 'en';

export const translations = {
  es,
  en,
} as const;

export type TranslationKey = keyof typeof es;

export function useTranslations(locale: Locale = 'es') {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[locale];

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
    }

    return (typeof value === 'string' ? value : key) as string;
  };

  return { t };
}
