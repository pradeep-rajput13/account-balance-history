//This is a case where user enters invalid input , in this case alteast 3 records should be there

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
    }
  ];

  module.exports = accountBalanceHistory;