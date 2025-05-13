import { MEDIA_CATEGORIES } from '@/consts/MEDIA_CATEGORIES';
import { CategoryCard } from './CategoryCard';
import { Dispatch, SetStateAction } from 'react';
import { CategoryType } from '@/models/CategoryType';

interface CategoriesSectionProps {
  selectedCategory: CategoryType;
  setSelectedCategory: Dispatch<SetStateAction<CategoryType>>;
}

export const CategoriesSection = ({ selectedCategory, setSelectedCategory }: CategoriesSectionProps) => {
  return (
    <section className="mb-21">
      <h2>Select Category</h2>
      <nav>
        <ul className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {MEDIA_CATEGORIES.map((category) =>
            category.key !== 'all' ? (
              <li key={category.label}>
                <CategoryCard
                  category={category}
                  setSelectedCategory={setSelectedCategory}
                  isSelected={selectedCategory.key === category.key}
                  isDisabled={selectedCategory.key === 'all'}
                />
              </li>
            ) : null,
          )}
        </ul>
      </nav>
    </section>
  );
};
