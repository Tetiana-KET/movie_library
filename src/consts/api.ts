export const BASE_URL = 'https://api.themoviedb.org/3';

export const getApiOptions = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_TOKEN;

  return {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};
