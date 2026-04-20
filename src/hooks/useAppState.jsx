import { useState, useCallback } from 'react';

/**
 * Custom hook for managing app state and handlers
 * Encapsulates all state management logic for the app
 */
export const useAppState = () => {
  const [filteredMonthsCount, setFilteredMonthsCount] = useState(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [totalRewardPoints, setTotalRewardPoints] = useState(0);

  const handleMonthFilterChange = useCallback((monthFilter) => {
    setFilteredMonthsCount(monthFilter);
  }, []);

  const handleCustomerSelection = useCallback((customerId) => {
    setSelectedCustomerId(customerId);
  }, []);

  const handleTotalPointsCalculated = useCallback((points) => {
    setTotalRewardPoints(points);
  }, []);

  return {
    filteredMonthsCount,
    selectedCustomerId,
    totalRewardPoints,
    handleMonthFilterChange,
    handleCustomerSelection,
    handleTotalPointsCalculated,
  };
};
