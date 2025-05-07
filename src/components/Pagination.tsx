import { getPageNumbers } from '@/utils/getPageNumbers';
import { ButtonWithArrow } from './ui/ButtonWithArrow';

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
      <ButtonWithArrow onClick={onPrevPageClick} disabled={currentPage === 1} className="pagination_button prev" />
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
      <ButtonWithArrow
        onClick={onNextPageClick}
        disabled={currentPage === totalPages}
        className="pagination_button next"
      />
    </div>
  );
};
