import { getApiOptions, BASE_URL } from '@/consts/api';
import { FETCHING_ERROR_MSG } from '@/consts/messages';
import { CategoryType } from '@/models/CategoryType';
import { FetchResultInterface } from '@/models/FetchResultInterface';

interface FetchParams {
  query?: string;
  currentPage: number;
  selectedCategory: CategoryType;
  sortBy: string;
}

export const fetchMedia = async ({
  query,
  currentPage,
  selectedCategory,
  sortBy,
}: FetchParams): Promise<FetchResultInterface> => {
  const correctedSortBy =
    selectedCategory.type === 'tv' && ['primary_release_date.desc', 'primary_release_date.asc'].includes(sortBy)
      ? sortBy.replace('primary_release_date', 'first_air_date')
      : sortBy;

  const endpoint = query
    ? `${BASE_URL}/search/${selectedCategory.type}?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${String(currentPage)}`
    : `${BASE_URL}/discover/${selectedCategory.type}?include_adult=false&include_video=false&language=en-US&page=${String(currentPage)}&sort_by=${correctedSortBy}${selectedCategory.genreId ? `&with_genres=${String(selectedCategory.genreId)}` : ''}${selectedCategory.excludedGenres ? `&without_genres=${selectedCategory.excludedGenres.join(',')}` : ''}`;
  const response = await fetch(endpoint, getApiOptions());

  if (!response.ok) {
    throw new Error(FETCHING_ERROR_MSG);
  }

  const data = (await response.json()) as unknown as FetchResultInterface;
  data.results = data.results.map((item) => ({
    ...item,
    media_type: item.media_type ?? selectedCategory.type,
  }));

  return data;
};
