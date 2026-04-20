import { useFetchData } from "./hooks/useFetchData";
import { useAppState } from "./hooks/useAppState";
import { sortCustomersAscending } from "./utils/tableUtils";
import Loading from "./components/loading/loading";
import ErrorPage from "./components/errorPage/errorPage";
import AppLayout from "./components/layout/appLayout";

import "./App.css";

function App() {
  const { customerTransactionsByID, isDataLoading, errorMessage } = useFetchData();
  const {
    filteredMonthsCount,
    selectedCustomerId,
    totalRewardPoints,
    handleMonthFilterChange,
    handleCustomerSelection,
    handleTotalPointsCalculated,
  } = useAppState();

  if (isDataLoading) return <Loading />;
  if (errorMessage) return <ErrorPage error={errorMessage} />;

  const customersList = sortCustomersAscending(
    Object.keys(customerTransactionsByID),
  );

  return (
    <AppLayout
      customersList={customersList}
      selectedCustomerId={selectedCustomerId}
      totalRewardPoints={totalRewardPoints}
      filteredMonthsCount={filteredMonthsCount}
      customerTransactionsByID={customerTransactionsByID}
      onMonthFilterChange={handleMonthFilterChange}
      onCustomerSelect={handleCustomerSelection}
      onTotalPointsCalculated={handleTotalPointsCalculated}
    />
  );
}

export default App;
