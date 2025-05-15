import React, { useEffect, useState } from 'react';
import { SearchIcon } from './ui/SearchIcon';
import { scrollToSection } from '@/utils/scrollToSection';
import { CrossIcon } from './ui/CrossIcon';

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  moviesSectionRef: React.RefObject<HTMLDivElement | null>;
}

const Search = ({ searchQuery, setSearchQuery, moviesSectionRef }: SearchProps) => {
  const [inputValue, setInputValue] = useState(searchQuery);

  // insert query from props into the input, on mounting
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  // Tracking text deletion - auto-reset request
  useEffect(() => {
    if (inputValue === '' && searchQuery !== '') {
      setSearchQuery('');
    }
  }, [inputValue, searchQuery]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(inputValue.trim());

    setTimeout(() => {
      scrollToSection(moviesSectionRef);
    }, 0);
  };

  const handleReset = () => {
    if (inputValue) {
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <div>
        <SearchIcon />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search through hundreds of movies online"
          className="placeholder-ellipsis w-full overflow-hidden text-ellipsis whitespace-nowrap"
        />
        <button
          type="button"
          className="button p-0 w-[30px] h-[30px] hover:bg-light-100/20 text-accent flex items-center justify-center"
          onClick={handleReset}
          disabled={!Boolean(inputValue.trim())}
        >
          <CrossIcon />
        </button>
      </div>
    </form>
  );
};

export default React.memo(Search);
