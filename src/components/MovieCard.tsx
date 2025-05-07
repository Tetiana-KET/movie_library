import { MovieInterface } from '@/models/MovieInterface';
import { StarIcon } from './ui/StarIcon';
import { Link } from 'react-router-dom';
import { getGenreList } from '@/utils/getGenreList';

interface MovieCard {
  movie: MovieInterface;
}

export const MovieCard = ({ movie }: MovieCard) => {
  const { genre_ids, poster_path, release_date, title, vote_average } = movie;

  const genreList = getGenreList(genre_ids);

  return (
    <li>
      <Link
        to={`/movie/${String(movie.id)}`}
        onClick={() => {
          sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        }}
      >
        <figure className="movie-card group">
          <div className="ratio-box">
            <img
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`a poster for movie: ${title}`}
              style={{ objectPosition: 'center 35%' }}
              onError={(e) => {
                const target = e.currentTarget;
                target.onerror = null;
                target.src = '/no-poster.webp';
              }}
              loading="lazy"
            />
          </div>
          <figcaption className="mt-4">
            <h3>{title}</h3>
            <div className="content">
              <div className="rating">
                <StarIcon />
                <p>{vote_average.toFixed(1) || 'N/A'}</p>
              </div>
              <span>•</span>

              {genreList.length && (
                <div className="genres">
                  {genreList.slice(0, 2).map((name) => (
                    <span key={name}>{name}</span>
                  ))}
                </div>
              )}
              <p className="year">{release_date.split('-')[0] || 'N/A'}</p>
            </div>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};
