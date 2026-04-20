import PropTypes from 'prop-types';
import { PAGINATION_LABELS } from '../../constants';

const Pagination = ({
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        onClick={onPreviousPage}
        disabled={currentPage === 1}
      >
        {PAGINATION_LABELS.PREVIOUS_BUTTON}
      </button>
      <span className="page-info">
        {PAGINATION_LABELS.PAGE_INFO_PREFIX} {currentPage} {PAGINATION_LABELS.PAGE_INFO_SEPARATOR} {totalPages}
      </span>
      <button
        className="pagination-btn"
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        {PAGINATION_LABELS.NEXT_BUTTON}
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
};

export default Pagination;
