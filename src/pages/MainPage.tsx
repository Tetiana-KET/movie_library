import HeroSection from '@/components/HeroSection';
import TrendingMovies from '@/components/TrendingMovies';
import Search from '@/components/Search';
import { Pagination } from '@/components/Pagination';
import { Spinner } from '@/components/ui/Spinner';
import { MoviesSection } from '@/components/MoviesSection';
import { CategoriesSection } from '@/components/categories/CategoriesSection';
import { useDebounce } from '@/hooks/useDebounce';
import { useRestoreScrollPositionOnPop } from '@/hooks/useRestoreScrollPositionOnPop';
import { useTrendingLoader } from '@/hooks/useTrendingLoader';
import { useGenresLoader } from '@/hooks/useGenresLoader';
import { useMediaLoader } from '@/hooks/useMediaLoader';
import { useRef, useState } from 'react';
import { scrollToSection } from '@/utils/scrollToSection';
import { useSyncPagination } from '@/hooks/useSyncPagination';

export const MainPage = () => {
  useGenresLoader();
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 700);

  const { currentPage, setCurrentPage } = useSyncPagination();
  const { trendingMovies, heroPostersPaths } = useTrendingLoader();
  const { movieList, totalPages, errorMessage, isLoading, selectedCategory, setSelectedCategory, sortBy, setSortBy } =
    useMediaLoader(debouncedQuery, currentPage, setCurrentPage);

  const moviesSectionRef = useRef<HTMLDivElement | null>(null);

  useRestoreScrollPositionOnPop(movieList.length);

  const handleNextButtonClick = () => {
    setCurrentPage((prev) => prev + 1);
    scrollToSection(moviesSectionRef);
  };

  const handlePrevButtonClick = () => {
    setCurrentPage((prev) => prev - 1);
    scrollToSection(moviesSectionRef);
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    scrollToSection(moviesSectionRef);
  };

  return (
    <div className="wrapper">
      {isLoading && <Spinner />}
      <HeroSection heroPosterPaths={heroPostersPaths} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {trendingMovies.length && <TrendingMovies trendingMovies={trendingMovies} />}
      <CategoriesSection setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <MoviesSection
        movieList={movieList}
        errorMessage={errorMessage}
        selectedCategory={selectedCategory}
        ref={moviesSectionRef}
        sortBy={sortBy}
        setSortBy={setSortBy}
        debouncedQuery={debouncedQuery}
      />
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
