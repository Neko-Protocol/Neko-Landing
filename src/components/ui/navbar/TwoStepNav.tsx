'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/store/store';
import { NavTopBar } from './NavTopBar';
import { NavMenuContent } from './NavMenuContent';
import { NAV_STATUS } from '@/constants/navbar';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export function TwoStepNav() {
  const navRef = useRef<HTMLElement>(null);
  const isMenuOpen = useAppStore((state) => state.isMenuOpen);
  const setMenuOpen = useAppStore((state) => state.setMenuOpen);
  const closeMenu = useAppStore((state) => state.closeMenu);
  const { scrollToElement } = useSmoothScroll();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) closeMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, closeMenu]);

  const handleLinkClick = (href: string) => {
    closeMenu();
    if (href.startsWith('#')) {
      if (pathname === '/') {
        scrollToElement(href);
      } else {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <nav
      ref={navRef}
      data-twostep-nav
      data-nav-status={isMenuOpen ? NAV_STATUS.ACTIVE : NAV_STATUS.NOT_ACTIVE}
      className="twostep-nav"
    >
      <div className="twostep-nav__bg" onClick={closeMenu} />
      <div className="twostep-nav__wrap">
        <div className="twostep-nav__width">
          <div className="twostep-nav__bar">
            <div className="twostep-nav__back">
              <div className="twostep-nav__back-bg" />
            </div>
            <NavTopBar
              onToggle={() => setMenuOpen(!isMenuOpen)}
              isActive={isMenuOpen}
            />
            <NavMenuContent onLinkClick={handleLinkClick} />
          </div>
        </div>
      </div>
    </nav>
  );
}
