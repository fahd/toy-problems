/*
  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot create. 
  
  The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).

  For example, if you're given coins = [1, 2, 5], the minimum
  amount of change that you can't create is 4. 
  
  If you're given no coins, the minimum amount of change that you can't create is 1.
*/


// TIME COMPLEXITY: O(nlog(n)) -> sorting, then traversal
// SPACE COMPLEXITY: O(1)
function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let currSum = 0;
  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];
    if (coin <= currSum + 1) currSum += coin;
  }
  return currSum + 1 || 1;
} 

console.log(
  nonConstructibleChange([5,7,1,1,2,3,22]), // 20
  nonConstructibleChange([1, 1, 4]), // 3
  nonConstructibleChange([]), // 1
  nonConstructibleChange([1,1,1,1,1]), // 1
);
