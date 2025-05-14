import HeroSection from '@/components/HeroSection';
import TrendingMovies from '@/components/TrendingMovies';
import Search from '@/components/Search';
import { Pagination } from '@/components/Pagination';
import { Spinner } from '@/components/ui/Spinner';
import { MoviesSection } from '@/components/MoviesSection';
import { CategoriesSection } from '@/components/categories/CategoriesSection';
import { useRestoreScrollPositionOnPop } from '@/hooks/useRestoreScrollPositionOnPop';
import { useTrendingLoader } from '@/hooks/useTrendingLoader';
import { useGenresLoader } from '@/hooks/useGenresLoader';
import { useMediaLoader } from '@/hooks/useMediaLoader';
import { useRef } from 'react';
import { scrollToSection } from '@/utils/scrollToSection';

export const MainPage = () => {
  useGenresLoader();

  const { trendingMovies, heroPostersPaths } = useTrendingLoader();
  const {
    movieList,
    totalPages,
    errorMessage,
    isLoading,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
  } = useMediaLoader();

  const moviesSectionRef = useRef<HTMLDivElement | null>(null);

  useRestoreScrollPositionOnPop(movieList.length, isLoading);

  const handleNextButtonClick = () => {
    setCurrentPage((prev: number) => prev + 1);
    scrollToSection(moviesSectionRef);
  };

  const handlePrevButtonClick = () => {
    setCurrentPage((prev: number) => prev - 1);
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
      <CategoriesSection
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        setCurrentPage={setCurrentPage}
      />
      <MoviesSection
        movieList={movieList}
        errorMessage={errorMessage}
        selectedCategory={selectedCategory}
        ref={moviesSectionRef}
        sortBy={sortBy}
        setSortBy={setSortBy}
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
