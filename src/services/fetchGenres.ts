import { getApiOptions, BASE_URL } from '@/consts/api';
import { Genre } from '@/models/MovieDetails';

interface GenresResponse {
  genres: Genre[];
}

export const fetchGenres = async (): Promise<GenresResponse> => {
  const endpoint = `${BASE_URL}/genre/movie/list?language=en`;
  const response = await fetch(endpoint, getApiOptions());

  if (!response.ok) {
    throw new Error('Failed to fetch genres');
  }

  const data = (await response.json()) as unknown as GenresResponse;

  return data;
};
