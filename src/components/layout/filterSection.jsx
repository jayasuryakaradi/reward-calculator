import FilterPanel from "../filters/filterPanel";
import RewardPointsCard from "../rewardPointsCard/rewardPointsCard";

const FilterSection = ({
  customersList,
  selectedCustomerId,
  totalRewardPoints,
  defaultMonthsCount,
  onMonthFilterChange,
  onCustomerSelect,
}) => {
  return (
    <div className="filter-section">
      <div className="filter-wrapper">
        <FilterPanel
          onFilter={onMonthFilterChange}
          onSelectCustomer={onCustomerSelect}
          customers={customersList}
          selectedCustomer={selectedCustomerId}
          defaultMonths={defaultMonthsCount}
        />
      </div>
      <RewardPointsCard totalPoints={totalRewardPoints} />
    </div>
  );
};

export default FilterSection;
