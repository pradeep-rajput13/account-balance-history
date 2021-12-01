const accountTypeChecker = (accountBalanceHistory) => {
 

  // checking all the mandatory params are avaialble and are valid

  if (
    !(
      accountBalanceHistory &&
      Array.isArray(accountBalanceHistory) &&
      accountBalanceHistory.length
    )
  ) {
    console.log("Invalid input");
    return;
  }

  if(accountBalanceHistory.length < 3){
    console.log("There should be atleast 3 elements to test these cases");
    return;
  }

  const isInvalid = accountBalanceHistory.some((element) => {
    if (
      !(
        element &&
        (element.monthNumber || element.monthNumber === 0) &&
        !isNaN(element.monthNumber)
      )
    ) {
      console.log("Invalid input");
      return true;
    }

    if (
      !(
        element &&
        element.account &&
        element.account.balance &&
        (element.account.balance.amount ||
          element.account.balance.amount === 0) &&
        !isNaN(element.account.balance.amount)
      )
    ) {
      console.log("Invalid input");
      return true;
    }
  });

  if (isInvalid) {
    return;
  }

  accountBalanceHistory.sort((a,b)=> parseInt(a.monthNumber) - parseInt(b.monthNumber));
  

  // checking if any months data is missing or extra data for a month is available

  let monthCount = new Array(accountBalanceHistory.length);
  monthCount.fill(0);


  accountBalanceHistory.forEach((element,index)=>{
    monthCount[parseInt(element.monthNumber)]++;
  });


  for(let i=0;i<accountBalanceHistory.length;i++){
    if(monthCount[i] == 0){
      console.log("Invalid input");
      return;
    }
  }

  //checking if the difference in amount is contant or varying
  const initialChange = parseInt(accountBalanceHistory[0].account.balance.amount) - parseInt(accountBalanceHistory[1].account.balance.amount);

  for(let i=1;i<accountBalanceHistory.length-1;i++){
    if((parseInt(accountBalanceHistory[i].account.balance.amount) - parseInt(accountBalanceHistory[i+1].account.balance.amount)) !== initialChange){
      return "A";
    }
  }

  return "B";

};

if (process.argv.length === 2) {
  console.log(
    "Please mention the test case.\nEg. node accountTypeChecker.js case1"
  );
} else {
  const caseNo= process.argv[2].toLowerCase();
  if (caseNo == "case1") {
    const case1 = require("./case1");
    const resp = accountTypeChecker(case1);
    if (resp) console.log(resp);
  } else if (caseNo == "case2") {
    const case2 = require("./case2");
    const resp = accountTypeChecker(case2);
    if (resp) console.log(resp);
  } else if (caseNo == "case3") {
    const case3 = require("./case3");
    const resp = accountTypeChecker(case3);
    if (resp) console.log(resp);
  } else if (caseNo == "case4") {
    const case4 = require("./case4");
    const resp = accountTypeChecker(case4);
    if (resp) console.log(resp);
  } else if (caseNo == "case5") {
    const case5 = require("./case5");
    const resp = accountTypeChecker(case5);
    if (resp) console.log(resp);
  } else {
    console.log(
      "Please mention a valid test case.\nEg. node accountTypeChecker.js case1"
    );
  }
}
