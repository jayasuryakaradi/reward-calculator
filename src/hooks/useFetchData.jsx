import { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/api';
import { groupTransactions } from '../utils/rewardUtils';

export const useFetchData = () => {
  const [customerTransactionsByID, setCustomerTransactionsByID] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsDataLoading(true);
        setErrorMessage('');

        const transactions = await fetchTransactions();
        const grouped = groupTransactions(transactions);
        setCustomerTransactionsByID(grouped);
      } catch (err) {
        setErrorMessage('Failed to load transactions. Please try again later.');
      } finally {
        setIsDataLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    customerTransactionsByID,
    isDataLoading,
    errorMessage,
  };
};
