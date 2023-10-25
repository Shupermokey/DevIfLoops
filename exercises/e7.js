// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  var bankAccountContainer = [];
  var bankAccountBalance=9999999999999;
  
  for(var i = 0; i<array.length; i++){
   
    if(array[i]["balance"] > 0 && array[i]["balance"] < bankAccountBalance){
      if(bankAccountContainer.length > 0){
        bankAccountContainer.pop();
      }
      bankAccountBalance = array[i]["balance"];
      bankAccountContainer.push(array[i]);
    }
    
  }
  return bankAccountContainer;
  
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function