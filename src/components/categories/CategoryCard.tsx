import { CategoryType } from '@/models/CategoryType';
import { Dispatch, SetStateAction } from 'react';

interface CategoryCardProps {
  category: CategoryType;
  isSelected: boolean;
  isDisabled: boolean;
  setSelectedCategory: Dispatch<SetStateAction<CategoryType>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const CategoryCard = ({
  category,
  isSelected,
  isDisabled,
  setSelectedCategory,
  setCurrentPage,
}: CategoryCardProps) => {
  const { label, path } = category;

  return (
    <button
      className={`rounded-lg overflow-hidden category-shadow hover:category-shadow-hover ${isSelected ? 'opacity-95 pointer-events-none category-shadow-active' : ''} ${isDisabled ? 'opacity-65 pointer-events-none' : ''}`}
      type="button"
      onClick={() => {
        setSelectedCategory(category);
        setCurrentPage(1);
      }}
    >
      <figure className="relative">
        <img src={path ?? ''} alt={`image for ${label} category`} />
        <figcaption
          className={`absolute left-0 right-0 bottom-1 text-left bg-overlay/70  text-1xl font-bold py-4 pl-4 ${isSelected ? 'text-light-100' : 'text-white'}`}
        >
          {label}
        </figcaption>
      </figure>
    </button>
  );
};
