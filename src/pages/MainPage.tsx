import HeroSection from '@/components/HeroSection';
import TrendingMovies from '@/components/TrendingMovies';
import Search from '@/components/Search';
import { Pagination } from '@/components/Pagination';
import { Spinner } from '@/components/ui/Spinner';
import { useDebounce } from '@/hooks/useDebounce';
import { useState } from 'react';
import { useTrendingLoader } from '@/hooks/useTrendingLoader';
import { useGenresLoader } from '@/hooks/useGenresLoader';
import { useMoviesLoader } from '@/hooks/useMoviesLoader';
import { MoviesSection } from '@/components/MoviesSection';

export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedQuery = useDebounce(searchQuery, 700);
  const { trendingMovies, heroPostersPaths } = useTrendingLoader();
  const { movieList, totalPages, errorMessage, isLoading } = useMoviesLoader(debouncedQuery, currentPage);

  useGenresLoader();

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
      <MoviesSection movieList={movieList} errorMessage={errorMessage} />
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
