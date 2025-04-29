import React from 'react';
import { ArrowIcon } from './ui/ArrowIcon';
import { getPageNumbers } from '@/utils/getPageNumbers';

type PaginationProps = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  onPageClick: (page: number) => void;
  currentPage: number;
  totalPages: number;
};

const Pagination = (props: PaginationProps) => {
  const { onNextPageClick, onPrevPageClick, onPageClick, currentPage, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination_button prev" type="button" onClick={onPrevPageClick} disabled={currentPage === 1}>
        <ArrowIcon />
      </button>

      <div className="page-numbers_wrap">
        {getPageNumbers(currentPage, totalPages).map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={page}
              onClick={() => onPageClick(page)}
              className={`pagination_button ${page === currentPage ? 'active' : ''}`}
            >
              {page}
            </button>
          ) : (
            <span key={`dots_${index}`} className="pagination_button pagination_ellipsis">
              {page}
            </span>
          ),
        )}
      </div>

      <button
        className="pagination_button next"
        type="button"
        onClick={onNextPageClick}
        disabled={currentPage === totalPages}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default React.memo(Pagination);
