import { getApiOptions, BASE_URL } from '@/consts/api';
import { Genre } from '@/models/MovieDetails';

interface GenresResponse {
  genres: Genre[];
}

export const fetchGenres = async (): Promise<GenresResponse> => {
  const [movieRes, tvRes] = await Promise.all([
    fetch(`${BASE_URL}/genre/movie/list?language=en`, getApiOptions()),
    fetch(`${BASE_URL}/genre/tv/list?language=en`, getApiOptions()),
  ]);

  if (!movieRes.ok || !tvRes.ok) {
    throw new Error('Failed to fetch genres');
  }

  const [movieData, tvData] = await Promise.all([
    (await movieRes.json()) as unknown as GenresResponse,
    (await tvRes.json()) as unknown as GenresResponse,
  ]);

  return {
    genres: [...movieData.genres, ...tvData.genres],
  };
};
