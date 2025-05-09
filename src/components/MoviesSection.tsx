import { MediaInterface } from '@/models/MovieInterface';
import { MoviesList } from './MoviesList';
import { CategoryType } from '@/models/CategoryType';

interface MoviesSectionProps {
  errorMessage: string;
  movieList: MediaInterface[];
  selectedCategory: CategoryType;
  ref?: React.Ref<HTMLDivElement>;
}

export const MoviesSection = ({ movieList, errorMessage, selectedCategory, ref }: MoviesSectionProps) => {
  return (
    <section ref={ref} className="movies">
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {movieList.length ? <h2>{selectedCategory.label}</h2> : <h2>No results found. Try a different search.</h2>}
      {movieList.length > 0 && <MoviesList movieList={movieList} />}
    </section>
  );
};
