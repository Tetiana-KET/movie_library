import { GENRES_MAP } from '@/consts/GENRES_MAP';
import { fetchGenres } from '@/services/fetchGenres';
import { useEffect } from 'react';

export const useGenresLoader = () => {
  useEffect(() => {
    fetchGenres()
      .then((data) => {
        data.genres.forEach((genre) => {
          GENRES_MAP[genre.id] = genre.name;
        });
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          console.log(e.message);
        } else {
          console.log('Unknown error', e);
        }
      });
  }, []);
};
