export const FAQ_SECTIONS = [
  { id: 'aboutNeko', count: 4 },
  { id: 'forUsers', count: 4 },
  { id: 'forDevelopers', count: 4 },
  { id: 'forBusinesses', count: 3 },
  { id: 'general', count: 4 },
] as const;

export type FaqSectionId = (typeof FAQ_SECTIONS)[number]['id'];
