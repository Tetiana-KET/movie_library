import { MediaInterface } from '@/models/MovieInterface';
import { StarIcon } from './ui/StarIcon';
import { Link } from 'react-router-dom';
import { getGenreList } from '@/utils/getGenreList';
import { getImagePath } from '@/utils/getImagePath';

interface MovieCard {
  movie: MediaInterface;
}

export const MovieCard = ({ movie }: MovieCard) => {
  const { genre_ids, poster_path, release_date, title, vote_average, first_air_date, name } = movie;

  const genreList = getGenreList(genre_ids);

  return (
    <li>
      <Link
        to={`/${movie.media_type}/${String(movie.id)}`}
        onClick={() => {
          sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        }}
      >
        <figure className="movie-card group">
          <div className="ratio-box">
            <img
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              src={getImagePath(poster_path)}
              alt={title && `a poster for movie: ${title}`}
              style={{ objectPosition: 'center 35%' }}
              loading="lazy"
            />
          </div>
          <figcaption className="mt-4">
            <h3>{title ?? name ?? 'N/A'}</h3>
            <div className="content">
              <div className="rating">
                <StarIcon />
                <p>{(vote_average && vote_average.toFixed(1)) || 'N/A'}</p>
              </div>
              <span>•</span>
              {genreList.length && (
                <div className="genres">
                  {genreList.slice(0, 2).map((name) => (
                    <span key={name}>{name}</span>
                  ))}
                </div>
              )}
              {release_date && <p className="year">{release_date.split('-')[0]}</p>}
              {first_air_date && <p className="year">{first_air_date.split('-')[0]}</p>}
            </div>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};
