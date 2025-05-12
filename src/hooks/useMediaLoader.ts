import { MEDIA_CATEGORIES } from '@/consts/MEDIA_CATEGORIES';
import { SORT_OPTIONS, SortOptions } from '@/consts/SORT_OPTIONS';
import { CategoryType } from '@/models/CategoryType';
import { MediaInterface } from '@/models/MovieInterface';
import { fetchMedia } from '@/services/fetchMedia';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useMediaLoader = (
  query: string,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
) => {
  const [movieList, setMovieList] = useState<MediaInterface[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromParams = searchParams.get('category');
  const initialCategory = MEDIA_CATEGORIES.find((c) => c.key === categoryFromParams) ?? MEDIA_CATEGORIES[0];
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(initialCategory);

  const sortByFromParams = searchParams.get('sortBy');
  const initialSortBy = SORT_OPTIONS.find((o) => o.value === sortByFromParams) ?? SORT_OPTIONS[0];
  const [sortBy, setSortBy] = useState<SortOptions>(initialSortBy);

  useEffect(() => {
    const currentCategory = searchParams.get('category');
    if (currentCategory !== selectedCategory.key) {
      searchParams.set('category', selectedCategory.key);
      searchParams.set('page', '1');
      setSearchParams(searchParams, { replace: true });
      setCurrentPage(1);
    }
  }, [selectedCategory, searchParams, setSearchParams, setCurrentPage]);

  useEffect(() => {
    const currentSort = searchParams.get('sortBy');
    if (currentSort !== sortBy.value) {
      searchParams.set('sortBy', sortBy.value);
      searchParams.set('page', '1');
      setSearchParams(searchParams, { replace: true });
      setCurrentPage(1);
    }
  }, [sortBy, searchParams, setSearchParams, setCurrentPage]);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage('');

    fetchMedia({ query, currentPage, selectedCategory, sortBy: sortBy.value })
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
  }, [query, currentPage, selectedCategory, sortBy]);

  return { movieList, totalPages, errorMessage, isLoading, selectedCategory, setSelectedCategory, sortBy, setSortBy };
};
