import { MEDIA_CATEGORIES } from '@/consts/MEDIA_CATEGORIES';
import { CategoryType } from '@/models/CategoryType';
import { MovieInterface } from '@/models/MovieInterface';
import { fetchMedia } from '@/services/fetchMedia';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useMediaLoader = (query: string, currentPage: number) => {
  const [movieList, setMovieList] = useState<MovieInterface[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromParams = searchParams.get('category');
  const initialCategory = MEDIA_CATEGORIES.find((c) => c.key === categoryFromParams) ?? MEDIA_CATEGORIES[0];
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(initialCategory);

  useEffect(() => {
    const currentCategory = searchParams.get('category');
    if (currentCategory !== selectedCategory.key) {
      searchParams.set('category', selectedCategory.key);
      setSearchParams(searchParams, { replace: true });
    }
  }, [selectedCategory, searchParams, setSearchParams]);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage('');

    fetchMedia({ query, currentPage, selectedCategory })
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
  }, [query, currentPage, selectedCategory]);

  return { movieList, totalPages, errorMessage, isLoading, selectedCategory, setSelectedCategory };
};
