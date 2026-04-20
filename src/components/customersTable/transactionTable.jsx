import PropTypes from 'prop-types';
import TransactionRow from './transactionRow';
import { TABLE_LABELS } from '../../constants';

const TransactionTable = ({ selectedCustomer, transactions }) => {
  return (
    <div className="customers-table-container">
      <div className="table-title">{TABLE_LABELS.TRANSACTIONS_TITLE_PREFIX} {selectedCustomer}</div>

      <table className="customers-table">
        <thead>
          <tr>
            <th>{TABLE_LABELS.TRANSACTION_ID_HEADER}</th>
            <th>{TABLE_LABELS.DATE_HEADER}</th>
            <th>{TABLE_LABELS.AMOUNT_HEADER}</th>
            <th>{TABLE_LABELS.REWARDS_POINTS_HEADER}</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <TransactionRow key={tx.transactionId} transaction={tx} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionTable.propTypes = {
  selectedCustomer: PropTypes.string.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      transactionId: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      points: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TransactionTable;
