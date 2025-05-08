import { getApiOptions, BASE_URL } from '@/consts/api';
import { FETCHING_ERROR_MSG } from '@/consts/messages';
import { CategoryType } from '@/models/CategoryType';
import { FetchResultInterface } from '@/models/FetchResultInterface';

interface FetchParams {
  query?: string;
  currentPage: number;
  selectedCategory: CategoryType;
}

export const fetchMedia = async ({
  query,
  currentPage,
  selectedCategory,
}: FetchParams): Promise<FetchResultInterface> => {
  const endpoint = query
    ? `${BASE_URL}/search/${selectedCategory.type}?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${String(currentPage)}`
    : `${BASE_URL}/discover/${selectedCategory.type}?include_adult=false&include_video=false&language=en-US&page=${String(currentPage)}&sort_by=popularity.desc${selectedCategory.genreId ? `&with_genres=${selectedCategory.genreId}` : ''}`;
  const response = await fetch(endpoint, getApiOptions());

  if (!response.ok) {
    throw new Error(FETCHING_ERROR_MSG);
  }

  const data = (await response.json()) as unknown as FetchResultInterface;
  data.results = data.results.map((item) => ({
    ...item,
    media_type: selectedCategory.type,
  }));

  return data;
};
