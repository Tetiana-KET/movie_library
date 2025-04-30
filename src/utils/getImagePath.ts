export const getImagePath = (path: string | null | undefined) => {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : '/no-poster.webp';
};
