import { create } from 'zustand';
import type { Locale } from '@/i18n/i18n';

interface AppState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  setMenuOpen: (isOpen: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  locale: 'es',
  setLocale: (locale: Locale) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('neko-locale', locale);
    }
    set({ locale });
  },
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  setMenuOpen: (isOpen: boolean) => set({ isMenuOpen: isOpen }),
}));

