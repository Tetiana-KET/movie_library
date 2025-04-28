import { getApiOptions, BASE_URL } from '@/consts/api';
import { FETCHING_ERROR_MSG } from '@/consts/messages';
import { FetchResultInterface } from '@/models/FetchResultInterface';

export const fetchMovies = async (): Promise<FetchResultInterface> => {
  const endpoint = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  const response = await fetch(endpoint, getApiOptions());

  if (!response.ok) {
    throw new Error(FETCHING_ERROR_MSG);
  }

  return await response.json();
};
