import { DATE_FORMATS } from '../constants';

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', DATE_FORMATS.TABLE_FORMAT);
};

export const sortCustomersAscending = (customers) => {
  return customers.sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, ''), 10);
    const numB = parseInt(b.replace(/\D/g, ''), 10);
    
    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }
    
    return a.localeCompare(b);
  });
};
