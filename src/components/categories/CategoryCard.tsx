import { CategoryType } from '@/models/CategoryType';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  category: CategoryType;
  isSelected: boolean;
  setSelectedCategory: Dispatch<SetStateAction<CategoryType>>;
}

export const CategoryCard = ({ category, isSelected, setSelectedCategory }: CategoryCardProps) => {
  const { label, path } = category;
  const navigate = useNavigate();

  return (
    <button
      className={`rounded-lg overflow-hidden category-shadow hover:category-shadow-hover  ${isSelected ? 'opacity-95 pointer-events-none category-shadow-active' : ''}`}
      type="button"
      onClick={() => {
        setSelectedCategory(category);
        const newParams = new URLSearchParams(location.search);
        newParams.set('category', category.key);
        void navigate({ search: newParams.toString() });
      }}
    >
      <figure className="relative">
        <img src={path} alt={`image for ${label} category`} />
        <figcaption
          className={`absolute left-0 right-0 bottom-1 text-left bg-overlay/70  text-1xl font-bold py-4 pl-4 ${isSelected ? 'text-light-100' : 'text-white'}`}
        >
          {label}
        </figcaption>
      </figure>
    </button>
  );
};
