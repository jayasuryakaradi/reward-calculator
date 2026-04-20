export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const AVAILABLE_YEARS = {
  MIN_YEAR: 2022,
  MAX_YEAR: 2026,
};

export const FILTER_OPTIONS = {
  RECENT: 'recent',
  ALL: 'all',
  DEFAULT_YEAR: '2026',
  DEFAULT_MONTHS: 3,
};

export const LAST_THREE_MONTHS = ['10', '11', '12'];

export const PAGINATION = {
  ITEMS_PER_PAGE: 10,
};

export const DATE_FORMATS = {
  TABLE_FORMAT: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  MONTH_YEAR_FORMAT: {
    month: 'short',
    year: 'numeric',
  },
};

export const REWARD_POINTS = {
  HIGH_AMOUNT_THRESHOLD: 100,
  LOW_AMOUNT_THRESHOLD: 50,
  HIGH_AMOUNT_MULTIPLIER: 2,
  HIGH_AMOUNT_BASE_POINTS: 50,
  LOW_AMOUNT_MULTIPLIER: 1,
};

export const MESSAGES = {
  SELECT_CUSTOMER: 'Please select a customer to view transactions',
  NO_TRANSACTIONS: 'No transactions found for this customer.',
};

export const UI_LABELS = {
  APP_TITLE: 'Customer Rewards Dashboard',
  ERROR_TITLE: 'Error',
  LOADING_TEXT: 'Loading...',
};

export const FILTER_LABELS = {
  FILTER_HEADER: 'Search by Customer & Date',
  CUSTOMER_LABEL: 'Customer',
  CUSTOMER_PLACEHOLDER: 'Choose Customer',
  MONTH_YEAR_LABEL: 'Filter by Month & Year',
  MONTH_PLACEHOLDER: 'Choose Month',
  MONTH_RECENT_OPTION: 'Recent (Last 3 Months)',
  MONTH_ALL_OPTION: 'All Months',
  YEAR_PLACEHOLDER: 'Choose Year',
};

export const TABLE_LABELS = {
  TRANSACTIONS_TITLE_PREFIX: 'Transactions for',
  TRANSACTION_ID_HEADER: 'Transaction ID',
  DATE_HEADER: 'Date',
  AMOUNT_HEADER: 'Amount',
  REWARDS_POINTS_HEADER: 'Rewards Points',
};

export const PAGINATION_LABELS = {
  PREVIOUS_BUTTON: 'Previous',
  NEXT_BUTTON: 'Next',
  PAGE_INFO_PREFIX: 'Page',
  PAGE_INFO_SEPARATOR: 'of',
};

export const REWARDS_CARD_LABELS = {
  TOTAL_REWARDS_POINTS: 'Total Rewards Points',
};
