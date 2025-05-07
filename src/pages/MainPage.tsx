import HeroSection from '@/components/HeroSection';
import TrendingMovies from '@/components/TrendingMovies';
import Search from '@/components/Search';
import { MoviesList } from '@/components/MoviesList';
import { Pagination } from '@/components/Pagination';
import { Spinner } from '@/components/ui/Spinner';
import { GENRES_MAP } from '@/consts/GENRES_MAP';
import { useDebounce } from '@/hooks/useDebounce';
import { MovieInterface, TrendingInterface } from '@/models/MovieInterface';
import { fetchGenres } from '@/services/fetchGenres';
import { fetchMovies } from '@/services/fetchMovies';
import { fetchTrendingMovies } from '@/services/fetchTrendingMovies';
import { useEffect, useState } from 'react';
import { getRandomIndexes } from '@/utils/getRandomIndexes';

export const MainPage = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [movieList, setMovieList] = useState<MovieInterface[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<TrendingInterface[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedQuery = useDebounce(searchQuery, 700);
  const [heroPostersPaths, setHeroPostersPaths] = useState<string[]>([]);

  useEffect(() => {
    fetchGenres()
      .then((data) => {
        data.genres.forEach((genre) => {
          GENRES_MAP[genre.id] = genre.name;
        });
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          console.log(e.message);
        } else {
          console.log('Unknown error', e);
        }
      });
  }, []);

  useEffect(() => {
    fetchTrendingMovies()
      .then((data) => {
        setTrendingMovies(data.results);
        const randomIndexes = getRandomIndexes(data.results.length);
        const selectedPaths = randomIndexes.map((i) => data.results[i].poster_path);
        setHeroPostersPaths(selectedPaths);
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          console.log(e.message);
        } else {
          console.log('Unknown error', e);
        }
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setErrorMessage('');

    fetchMovies(debouncedQuery, currentPage)
      .then((data) => {
        setMovieList(data.results);
        setTotalPages(Math.min(data.total_pages, 500));
      })
      .catch((e: unknown) => {
        if (e instanceof Error) {
          setErrorMessage(e.message);
        } else {
          setErrorMessage('Unknown error');
        }

        setMovieList([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [debouncedQuery, currentPage]);

  const handleNextButtonClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevButtonClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="wrapper">
      {isLoading && <Spinner />}

      <HeroSection heroPosterPaths={heroPostersPaths} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {trendingMovies.length && <TrendingMovies trendingMovies={trendingMovies} />}
      <section className="movies">
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        {movieList.length ? <h2>Movies</h2> : <h2>No movies found. Try a different search.</h2>}
        {movieList.length && <MoviesList movieList={movieList} />}
      </section>
      {movieList.length && (
        <Pagination
          onNextPageClick={handleNextButtonClick}
          onPrevPageClick={handlePrevButtonClick}
          onPageClick={handlePageClick}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};
