import CustomersTable from "../customersTable/customersTable";

const MainContent = ({
  customerTransactionsByID,
  filteredMonthsCount,
  selectedCustomerId,
  onTotalPointsCalculated,
}) => {
  return (
    <main className="app-main">
      <CustomersTable
        data={customerTransactionsByID}
        filteredMonths={filteredMonthsCount}
        selectedCustomer={selectedCustomerId}
        onTotalPointsChange={onTotalPointsCalculated}
      />
    </main>
  );
};

export default MainContent;
