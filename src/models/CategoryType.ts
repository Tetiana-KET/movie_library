export interface CategoryType {
  type: string;
  key: string;
  label: string;
  path: string | null;
  genreId: number | null;
  excludedGenres?: number[];
}
