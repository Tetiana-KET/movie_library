import { MEDIA_CATEGORIES } from '@/consts/MEDIA_CATEGORIES';
import { CategoryCard } from './CategoryCard';
import { Dispatch, SetStateAction } from 'react';
import { CategoryType } from '@/models/CategoryType';

interface CategoriesSectionProps {
  setSelectedCategory: Dispatch<SetStateAction<CategoryType>>;
}

export const CategoriesSection = ({ setSelectedCategory }: CategoriesSectionProps) => {
  return (
    <section className="mb-21">
      <h2>Select Category</h2>
      <nav>
        <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {MEDIA_CATEGORIES.map((category) => (
            <li key={category.label}>
              <CategoryCard category={category} setSelectedCategory={setSelectedCategory} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
