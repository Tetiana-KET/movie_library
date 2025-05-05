import { TrendingInterface } from '@/models/MovieInterface';
import { getImagePath } from '@/utils/getImagePath';
import React from 'react';
import { Link } from 'react-router-dom';

interface TrendingMoviesProps {
  trendingMovies: TrendingInterface[];
}

const TrendingMovies = ({ trendingMovies }: TrendingMoviesProps) => {
  return (
    <section className="trending">
      <h2>Popular now</h2>
      <div className="carouse-container">
        {trendingMovies.length && (
          <ul>
            {trendingMovies.map((movie, index) => (
              <li key={movie.id}>
                <Link to={`/movie/${String(movie.id)}`}>
                  <div>
                    <img src={getImagePath(movie.poster_path)} alt={`A poster for movie: ${movie.title}`} />
                  </div>
                  <p>{index + 1}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default React.memo(TrendingMovies);
