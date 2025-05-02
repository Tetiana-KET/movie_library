import { updateSearchCount } from '@/appwrite';
import { getApiOptions, BASE_URL } from '@/consts/api';
import { FETCHING_ERROR_MSG } from '@/consts/messages';
import { FetchResultInterface } from '@/models/FetchResultInterface';

export const fetchMovies = async (query: string, currentPage: number): Promise<FetchResultInterface> => {
  const endpoint = query
    ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${String(currentPage)}`
    : `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${String(currentPage)}&sort_by=popularity.desc`;
  const response = await fetch(endpoint, getApiOptions());

  if (!response.ok) {
    throw new Error(FETCHING_ERROR_MSG);
  }

  const data = (await response.json()) as unknown as FetchResultInterface;

  if (query && data.results.length) {
    await updateSearchCount(query, data.results[0]);
  }

  return data;
};
