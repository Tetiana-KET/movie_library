export type AgeRatingKey = '18+' | '16+' | 'PG-13' | 'Family';

export interface AgeRatingInfo {
  label: AgeRatingKey;
  description: string;
  icon: string;
}

export const AGE_RATINGS: Record<AgeRatingKey, AgeRatingInfo> = {
  '18+': {
    label: '18+',
    description: 'Restricted to adults only',
    icon: '🔞',
  },
  '16+': {
    label: '16+',
    description: 'May contain intense scenes or disturbing content',
    icon: '🔶',
  },
  'PG-13': {
    label: 'PG-13',
    description: 'Parents strongly cautioned – suitable for ages 13+',
    icon: '🔶',
  },
  Family: {
    label: 'Family',
    description: 'Suitable for all ages',
    icon: '🟢',
  },
};
