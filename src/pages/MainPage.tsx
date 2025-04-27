import { HeroSection } from '@/components/HeroSection';
import { Search } from '@/components/Search';
import { Spinner } from '@/components/ui/Spinner';
import { MovieInterface } from '@/models/MovieInterface';
import { fetchMovies } from '@/services/fetchMovies';
import { useEffect, useState } from 'react';

export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | ''>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieList, setMovieList] = useState<MovieInterface[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage('');

    fetchMovies()
      .then((data) => {
        setMovieList(data.results);
      })
      .catch((e: Error) => {
        setErrorMessage(e.message);
        setMovieList([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <HeroSection />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <section className="movies">
        <h2>All movies</h2>
        {isLoading && <Spinner />}
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <ul>
          {movieList.length &&
            movieList.map((movie) => (
              <li key={movie.id} className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="a poster for movie" />
                <h3>{movie.title}</h3>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};
