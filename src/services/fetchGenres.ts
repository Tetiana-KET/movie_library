import { API_OPTIONS, BASE_URL } from '@/consts/api';
import { Genre } from '@/models/Genre';

interface GenresResponse {
  genres: Genre[];
}

export const fetchGenres = async (): Promise<GenresResponse> => {
  const endpoint = `${BASE_URL}/genre/movie/list?language=en`;
  const response = await fetch(endpoint, API_OPTIONS);

  if (!response.ok) {
    throw new Error('Failed to fetch genres');
  }

  return await response.json();
};
