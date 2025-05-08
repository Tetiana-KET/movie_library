import { Dispatch, SetStateAction } from 'react';

interface CategoryCardProps {
  category: {
    key: string;
    label: string;
    path: string;
  };
  onClick: Dispatch<SetStateAction<string>>;
}

export const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  const { key, label, path } = category;

  return (
    <button
      className="rounded-lg overflow-hidden category-shadow hover:category-shadow-hover"
      type="button"
      onClick={() => {
        onClick(key);
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
