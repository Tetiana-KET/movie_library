import HeroSection from '@/components/HeroSection';
import TrendingMovies from '@/components/TrendingMovies';
import Search from '@/components/Search';
import { Pagination } from '@/components/Pagination';
import { Spinner } from '@/components/ui/Spinner';
import { MoviesSection } from '@/components/MoviesSection';
import { useDebounce } from '@/hooks/useDebounce';
import { useRestoreScrollPositionOnPop } from '@/hooks/useRestoreScrollPositionOnPop';
import { useTrendingLoader } from '@/hooks/useTrendingLoader';
import { useGenresLoader } from '@/hooks/useGenresLoader';
import { useMediaLoader } from '@/hooks/useMediaLoader';
import { useRef, useState } from 'react';
import { scrollToSection } from '@/utils/scrollToSection';
import { CategoriesSection } from '@/components/categories/CategoriesSection';

export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedQuery = useDebounce(searchQuery, 700);
  const { trendingMovies, heroPostersPaths } = useTrendingLoader();
  const { movieList, totalPages, errorMessage, isLoading, selectedCategory, setSelectedCategory } = useMediaLoader(
    debouncedQuery,
    currentPage,
  );

  const moviesSectionRef = useRef<HTMLDivElement | null>(null);

  useGenresLoader();
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
      <CategoriesSection setSelectedCategory={setSelectedCategory} />
      <MoviesSection
        movieList={movieList}
        errorMessage={errorMessage}
        selectedCategory={selectedCategory}
        ref={moviesSectionRef}
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
