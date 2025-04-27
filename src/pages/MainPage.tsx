import { HeroSection } from '@/components/HeroSection';
import { MoviesList } from '@/components/MoviesList';
import { Search } from '@/components/Search';
import { Spinner } from '@/components/ui/Spinner';
import { GENRES_MAP } from '@/consts/GENRES_MAP';
import { MovieInterface } from '@/models/MovieInterface';
import { fetchGenres } from '@/services/fetchGenres';
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

  useEffect(() => {
    fetchGenres()
      .then((data) => {
        data.genres.forEach((genre) => {
          GENRES_MAP[genre.id] = genre.name;
        });
      })
      .catch((e: Error) => {
        setErrorMessage(e.message);
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
        {movieList.length && <MoviesList movieList={movieList} />}
      </section>
    </div>
  );
};
