import { formatInfoTitle } from '@/utils/formatInfoTitle';
import { formatInfoValue } from '@/utils/formatInfoValue';

export interface MovieInfoProps {
  genres: {
    id: number;
    name: string;
  }[];
  overview: string;
  release_date: string;
  countries: {
    iso_3166_1: string;
    name: string;
  }[];
  status: string;
  language: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  budget: number;
  revenue: number;
  tagline: string;
  production_Companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
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
