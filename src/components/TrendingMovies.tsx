import { TrendingMovie } from '@/models/TrendingMovie';
import React from 'react';

interface TrendingMoviesProps {
  trendingMovies: TrendingMovie[];
}

const TrendingMovies = ({ trendingMovies }: TrendingMoviesProps) => {
  return (
    <section className="trending">
      <h2>Trending</h2>
      {trendingMovies.length && (
        <ul>
          {trendingMovies.map((movie, index) => (
            <li key={movie.movie_id}>
              <p>{index + 1}</p>
              <img src={movie.poster_url} alt={`A poster for movie: ${movie.searchTerm}`} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default React.memo(TrendingMovies);
