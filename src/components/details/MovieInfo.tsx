import { Companies, Countries, Genre, Language } from '@/models/MovieDetails';
import { formatInfoTitle } from '@/utils/formatInfoTitle';
import { formatInfoValue } from '@/utils/formatInfoValue';

export interface MovieInfoProps {
  genres: Genre[];
  overview: string;
  release_date: string;
  countries: Countries[];
  status: string;
  language: Language[];
  budget: number;
  revenue: number;
  tagline: string;
  production_Companies: Companies[];
}

export const MovieInfo = (props: MovieInfoProps) => {
  const sections = Object.entries(props) as [keyof MovieInfoProps, unknown][];
  console.log(sections);
  return (
    <div className="m-width-[800px]">
      {sections.map(([title, value]) => (
        <div key={title as string}>
          <h4 className="text-lg text-light-200 max-w-[150px]">{formatInfoTitle(title)}</h4>
          <p>{formatInfoValue(title, value)}</p>
        </div>
      ))}
    </div>
  );
};
