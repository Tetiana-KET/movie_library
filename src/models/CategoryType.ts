export type CategoryType = {
  type: string;
  key: string;
  label: string;
  path: string;
  genreId: number | null;
  excludedGenres?: number[];
};
