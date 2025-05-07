import { MovieInterface } from '@/models/MovieInterface';
import { fetchMovies } from '@/services/fetchMovies';
import { useEffect, useState } from 'react';

export const useMoviesLoader = (debouncedQuery: string, currentPage: number) => {
  const [movieList, setMovieList] = useState<MovieInterface[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage('');

    fetchMovies(debouncedQuery, currentPage)
      .then((data) => {
        setMovieList(data.results);
        setTotalPages(Math.min(data.total_pages, 500));
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          setErrorMessage(e.message);
        } else {
          setErrorMessage('Unknown error');
        }

        setMovieList([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [debouncedQuery, currentPage]);

  return { movieList, totalPages, errorMessage, isLoading };
};
