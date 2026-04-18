import { SOCIAL_LINKS } from './socialLinks';

export const NAV_SCROLL_OFFSET = 100;
export const NAV_SCROLL_DELAY = 100;

export const NAV_STATUS = {
  ACTIVE: 'active',
  NOT_ACTIVE: 'not-active',
} as const;

export type NavStatus = (typeof NAV_STATUS)[keyof typeof NAV_STATUS];

export interface NavLink {
  href: string;
  translationKey: string;
  isExternal?: boolean;
}

export const NAV_KNOW_US_LINKS: NavLink[] = [
  { href: '#problem',  translationKey: 'navbar.menuSections.knowUs.links.problem' },
  { href: '#features', translationKey: 'navbar.menuSections.knowUs.links.solution' },
  { href: '#faq',      translationKey: 'navbar.menuSections.knowUs.links.faq' },
  { href: '#cta',      translationKey: 'navbar.menuSections.knowUs.links.contact' },
];

export const NAV_SOCIAL_LINKS: NavLink[] = [
  { href: SOCIAL_LINKS.INSTAGRAM, translationKey: 'navbar.menuSections.social.links.instagram', isExternal: true },
  { href: SOCIAL_LINKS.TWITTER,   translationKey: 'navbar.menuSections.social.links.twitter',   isExternal: true },
  { href: SOCIAL_LINKS.LINKEDIN,  translationKey: 'navbar.menuSections.social.links.linkedin',  isExternal: true },
  { href: SOCIAL_LINKS.DISCORD,    translationKey: 'navbar.menuSections.social.links.discord',   isExternal: true },
];

export const NAV_TEAM_LINKS: NavLink[] = [
  { href: '#features', translationKey: 'navbar.menuSections.team.links.members' },
  { href: '#faq',      translationKey: 'navbar.menuSections.team.links.faq' },
  { href: '#cta',      translationKey: 'navbar.menuSections.team.links.join' },
];
