import { InfoValues } from '@/components/details/InfoValues';
import { Companies, Countries, Genre, Language } from '@/models/MovieDetails';
import { formatInfoTitle } from '@/utils/formatInfoTitle';
import { HomeButton } from './HomeButton';

export interface MovieInfoProps {
  genres: Genre[];
  overview: string;
  releaseDate: string;
  countries: Countries[];
  status: string;
  language: Language[];
  budget: number;
  revenue: number;
  tagline: string;
  productionCompanies: Companies[];
}

export const MovieInfo = (props: MovieInfoProps) => {
  const sections = Object.entries(props) as [keyof MovieInfoProps, unknown][];

  return (
    <div className="text-lg flex gap-3 flex-col-reverse lg:flex-row">
      <div>
        {sections.map(([title, value]) => (
          <div key={title as string} className="flex flex-col sm:flex-row mb-6">
            <h4 className=" text-light-200 shrink-0 basis-auto sm:basis-[150px]">{formatInfoTitle(title)}</h4>
            <div className="font-semibold text-balance">{<InfoValues title={title} value={value} />}</div>
          </div>
        ))}
      </div>

      <div className="basis-auto lg:basis-[280px] max-w-[280px] shrink-0 mb-10 lg:mb-0">
        <HomeButton />
      </div>
    </div>
  );
};
