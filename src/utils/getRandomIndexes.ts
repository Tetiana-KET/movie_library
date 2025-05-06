import { HERO_POSTER_COUNT } from '@/consts/HERO_POSTER_COUNT';

export const getRandomIndexes = (max: number): number[] => {
  const indexes = new Set<number>();

  while (indexes.size < HERO_POSTER_COUNT) {
    indexes.add(Math.floor(Math.random() * max));
  }

  return Array.from(indexes);
};
