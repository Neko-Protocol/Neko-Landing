'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { NavSection } from './NavSection';
import { LanguageButton } from './LanguageButton';
import { navbarVariants, navbarVariantsMobile } from '@/animations/navbar';
import { useAppStore } from '@/store/store';
import { useIsMobile } from '@/hooks/useIsMobile';
import {
  NAV_KNOW_US_LINKS,
  NAV_SOCIAL_LINKS,
  NAV_TEAM_LINKS,
} from '@/constants/navbar';

interface NavMenuContentProps {
  onLinkClick: (href: string) => void;
}

export function NavMenuContent({ onLinkClick }: NavMenuContentProps) {
  const isMenuOpen = useAppStore((state) => state.isMenuOpen);
  const isMobile = useIsMobile();
  const variants = isMobile ? navbarVariantsMobile : navbarVariants;

  return (
    <motion.div className="twostep-nav__bottom">
      <div className="twostep-nav__bottom-overflow twostep-nav__bottom-overflow--with-flames">
        <div className="twostep-nav__bottom-inner">
          <div className="twostep-nav__menu-language mb-6 flex justify-center sm:hidden">
            <LanguageButton />
          </div>
          <motion.div
            className="twostep-nav__bottom-row"
            variants={variants.menuContent}
            initial="hidden"
            animate={isMenuOpen ? 'show' : 'hidden'}
          >
            <NavSection
              titleKey="navbar.menuSections.knowUs.title"
              links={NAV_KNOW_US_LINKS}
              onLinkClick={onLinkClick}
              variants={variants}
            />
            {!isMobile && (
              <>
                <NavSection
                  titleKey="navbar.menuSections.social.title"
                  links={NAV_SOCIAL_LINKS}
                  variants={variants}
                />
                <NavSection
                  titleKey="navbar.menuSections.team.title"
                  links={NAV_TEAM_LINKS}
                  onLinkClick={onLinkClick}
                  variants={variants}
                />
                <motion.div
                  className="twostep-nav__bottom-col is--visual"
                  variants={variants.visual}
                >
                  <div className="twostep-nav__visual">
                    <div className="twostep-nav__visual-img relative flex aspect-square max-h-[900px] w-full min-w-[280px] items-center justify-center rounded-lg sm:max-h-[420px]">
                      <Image
                        src="/neko-logos/neko-cta.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
