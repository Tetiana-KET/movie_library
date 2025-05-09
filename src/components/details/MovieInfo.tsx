import { InfoValues } from '@/components/details/InfoValues';
import { Companies, Countries, Genre, Language } from '@/models/MovieDetails';
import { formatInfoTitle } from '@/utils/formatInfoTitle';
import { BackButton } from '../ui/BackButton';

export interface MovieInfoProps {
  genres: Genre[];
  overview: string;
  homepage: string;
  releaseDate: string;
  countries: Countries[];
  status: string;
  language: Language[];
  budget: number;
  revenue: number;
  tagline: string;
  productionCompanies: Companies[];
}

export interface SeriesInfoProps {
  genres: Genre[];
  overview: string;
  homepage: string;
  firstEpisode: string;
  lastEpisode: string;
  countries: Countries[];
  status: string;
  language: Language[];
  seasons: number;
  episodes: number;
  tagline: string;
  productionCompanies: Companies[];
}

type UnifiedInfoProps = (MovieInfoProps | SeriesInfoProps) & { isTv: boolean };

export const MovieInfo = ({ isTv, ...info }: UnifiedInfoProps) => {
  const sections = Object.entries(info) as [keyof MovieInfoProps, unknown][];

  return (
    <div className="text-lg flex gap-3 flex-col-reverse lg:flex-row justify-between">
      <div>
        {sections.map(([title, value]) => (
          <div key={title as string} className="flex flex-col sm:flex-row mb-6">
            <h4 className=" text-light-200 shrink-0 basis-auto sm:basis-[150px]">{formatInfoTitle(title)}</h4>
            <div className="font-semibold text-balance">{<InfoValues title={title} value={value} isTv={isTv} />}</div>
          </div>
        ))}
      </div>

      <div className="basis-auto lg:basis-[230px] max-w-[230px] shrink-0 mb-10 lg:mb-0">
        <BackButton />
      </div>
    </div>
  );
};
