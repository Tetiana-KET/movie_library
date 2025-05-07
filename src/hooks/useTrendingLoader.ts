import { TrendingInterface } from '@/models/MovieInterface';
import { fetchTrendingMovies } from '@/services/fetchTrendingMovies';
import { getRandomIndexes } from '@/utils/getRandomIndexes';
import { useEffect, useState } from 'react';

export const useTrendingLoader = () => {
  const [trendingMovies, setTrendingMovies] = useState<TrendingInterface[]>([]);
  const [heroPostersPaths, setHeroPostersPaths] = useState<string[]>([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then((data) => {
        setTrendingMovies(data.results);
        const randomIndexes = getRandomIndexes(data.results.length);
        const selectedPaths = randomIndexes.map((i) => data.results[i].poster_path);
        setHeroPostersPaths(selectedPaths);
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          console.log(e.message);
        } else {
          console.log('Unknown error', e);
        }
      });
  }, []);

  return { trendingMovies, heroPostersPaths };
};
