import { MovieInfoProps, SeriesInfoProps } from '@/components/details/MovieInfo';
import { formatDate } from '@/utils/formatDate';
import { formatMillions } from '@/utils/formatMillions';
import { GenreList } from './GenreList';
import { CountriesList } from './CountriesList';
import { LanguageList } from './LanguageList';
import { CompaniesList } from './CompaniesList';
import { Link } from 'react-router-dom';

interface InfoValuesProps {
  title: keyof MovieInfoProps | keyof SeriesInfoProps;
  value: unknown;
  isTv: boolean;
}

export const InfoValues = ({ title, value, isTv }: InfoValuesProps) => {
  if (title === 'genres' && Array.isArray(value)) {
    return <GenreList value={value} />;
  }

  if (title === 'countries' && Array.isArray(value)) {
    return <CountriesList value={value} />;
  }

  if (title === 'language' && Array.isArray(value)) {
    return <LanguageList value={value} />;
  }

  if (title === 'productionCompanies' && Array.isArray(value)) {
    return <CompaniesList value={value} />;
  }

  if (!isTv && typeof value === 'number') {
    return <p>{formatMillions(value)}</p>;
  }

  if (isTv && typeof value === 'number') {
    return <p>{value.toLocaleString()}</p>;
  }

  if ((title === 'releaseDate' || title === 'lastEpisode' || title === 'firstEpisode') && typeof value === 'string') {
    return <p>{formatDate(value)}</p>;
  }

  if (title === 'homepage' && typeof value === 'string' && value) {
    return (
      <Link to={value} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline break-all">
        {value}
      </Link>
    );
  }

  if (typeof value === 'string') {
    return <p className={title === 'overview' ? 'text-white font-medium' : ''}>{value}</p>;
  }

  return <p>No information available</p>;
};
