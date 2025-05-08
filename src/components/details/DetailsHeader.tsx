import { StarIcon } from '../ui/StarIcon';
import { formatVoteCount } from '@/utils/formatVoteCount';
import { getAgeRating } from '@/utils/getAgeRating';
import { formatRuntime } from '@/utils/formatRuntime';
import { Genre } from '@/models/MovieDetails';

interface DetailsHeaderProps {
  title: string;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
  genres: Genre[];
  runtime: number;
  adult: boolean;
}

export const DetailsHeader = (props: DetailsHeaderProps) => {
  const { title, voteAverage, voteCount, releaseDate, genres, runtime, adult } = props;

  return (
    <header className="mb-10">
      <div className="flex justify-between mb-3 gap-3 flex-wrap">
        <h1 className="mx-0 text-5xl font-bold leading-tight text-white sm:text-[56px] sm:leading-[64px]">{title}</h1>
        <div className="flex gap-1 items-center button">
          <StarIcon size={30} />
          <p className="text-sm xs:text-2xl text-white">
            {voteAverage.toFixed(1) || 'N/A'}
            <span className="text-light-100">/10 ({formatVoteCount(voteCount)} votes)</span>
          </p>
        </div>
      </div>
      <div className="text-sm xs:text-2xl text-light-100 flex gap-2.5">
        {(releaseDate && releaseDate.split('-')[0]) || 'N/A'}
        <span>•</span>
        {
          getAgeRating(
            adult,
            genres.map((genreObj) => genreObj.id),
          ).label
        }
        <span>•</span>
        {formatRuntime(runtime)}
      </div>
    </header>
  );
};
