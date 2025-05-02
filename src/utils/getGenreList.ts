import { GENRES_MAP } from '@/consts/GENRES_MAP';

export const getGenreList = (genre_ids: number[]) => {
  return genre_ids.map((id) => GENRES_MAP[id]).filter(Boolean);
};
