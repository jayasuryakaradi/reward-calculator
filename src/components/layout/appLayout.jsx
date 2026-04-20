import PropTypes from 'prop-types';
import AppHeader from './appHeader';
import FilterSection from './filterSection';
import MainContent from './mainContent';
import { FILTER_OPTIONS } from '../../constants';

/**
 * AppLayout Component
 * Renders the main application layout with header, filters, and content
 */
const AppLayout = ({
  customersList,
  selectedCustomerId,
  totalRewardPoints,
  filteredMonthsCount,
  customerTransactionsByID,
  onMonthFilterChange,
  onCustomerSelect,
  onTotalPointsCalculated,
}) => {
  return (
    <main className="app-container">
      <AppHeader />

      <div className="app-content">
        <FilterSection
          customersList={customersList}
          selectedCustomerId={selectedCustomerId}
          totalRewardPoints={totalRewardPoints}
          defaultMonthsCount={filteredMonthsCount}
          onMonthFilterChange={onMonthFilterChange}
          onCustomerSelect={onCustomerSelect}
        />

        <MainContent
          customerTransactionsByID={customerTransactionsByID}
          filteredMonthsCount={filteredMonthsCount}
          selectedCustomerId={selectedCustomerId}
          onTotalPointsCalculated={onTotalPointsCalculated}
        />
      </div>
    </main>
  );
};

AppLayout.propTypes = {
  customersList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCustomerId: PropTypes.string.isRequired,
  totalRewardPoints: PropTypes.number.isRequired,
  filteredMonthsCount: PropTypes.shape({
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  customerTransactionsByID: PropTypes.object.isRequired,
  onMonthFilterChange: PropTypes.func.isRequired,
  onCustomerSelect: PropTypes.func.isRequired,
  onTotalPointsCalculated: PropTypes.func.isRequired,
};

AppLayout.defaultProps = {
  filteredMonthsCount: null,
};

export default AppLayout;
