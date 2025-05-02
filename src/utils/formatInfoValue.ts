import { Companies, Countries, Genre, Language } from '@/models/MovieDetails';
import { formatDate } from './formatDate';
import { MovieInfoProps } from '@/components/details/MovieInfo';

export function formatInfoValue(title: keyof MovieInfoProps, value: unknown) {
  if (Array.isArray(value)) {
    if (title === 'genres') {
      return value.map((g: Genre) => g.name);
    }
    if (title === 'countries') {
      return value.map((c: Countries) => c.name);
    }
    if (title === 'language') {
      return value.map((l: Language) => l.english_name);
    }
    if (title === 'production_Companies') {
      return value.map((c: Companies) => c.name);
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
