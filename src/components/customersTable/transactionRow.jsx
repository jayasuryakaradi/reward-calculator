import PropTypes from 'prop-types';
import { formatDate } from '../../utils/tableUtils';

const TransactionRow = ({ transaction }) => {
  const { transactionId, date, amount, points } = transaction;

  return (
    <tr>
      <td className="transaction-id-cell">{transactionId}</td>
      <td className="date-cell">{formatDate(date)}</td>
      <td className="amount-cell">${amount.toFixed(2)}</td>
      <td className="points-cell">{points}</td>
    </tr>
  );
};

TransactionRow.propTypes = {
  transaction: PropTypes.shape({
    transactionId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired,
  }).isRequired,
};

export default TransactionRow;
