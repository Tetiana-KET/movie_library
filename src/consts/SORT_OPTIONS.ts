export const SORT_OPTIONS = [
  { label: 'Most Popular', value: 'popularity.desc' },
  { label: 'Least Popular', value: 'popularity.asc' },
  { label: 'Highest Rated', value: 'vote_average.desc' },
  { label: 'Lowest Rated', value: 'vote_average.asc' },
  { label: 'Most Voted', value: 'vote_count.desc' },
  { label: 'Least Voted', value: 'vote_count.asc' },
  { label: 'Newest Releases', value: 'primary_release_date.desc' },
  { label: 'Oldest Releases', value: 'primary_release_date.asc' },
] as const;

export type SortOptions = (typeof SORT_OPTIONS)[number];
