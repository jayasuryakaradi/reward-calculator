import { useMemo, useState } from 'react';
import { FILTER_OPTIONS, FILTER_LABELS, LAST_THREE_MONTHS, PAGINATION } from '../constants';

export const useTransactions = (customerTransactionsByID, selectedCustomerId, monthFilter) => {
  return useMemo(() => {
    if (!selectedCustomerId || !customerTransactionsByID[selectedCustomerId]) {
      return { transactions: [], totalPoints: 0 };
    }

    const selectedCustomerData = customerTransactionsByID[selectedCustomerId];
    const allCustomerTransactions = [];
    let totalRewardPoints = 0;

    Object.entries(selectedCustomerData).forEach(([monthYearKey, monthData]) => {
      if (monthData.transactions && monthData.transactions.length > 0) {
        monthData.transactions.forEach((tx) => {
          allCustomerTransactions.push({
            ...tx,
            monthKey: monthYearKey,
          });
          totalRewardPoints += tx.points || 0;
        });
      }
    });

    if (!monthFilter) {
      return { transactions: [], totalPoints: 0 };
    }

    if (monthFilter.month === '' || monthFilter.year === '') {
      return { transactions: [], totalPoints: 0 };
    }
    console.log('Filtering transactions with monthFilter:', monthFilter);

    if (
      monthFilter.month &&
      monthFilter.month !== FILTER_OPTIONS.ALL &&
      monthFilter.month !== FILTER_OPTIONS.RECENT
    ) {
      const filteredTransactionsList = allCustomerTransactions.filter((tx) => {
        const txDate = new Date(tx.date);
        const txMonth = String(txDate.getMonth() + 1).padStart(2, '0');
        const txYear = txDate.getFullYear().toString();

        const filterMonth = String(monthFilter.month).padStart(2, '0');
        const filterYear = String(monthFilter.year);

        return filterMonth === txMonth && filterYear === txYear;
      });

      const filteredTotalPoints = filteredTransactionsList.reduce((sum, tx) => sum + (tx.points || 0), 0);
      return { transactions: filteredTransactionsList, totalPoints: filteredTotalPoints };
    } else if (monthFilter.month === FILTER_OPTIONS.ALL) {
      const filteredTransactionsList = allCustomerTransactions.filter((tx) => {
        const txDate = new Date(tx.date);
        const txYear = txDate.getFullYear().toString();
        const filterYear = String(monthFilter.year);

        return txYear === filterYear;
      });

      const filteredTotalPoints = filteredTransactionsList.reduce((sum, tx) => sum + (tx.points || 0), 0);
      return { transactions: filteredTransactionsList, totalPoints: filteredTotalPoints };
    } else {
      const filteredTransactionsList = allCustomerTransactions.filter((tx) => {
        const txDate = new Date(tx.date);
        const txMonth = String(txDate.getMonth() + 1).padStart(2, '0');
        const txYear = txDate.getFullYear().toString();
        const filterYear = String(monthFilter.year);

        return txYear === filterYear && LAST_THREE_MONTHS.includes(txMonth);
      });

      const filteredTotalPoints = filteredTransactionsList.reduce((sum, tx) => sum + (tx.points || 0), 0);
      return { transactions: filteredTransactionsList, totalPoints: filteredTotalPoints };
    }
  }, [customerTransactionsByID, selectedCustomerId, monthFilter]);
};

