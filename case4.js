//This is a case where user enters invalid input , in this case data for 2 months ago is missing

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
    }
  ];

  module.exports = accountBalanceHistory;