//This is a sub case for type B where the balance amount is constant throughtout or is 0

const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 3, // 3 months ago
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // 2 months ago
      account: {
        balance: { amount: 100 },
      },
    }
  ];

  module.exports = accountBalanceHistory;