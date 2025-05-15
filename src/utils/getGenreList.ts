import { GENRES_MAP } from '@/consts/GENRES_MAP';

export const getGenreList = (genre_ids: number[] | undefined): string[] => {
  if (!Array.isArray(genre_ids)) return [];
  return genre_ids.map((id) => GENRES_MAP[id]).filter(Boolean);
};
