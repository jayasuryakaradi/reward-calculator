import PropTypes from 'prop-types';

const EmptyState = ({ message, showTitle = false, selectedCustomer = '' }) => {
  return (
    <div className="customers-table-container">
      {showTitle && (
        <div className="table-title">Transactions for {selectedCustomer}</div>
      )}
      <div className={showTitle ? 'no-transactions' : 'no-customer-message'}>
        <p>{message}</p>
      </div>
    </div>
  );
};

EmptyState.propTypes = {
  message: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
  selectedCustomer: PropTypes.string,
};

EmptyState.defaultProps = {
  showTitle: false,
  selectedCustomer: '',
};

export default EmptyState;
