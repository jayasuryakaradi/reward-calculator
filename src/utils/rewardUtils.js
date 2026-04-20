import { REWARD_POINTS, DATE_FORMATS } from '../constants';

export const calculatePoints = (amount) => {
  let points = 0;

  if (amount > REWARD_POINTS.HIGH_AMOUNT_THRESHOLD) {
    points += (amount - REWARD_POINTS.HIGH_AMOUNT_THRESHOLD) * REWARD_POINTS.HIGH_AMOUNT_MULTIPLIER;
    points += REWARD_POINTS.HIGH_AMOUNT_BASE_POINTS;
  } else if (amount > REWARD_POINTS.LOW_AMOUNT_THRESHOLD) {
    points += (amount - REWARD_POINTS.LOW_AMOUNT_THRESHOLD) * REWARD_POINTS.LOW_AMOUNT_MULTIPLIER;
  }

  return Math.floor(points);
};

export const groupTransactions = (transactions) => {
  const result = {};

  transactions.forEach((tx) => {
    const month = new Date(tx.date).toLocaleString("default", DATE_FORMATS.MONTH_YEAR_FORMAT);

    const points = calculatePoints(tx.amount);

    if (!result[tx.customerId]) {
      result[tx.customerId] = {};
    }

    if (!result[tx.customerId][month]) {
      result[tx.customerId][month] = {
        total: 0,
        transactions: [],
      };
    }

    result[tx.customerId][month].total += points;

    result[tx.customerId][month].transactions.push({
      ...tx,
      points,
    });
  });

  return result;
};