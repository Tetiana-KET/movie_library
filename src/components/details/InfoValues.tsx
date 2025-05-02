import { MovieInfoProps } from '@/components/details/MovieInfo';
import { Companies, Countries, Genre, Language } from '@/models/MovieDetails';
import { formatDate } from '@/utils/formatDate';
import { formatMillions } from '@/utils/formatMillions';

interface InfoValuesProps {
  title: keyof MovieInfoProps;
  value: unknown;
}

export const InfoValues = ({ title, value }: InfoValuesProps) => {
  if (title === 'genres' && Array.isArray(value)) {
    return (
      <ul className="flex flex-wrap gap-3 font-semibold text-white">
        {value.map((g: Genre) => {
          return (
            <li key={g.id} className="button py-2 px-5">
              {g.name}
            </li>
          );
        })}
      </ul>
    );
  }

  if (title === 'countries' && Array.isArray(value)) {
    return (
      <ul className="list-disc flex gap-6 flex-wrap overflow-hidden">
        {value.map((c: Countries, i: number) => {
          return (
            <li key={c.iso_3166_1} className={i === 0 ? 'list-none' : ''}>
              {c.name}
            </li>
          );
        })}
      </ul>
    );
  }

  if (title === 'language' && Array.isArray(value)) {
    return (
      <ul className="list-disc flex gap-6 flex-wrap overflow-hidden">
        {value.map((l: Language, i: number) => {
          return (
            <li key={l.iso_639_1} className={i === 0 ? 'list-none' : ''}>
              {l.english_name}
            </li>
          );
        })}
      </ul>
    );
  }

  if (title === 'productionCompanies' && Array.isArray(value)) {
    return (
      <ul className="list-disc flex gap-x-6 gap-y-2 flex-wrap overflow-hidden">
        {value.map((c: Companies, i: number) => {
          return (
            <li key={c.id} className={i === 0 ? 'list-none' : ''}>
              {c.name}
            </li>
          );
        })}
      </ul>
    );
  }

  if (typeof value === 'number') {
    return <p>{formatMillions(value)}</p>;
  }

  if (title === 'releaseDate' && typeof value === 'string') {
    return <p>{formatDate(value)}</p>;
  }

  if (typeof value === 'string') {
    return <p className={title === 'overview' ? 'text-white font-medium' : ''}>{value}</p>;
  }

  return <p>No information available</p>;
};
