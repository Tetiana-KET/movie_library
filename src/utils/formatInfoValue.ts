import { MovieInfoProps } from '@/components/details/MovieInfo';
import { formatDate } from './formatDate';

export function formatInfoValue(title: keyof MovieInfoProps, value: unknown) {
  if (Array.isArray(value)) {
    if (title === 'genres') {
      return value.map((g: { id: number; name: string }) => g.name);
    }
    if (title === 'countries') {
      return value.map((c: { iso_3166_1: string; name: string }) => c.name);
    }
    if (title === 'language') {
      return value.map((l: { english_name: string; iso_639_1: string; name: string }) => l.english_name);
    }
    if (title === 'production_Companies') {
      return value.map((c: { id: number; logo_path: string | null; name: string; origin_country: string }) => c.name);
    }
    if (title === 'release_date' && typeof value === 'string') {
      return formatDate(value);
    }
  }

  if (typeof value === 'number') {
    return `$${value.toLocaleString()}`;
  }

  if (typeof value === 'string') {
    return value;
  }

  return 'No information available';
}
