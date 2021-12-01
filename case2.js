//Type A -the balance amount changes((increase/decrease) by varying amounts each month.

const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 150 },
      },
    },
    {
      monthNumber: 3, // 3 months ago
      account: {
        balance: { amount: 150 },
      },
    },
    {
      monthNumber: 2, // 2 months ago
      account: {
        balance: { amount: 300 },
      },
    }
  ];

  module.exports = accountBalanceHistory;