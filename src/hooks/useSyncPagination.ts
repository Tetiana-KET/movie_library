import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSyncPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromParams = Number(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromParams);

  useEffect(() => {
    if (Number(searchParams.get('page')) !== currentPage) {
      searchParams.set('page', String(currentPage));
      setSearchParams(searchParams, { replace: true });
    }
  }, [currentPage, searchParams, setSearchParams]);

  return { currentPage, setCurrentPage };
};
