// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let bankAccountContainers = [];
  for (let i = 0; i < array.length; i++) {
    let d = array[i].deposits;
    let w = array[i].withdrawals;
    let b = array[i].balance;

    let withdrawals = 0;
    let deposits = 0;

    withdrawals = sumOfLoop(w);
    deposits = sumOfLoop(d);

    if((deposits - withdrawals) !== b){
      bankAccountContainers.push(array[i]);
    }

  }
  return bankAccountContainers;
}

function sumOfLoop(arr) {
  let sum = 0;
  if(arr === undefined){
    return sum;
  }

  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
  }

  return sum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
