import { useEffect } from "react";
import PropTypes from "prop-types";

import "./customersTable.css";
import { MESSAGES } from "../../constants";
import EmptyState from "./emptyState";
import TransactionTable from "./transactionTable";
import Pagination from "./pagination";
import { useTransactions } from "../../hooks/useTransactions";
import { usePagination } from "../../hooks/usePagination";

const CustomersTable = ({
  data: customerTransactionsByID,
  filteredMonths: monthFilter,
  selectedCustomer: selectedCustomerId,
  onTotalPointsChange: onTotalPointsCalculated,
}) => {
  const transactions = useTransactions(customerTransactionsByID, selectedCustomerId, monthFilter);
  const { paginatedData, currentPage, handlePreviousPage, handleNextPage } =
    usePagination(transactions.transactions);

  useEffect(() => {
    if (onTotalPointsCalculated) {
      onTotalPointsCalculated(transactions.totalPoints);
    }
  }, [transactions.totalPoints, onTotalPointsCalculated]);

  if (!selectedCustomerId) {
    return <EmptyState message={MESSAGES.SELECT_CUSTOMER} />;
  }

  if (transactions.transactions.length === 0) {
    return (
      <EmptyState
        message={MESSAGES.NO_TRANSACTIONS}
        showTitle={true}
        selectedCustomer={selectedCustomerId}
      />
    );
  }

  return (
    <>
      <TransactionTable
        selectedCustomer={selectedCustomerId}
        transactions={paginatedData.data}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={paginatedData.totalPages}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </>
  );
};

CustomersTable.propTypes = {
  data: PropTypes.object.isRequired,
  filteredMonths: PropTypes.object,
  selectedCustomer: PropTypes.string.isRequired,
  onTotalPointsChange: PropTypes.func,
};

CustomersTable.defaultProps = {
  filteredMonths: [],
};

export default CustomersTable;
