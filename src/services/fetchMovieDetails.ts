import { getApiOptions, BASE_URL } from '@/consts/api';
import { FETCHING_ERROR_MSG } from '@/consts/messages';
import { MovieDetails } from '@/models/MovieDetails';

export const fetchMovieDetails = async (id: string): Promise<MovieDetails> => {
  const endpoint = `${BASE_URL}/movie/${id}?language=en-US`;
  const response = await fetch(endpoint, getApiOptions());

  if (!response.ok) {
    throw new Error(FETCHING_ERROR_MSG);
  }

  const data = (await response.json()) as unknown as MovieDetails;

  return data;
};
