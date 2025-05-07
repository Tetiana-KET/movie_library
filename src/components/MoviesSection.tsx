import { MovieInterface } from '@/models/MovieInterface';
import { MoviesList } from './MoviesList';
import { forwardRef } from 'react';

interface MoviesSectionProps {
  errorMessage: string;
  movieList: MovieInterface[];
}

export const MoviesSection = forwardRef<HTMLDivElement, MoviesSectionProps>(({ movieList, errorMessage }, ref) => {
  return (
    <section ref={ref} className="movies">
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {movieList.length ? <h2>Movies</h2> : <h2>No movies found. Try a different search.</h2>}
      {movieList.length > 0 && <MoviesList movieList={movieList} />}
    </section>
  );
});
MoviesSection.displayName = 'MoviesSection';
