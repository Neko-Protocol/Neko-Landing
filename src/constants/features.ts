

const FEATURES_IMG = '/visuals/features';
const FLAMES_IMG = '/visuals/flames/features-flames';


export const BENTO_GRID_CLASS =
  'grid grid-cols-1 auto-rows-[380px] gap-6 sm:gap-8 lg:grid-cols-2 lg:grid-rows-[380px_80px_440px]' as const;

export type FlamePosition = 'bottom-right' | 'top-right';

export interface FeatureCardConfig {
  titleKey: string;
  descriptionKey: string;
  descriptionSubKey?: string;
  featureImage: string;
  flameImage: string;
  flamePosition: FlamePosition;
  flameImageClassName?: string;
  featureImagePosition?: 'bottom' | 'right' | 'left' | 'top';
  featureImageContainerClass?: string;
  gridClass: string;
}

function createCard(
  titleKey: string,
  descriptionKey: string,
  featureFile: string,
  flameFile: string,
  flamePosition: FlamePosition,
  gridClass: string,
  overrides: Partial<FeatureCardConfig> = {}
): FeatureCardConfig {
  return {
    titleKey,
    descriptionKey,
    featureImage: `${FEATURES_IMG}/${featureFile}`,
    flameImage: `${FLAMES_IMG}/${flameFile}`,
    flamePosition,
    gridClass,
    ...overrides,
  };
}

export const FEATURE_CARDS: readonly FeatureCardConfig[] = [
  createCard('features.swap.title', 'features.swap.description', 'Swap.svg', 'first-flame.svg', 'bottom-right', 'lg:col-start-1 lg:row-start-1 lg:row-span-1', {
    flameImageClassName: 'bottom-0 left-0 right-0 w-full h-[100%] object-cover object-bottom',
    featureImageContainerClass: 'absolute bottom-0 left-[7%] right-[7%] w-[85%]',
    descriptionSubKey: 'features.swap.descriptionSub',
  }),
  createCard('features.collateral.title', 'features.collateral.description', 'Borrow.svg', 'second-flame.svg', 'top-right', 'lg:col-start-2 lg:row-start-1 lg:row-span-2', {
    flameImageClassName: 'right-0 top-0 w-full h-full object-cover object-right',
    featureImageContainerClass: 'absolute bottom-0 left-[10%] right-[-40%] w-[130%]',
  }),
  createCard('features.discover.title', 'features.discover.description', 'Oracle.svg', 'third-flame.svg', 'bottom-right', 'lg:col-start-1 lg:row-start-2 lg:row-span-2', {
    flameImageClassName: 'left-0 top-0 w-[99%] h-[100%] object-cover object-left',
    featureImageContainerClass: 'absolute bottom-0 left-[-40%] right-[10%] w-[133%]',
  }),
  createCard('features.yield.title', 'features.yield.description', 'Lend.svg', 'fourth.svg', 'top-right', 'lg:col-start-2 lg:row-start-3 lg:row-span-1', {
    flameImageClassName: 'bottom-0 left-0 right-0 w-full h-[100%] object-cover object-bottom',
    featureImageContainerClass: 'absolute bottom-0 left-[3%] right-[3%] w-[94%]',
  }),
];
