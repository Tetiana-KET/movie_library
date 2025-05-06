import { ADJACENT_COUNT, PAGES_TO_SHOW } from '@/consts/pagination';

export const getPageNumbers = (currentPage: number, totalPages: number) => {
  const pages: (string | number)[] = [];

  if (totalPages <= PAGES_TO_SHOW) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > Math.ceil(PAGES_TO_SHOW / 2)) pages.push('...');

    const start = Math.max(2, currentPage - ADJACENT_COUNT);
    const end = Math.min(totalPages - 1, currentPage + ADJACENT_COUNT);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - Math.floor(PAGES_TO_SHOW / 2)) pages.push('...');
    pages.push(totalPages);
  }

  return pages;
};
