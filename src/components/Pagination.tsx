import { ArrowIcon } from './ui/ArrowIcon';
import { getPageNumbers } from '@/utils/getPageNumbers';

interface PaginationProps {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  onPageClick: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

export const Pagination = (props: PaginationProps) => {
  const { onNextPageClick, onPrevPageClick, onPageClick, currentPage, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination_button prev" type="button" onClick={onPrevPageClick} disabled={currentPage === 1}>
        <ArrowIcon />
      </button>

      <div className="page-numbers_wrap">
        {getPageNumbers(currentPage, totalPages).map((page) =>
          typeof page === 'number' ? (
            <button
              type="button"
              key={page}
              onClick={() => {
                onPageClick(page);
              }}
              className={`pagination_button ${page === currentPage ? 'active' : ''}`}
            >
              {page}
            </button>
          ) : (
            <span key={`dots_${String(Math.random())}`} className="pagination_button pagination_ellipsis">
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
