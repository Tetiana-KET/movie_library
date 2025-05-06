import { MOVIE_AGE_RATINGS, AgeRatingInfo } from '@/consts/MOVIE_AGE_RATINGS';

const familyFriendlyGenreIds = [14, 16, 35, 10751];
const intenseGenreIds = [80, 9648, 10752, 10770];
const moderateGenreIds = [28, 12, 18, 36, 37, 99, 878, 10402, 10749];
const adultGenres = [27, 53];
export const getAgeRating = (adult: boolean, genreIds: number[]): AgeRatingInfo => {
  if (adult || genreIds.some((id) => adultGenres.includes(id))) return MOVIE_AGE_RATINGS['18+'];
  if (genreIds.some((id) => familyFriendlyGenreIds.includes(id))) return MOVIE_AGE_RATINGS.Family;
  if (genreIds.some((id) => intenseGenreIds.includes(id))) return MOVIE_AGE_RATINGS['16+'];
  if (genreIds.some((id) => moderateGenreIds.includes(id))) return MOVIE_AGE_RATINGS['PG-13'];

  return MOVIE_AGE_RATINGS['PG-13'];
};
