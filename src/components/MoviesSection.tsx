import { MovieInterface } from '@/models/MovieInterface';
import { MoviesList } from './MoviesList';

interface MoviesSectionProps {
  errorMessage: string;
  movieList: MovieInterface[];
}

export const MoviesSection = ({ errorMessage, movieList }: MoviesSectionProps) => {
  return (
    <section className="movies">
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {movieList.length ? <h2>Movies</h2> : <h2>No movies found. Try a different search.</h2>}
      {movieList.length && <MoviesList movieList={movieList} />}
    </section>
  );
};
