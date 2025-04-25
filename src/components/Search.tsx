import { SearchIcon } from './ui/SearchIcon';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
  return (
    <div className="search">
      <div>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search through hundreds of movies online"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="placeholder-ellipsis w-full overflow-hidden text-ellipsis whitespace-nowrap"
        />
      </div>
    </div>
  );
};
