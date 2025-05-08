import { MediaInterface } from '@/models/MovieInterface';
import { MoviesList } from './MoviesList';
import { forwardRef } from 'react';
import { CategoryType } from '@/models/CategoryType';

interface MoviesSectionProps {
  errorMessage: string;
  movieList: MediaInterface[];
  selectedCategory: CategoryType;
}

export const MoviesSection = forwardRef<HTMLDivElement, MoviesSectionProps>(
  ({ movieList, errorMessage, selectedCategory }, ref) => {
    return (
      <section ref={ref} className="movies">
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        {movieList.length ? <h2>{selectedCategory.label}</h2> : <h2>No results found. Try a different search.</h2>}
        {movieList.length > 0 && <MoviesList movieList={movieList} />}
      </section>
    );
  },
);
MoviesSection.displayName = 'MoviesSection';
