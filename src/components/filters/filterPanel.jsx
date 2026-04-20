import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { MONTH_NAMES, AVAILABLE_YEARS, FILTER_OPTIONS, FILTER_LABELS } from '../../constants';
import './filterPanel.css';

const FilterPanel = ({
  onSelectCustomer,
  onFilter,
  customers = [],
  selectedCustomer = '',
  defaultMonths = FILTER_OPTIONS.DEFAULT_MONTHS,
}) => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const availableYears = useMemo(() => {
    const years = [];
    for (let year = AVAILABLE_YEARS.MIN_YEAR; year <= AVAILABLE_YEARS.MAX_YEAR; year++) {
      years.push(year.toString());
    }
    return years;
  }, []);

  const availableMonths = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      value: String(i + 1).padStart(2, '0'),
      label: MONTH_NAMES[i],
    }));
  }, []);

  useEffect(() => {
    setSelectedMonth('');
    setSelectedYear('');
  }, []);

  useEffect(() => {
    if (selectedCustomer) {
      setSelectedYear(FILTER_OPTIONS.DEFAULT_YEAR);
      setSelectedMonth(FILTER_OPTIONS.RECENT);
      onFilter({ year: FILTER_OPTIONS.DEFAULT_YEAR, month: FILTER_OPTIONS.RECENT });
    }
  }, [selectedCustomer, onFilter]);

  const handleChangeMonth = (newMonth) => {
    setSelectedMonth(newMonth);
    onFilter({ year: selectedYear, month: newMonth });
  };

  const handleChangeYear = (newYear) => {
    setSelectedYear(newYear);
    onFilter({ year: newYear, month: selectedMonth });
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>{FILTER_LABELS.FILTER_HEADER}</h3>
      </div>

      <div className="filter-section-group">
        <div className="filter-section-item">
          <label htmlFor="customer-select">{FILTER_LABELS.CUSTOMER_LABEL}</label>
          <select
            id="customer-select"
            value={selectedCustomer}
            onChange={(e) => onSelectCustomer(e.target.value)}
            className="filter-select-customer"
          >
            <option value="">{FILTER_LABELS.CUSTOMER_PLACEHOLDER}</option>
            {customers.map((customerId) => (
              <option key={customerId} value={customerId}>
                {customerId}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-section-item">
          <label>{FILTER_LABELS.MONTH_YEAR_LABEL}</label>
          <div className="month-filter-row">
            <select
              value={selectedMonth}
              onChange={(e) => handleChangeMonth(e.target.value)}
              className="filter-select-month"
            >
              <option value="">{FILTER_LABELS.MONTH_PLACEHOLDER}</option>
              <option value={FILTER_OPTIONS.RECENT}>{FILTER_LABELS.MONTH_RECENT_OPTION}</option>
              <option value={FILTER_OPTIONS.ALL}>{FILTER_LABELS.MONTH_ALL_OPTION}</option>
              {availableMonths.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => handleChangeYear(e.target.value)}
              className="filter-select-year"
            >
              <option value="">{FILTER_LABELS.YEAR_PLACEHOLDER}</option>
              {availableYears.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  onSelectCustomer: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  customers: PropTypes.arrayOf(PropTypes.string),
  selectedCustomer: PropTypes.string,
  defaultMonths: PropTypes.number,
};

FilterPanel.defaultProps = {
  customers: [],
  selectedCustomer: '',
  defaultMonths: 3,
};

export default FilterPanel;
