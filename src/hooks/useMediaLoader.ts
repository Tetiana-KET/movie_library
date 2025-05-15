import { MEDIA_CATEGORIES } from '@/consts/MEDIA_CATEGORIES';
import { SORT_OPTIONS, SortOptions } from '@/consts/SORT_OPTIONS';
import { CategoryType } from '@/models/CategoryType';
import { MediaInterface } from '@/models/MovieInterface';
import { fetchMedia } from '@/services/fetchMedia';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
export const useMediaLoader = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(() => {
    return Number(searchParams.get('page')) || 1;
  });

  const prevPageRef = useRef<number | null>(null);

  const [sortBy, setSortBy] = useState<SortOptions>(() => {
    const sortByFromParams = searchParams.get('sortBy');
    return SORT_OPTIONS.find((o) => o.value === sortByFromParams) ?? SORT_OPTIONS[0];
  });

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>(() => {
    const categoryFromParams = searchParams.get('category');
    return MEDIA_CATEGORIES.find((c) => c.key === categoryFromParams) ?? MEDIA_CATEGORIES[0];
  });

  const prevCategoryRef = useRef<CategoryType | null>(null);

  const [searchQuery, setSearchQuery] = useState(() => {
    return searchParams.get('query') ?? '';
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', selectedCategory.key);
    prevPageRef.current = currentPage;

    // to return from details
    if (selectedCategory.key !== 'all') {
      prevCategoryRef.current = selectedCategory;
    }

    params.set('sortBy', sortBy.value);
    params.set('page', String(currentPage));

    if (searchQuery) {
      params.set('query', searchQuery);
      setSelectedCategory(MEDIA_CATEGORIES.find((c) => c.key === 'all')!);
    } else {
      const fallbackCategory = prevCategoryRef.current ?? MEDIA_CATEGORIES[0];
      setSelectedCategory(fallbackCategory);
      params.delete('query');
      setCurrentPage(prevPageRef.current ?? 1);
    }
    setSearchParams(params, { replace: true });
  }, [currentPage, selectedCategory, sortBy, searchQuery]);

  // FETCHING MEDIA
  const [movieList, setMovieList] = useState<MediaInterface[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // wait until the selected Category is updated after multi fetch
    if (!searchQuery && selectedCategory.key === 'all') {
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    fetchMedia({ query: searchQuery, currentPage, selectedCategory, sortBy: sortBy.value })
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
  }, [selectedCategory, searchQuery, currentPage, sortBy]);

  return {
    movieList,
    totalPages,
    errorMessage,
    isLoading,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
  };
};
