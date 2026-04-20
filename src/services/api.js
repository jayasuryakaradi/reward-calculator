import transactions from "../../public/data/transactions.json";

export const fetchTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(transactions), 1500);
  });
};
