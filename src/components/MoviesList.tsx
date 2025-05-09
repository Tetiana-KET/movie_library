import { MediaInterface } from '@/models/MovieInterface';
import { MovieCard } from './MovieCard';

interface MovieListProps {
  movieList: MediaInterface[];
}

export const MoviesList = ({ movieList }: MovieListProps) => {
  return <ul>{movieList.length && movieList.map((movie) => <MovieCard key={movie.id} movie={movie} />)}</ul>;
};
