import { AGE_RATINGS, AgeRatingInfo } from '@/consts/AGE_RATINGS';

const familyFriendlyGenreIds = [14, 16, 35, 10751];
const intenseGenreIds = [27, 53, 80, 9648, 10752, 10770];
const moderateGenreIds = [28, 12, 18, 36, 37, 99, 878, 10402, 10749];

export const getAgeRating = (adult: boolean, genreIds: number[]): AgeRatingInfo => {
  if (adult) return AGE_RATINGS['18+'];
  if (genreIds.some((id) => familyFriendlyGenreIds.includes(id))) return AGE_RATINGS.Family;
  if (genreIds.some((id) => intenseGenreIds.includes(id))) return AGE_RATINGS['16+'];
  if (genreIds.some((id) => moderateGenreIds.includes(id))) return AGE_RATINGS['PG-13'];

  return AGE_RATINGS['PG-13'];
};
