import { MEDIA_CATEGORIES } from '@/consts/MEDIA_CATEGORIES';
import { CategoryCard } from './CategoryCard';
import { Dispatch, SetStateAction } from 'react';

interface CategoriesSectionProps {
  onClick: Dispatch<SetStateAction<string>>;
}

export const CategoriesSection = ({ onClick }: CategoriesSectionProps) => {
  return (
    <section className="mb-21">
      <h2>Select Category</h2>
      <nav>
        <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {MEDIA_CATEGORIES.map((category) => (
            <li key={category.key}>
              <CategoryCard category={category} onClick={onClick} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
