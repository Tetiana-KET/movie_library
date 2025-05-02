import { StarIcon } from '../ui/StarIcon';
import { formatVoteCount } from '@/utils/formatVoteCount';
import { getAgeRating } from '@/utils/getAgeRating';
import { formatRuntime } from '@/utils/formatRuntime';
import { Genre } from '@/models/MovieDetails';

interface DetailsHeaderProps {
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  genres: Genre[];
  runtime: number;
  adult: boolean;
}

export const DetailsHeader = (props: DetailsHeaderProps) => {
  const { title, vote_average, vote_count, release_date, genres, runtime, adult } = props;

  return (
    <header className="mb-5">
      <div className="title-wrap">
        <h1>{title}</h1>
        <div className="flex gap-1 items-center button">
          <StarIcon size={30} />
          <p className="text-sm xs:text-2xl text-white">
            {vote_average.toFixed(1) || 'N/A'}
            <span className="text-light-100">/10 ({formatVoteCount(vote_count)} votes)</span>
          </p>
        </div>
      </div>
      <div className="text-sm xs:text-2xl text-light-100 flex gap-2.5">
        {release_date.split('-')[0] || 'N/A'}
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
