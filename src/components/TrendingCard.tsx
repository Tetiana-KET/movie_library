import { TrendingInterface } from '@/models/MovieInterface';
import { getImagePath } from '@/utils/getImagePath';
import { Ref } from 'react';
import { Link } from 'react-router-dom';

interface TrendingCardProps {
  movie: TrendingInterface;
  index: number;
  slideRef: Ref<HTMLLIElement>;
}

const TrendingCard = ({ movie, index, slideRef }: TrendingCardProps) => {
  return (
    <li key={movie.id} ref={slideRef}>
      <Link to={`/movie/${String(movie.id)}`}>
        <div>
          <img src={getImagePath(movie.poster_path)} alt={`A poster for movie: ${movie.title}`} />
        </div>
        <p>{index + 1}</p>
      </Link>
    </li>
  );
};

export default TrendingCard;
