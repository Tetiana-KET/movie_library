import { MovieInterface } from '@/models/MovieInterface';
import { StarIcon } from './ui/StarIcon';

interface MovieCard {
  movie: MovieInterface;
}

export const MovieCard = ({ movie }: MovieCard) => {
  const {
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = movie;

  return (
    <li className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`a poster for movie: ${title}`}
        onError={(e) => {
          const target = e.currentTarget;
          target.onerror = null;
          target.src = '/no-poster.webp';
        }}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <StarIcon />
            <p>{vote_average.toFixed(1) || 'N/A'}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">{release_date.split('-')[0] || 'N/A'}</p>
        </div>
      </div>
    </li>
  );
};
