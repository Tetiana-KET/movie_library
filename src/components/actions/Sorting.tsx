import { SORT_OPTIONS, SortOptions } from '@/consts/SORT_OPTIONS';
import { useEffect, useRef, useState } from 'react';

interface SortProps {
  sortBy: SortOptions;
  setSortBy: (value: SortOptions) => void;
}

export const Sorting = ({ sortBy, setSortBy }: SortProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (value: SortOptions) => {
    setSortBy(value);
  };

  return (
    <div ref={ref} className="max-w-[320px] min-w-[200px] bg-primary py-2 cursor-pointer relative">
      <button
        type="button"
        className="flex justify-between items-center w-full px-4 py-2 bg-primary text-white text-base sm:text-2lg border border-gray-300 rounded-md shadow-sm hover:border-gray-400 focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{sortBy.label}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      <div
        className={`absolute z-10 top-[100%] right-0 left-0 origin-top bg-primary/90 rounded-lg transition-all duration-300 ease-in-out 
          ${isOpen ? 'opacity-100 scale-y-100 max-h-[300px] visible' : 'opacity-0 scale-y-0 max-h-0 invisible'}`}
      >
        <ul className="block bg-primary/90 font-normal text-white text-base sm:text-2lg py-4 rounded-lg">
          {SORT_OPTIONS.map((option) => (
            <li
              key={option.value}
              value={option.value}
              role="option"
              aria-selected={sortBy.value === option.value}
              className="py-2 px-5 hover:bg-light-100/25 aria-selected:bg-light-100/10 aria-selected:cursor-default"
              onClick={() => {
                handleChange(option);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
