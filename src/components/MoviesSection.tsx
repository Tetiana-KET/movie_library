import { MediaInterface } from '@/models/MovieInterface';
import { MoviesList } from './MoviesList';
import { CategoryType } from '@/models/CategoryType';
import { Sorting } from './actions/Sorting';
import { SortOptions } from '@/consts/SORT_OPTIONS';

interface MoviesSectionProps {
  errorMessage: string;
  movieList: MediaInterface[];
  selectedCategory: CategoryType;
  ref?: React.Ref<HTMLDivElement>;
  sortBy: SortOptions;
  setSortBy: (value: SortOptions) => void;
}

export const MoviesSection = ({
  movieList,
  errorMessage,
  selectedCategory,
  ref,
  sortBy,
  setSortBy,
}: MoviesSectionProps) => {
  return (
    <section ref={ref} className="movies">
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {movieList.length ? (
        <div className="flex gap-3 h-[58px] justify-between items-center flex-wrap mb-7">
          <h2 className="mb-0 flex  ">{selectedCategory.key === 'all' ? 'All results' : selectedCategory.label}</h2>{' '}
          {selectedCategory.key !== 'all' && <Sorting sortBy={sortBy} setSortBy={setSortBy} />}
        </div>
      ) : (
        <h2>No results found. Try a different search.</h2>
      )}
      {movieList.length > 0 && <MoviesList movieList={movieList} />}
    </section>
  );
};
