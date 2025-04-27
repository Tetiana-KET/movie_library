import { FETCHING_ERROR_MSG } from '@/consts/messages';
import { FetchResultInterface } from '@/models/FetchResultInterface';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_TOKEN;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchMovies = async (): Promise<FetchResultInterface> => {
  const endpoint = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  const response = await fetch(endpoint, API_OPTIONS);

  if (!response.ok) {
    throw new Error(FETCHING_ERROR_MSG);
  }

  return await response.json();
};
