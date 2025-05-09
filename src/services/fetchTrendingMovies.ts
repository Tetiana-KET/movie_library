import { getApiOptions, BASE_URL } from '@/consts/api';
import { FETCHING_ERROR_MSG } from '@/consts/messages';
import { FetchResultInterface } from '@/models/FetchResultInterface';

export const fetchTrendingMovies = async (): Promise<FetchResultInterface> => {
  const endpoint = `${BASE_URL}/trending/all/day?language=en-US`;
  const response = await fetch(endpoint, getApiOptions());

  if (!response.ok) {
    throw new Error(FETCHING_ERROR_MSG);
  }

  const data = (await response.json()) as unknown as FetchResultInterface;

  return data;
};
