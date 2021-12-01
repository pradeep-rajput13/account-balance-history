//Type B -the balance amount changes(increase/decrease) by the same amount each month.

const accountBalanceHistory = [ 
  {
    monthNumber: "0", // current month
    account: {
      balance: { amount: "200" },
    },
  },
   
    {
      monthNumber: " 1 ", // 1 months ago
      account: {
        balance: { amount: " 300 " },
      },
    },
    {
      monthNumber: 2, // 2 months ago
      account: {
        balance: { amount: 400 },
      },
    },
    {
      monthNumber: 3, // 3 months ago
      account: {
        balance: { amount: 500 },
      },
    },
    {
      monthNumber: 5, // 5 months ago
      account: {
        balance: { amount: 700 },
      },
    },
    {
      monthNumber: 4, // 4 months ago
      account: {
        balance: { amount: 600 },
      },
    }
  ];

  module.exports = accountBalanceHistory;