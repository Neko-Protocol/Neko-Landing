import { SOCIAL_LINKS } from './socialLinks';

export interface FooterLink {
  href: string;
  translationKey: string;
  isExternal?: boolean;
}

/** Links column: Solution, Contact */
export const FOOTER_LINKS: FooterLink[] = [
  { href: '#features', translationKey: 'footer.links.solution' },
  { href: '#cta', translationKey: 'footer.links.contact' },
];

/** Resources column */
export const FOOTER_RESOURCES: FooterLink[] = [
  { href: '#cta', translationKey: 'footer.resources.contact' },
  { href: '#cta', translationKey: 'footer.resources.downloadNeko', isExternal: false },
  { href: '#cta', translationKey: 'footer.resources.aboutUs' },
];

/** Socials with URLs for icon row */
export const FOOTER_SOCIALS: { href: string; translationKey: string; ariaLabel: string }[] = [
  { href: SOCIAL_LINKS.INSTAGRAM, translationKey: 'footer.socials.instagram', ariaLabel: 'Instagram' },
  { href: SOCIAL_LINKS.TWITTER, translationKey: 'footer.socials.twitter', ariaLabel: 'X' },
  { href: SOCIAL_LINKS.LINKEDIN, translationKey: 'footer.socials.linkedin', ariaLabel: 'LinkedIn' },
  { href: SOCIAL_LINKS.DISCORD, translationKey: 'footer.socials.discord', ariaLabel: 'Discord' },
];
