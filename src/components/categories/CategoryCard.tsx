import { CategoryType } from '@/models/CategoryType';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  category: CategoryType;

  setSelectedCategory: Dispatch<SetStateAction<CategoryType>>;
}

export const CategoryCard = ({ category, setSelectedCategory }: CategoryCardProps) => {
  const { label, path } = category;
  const navigate = useNavigate();

  return (
    <button
      className="rounded-lg overflow-hidden category-shadow hover:category-shadow-hover"
      type="button"
      onClick={() => {
        setSelectedCategory(category);
        const newParams = new URLSearchParams(location.search);
        newParams.set('category', category.key);
        navigate({ search: newParams.toString() });
      }}
    >
      <figure className="relative">
        <img src={path} alt={`image for ${label} category`} />
        <figcaption className="absolute left-0 right-0 bottom-1 text-left bg-overlay/70 text-white text-1xl font-bold py-4 pl-4">
          {label}
        </figcaption>
      </figure>
    </button>
  );
};
