import { SOCIAL_LINKS } from './socialLinks';

export const CTA_GRADIENT = 'linear-gradient(180deg, #0085CC 0%, #000D1C 100%)';

export const CTA_SOCIAL_BUTTONS = [
  { key: 'instagram', href: SOCIAL_LINKS.INSTAGRAM },
  { key: 'twitter', href: SOCIAL_LINKS.TWITTER },
  { key: 'discord', href: SOCIAL_LINKS.DISCORD },
  { key: 'linkedin', href: SOCIAL_LINKS.LINKEDIN },
] as const;
