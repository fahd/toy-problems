/*

  Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.


  A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers 
    [1, 3, 4] 
  form a subsequence of the array, 
    [1, 2, 3, 4]
  and so do the numbers:
    [2, 4]
  Note that a single number in an array and the array itself are both valid subsequences of the array.

  INPUT = [5, 1, 22, 25, 6, -1, 8, 10];
  SEQUENCE = [1, 6, -1, 10];
*/

// TIME-COMPLEXITY: O(n)
// SPACE-COMPLEXITY: O(1)
var isValidSubsequence = (array, sequence) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++){
    let el = array[i];
    if (sequence[counter] === el) counter++;
  }
  return counter === sequence.length;
};

// optimization
var isValidSubsequence = (array, sequence) => {
  let counter = 0;
  for (const el of array) {
    if (counter === sequence.length) break;
    if (sequence[counter] === el) counter++;
  }
  return counter === sequence.length;
};

console.log(
  isValidSubsequence([1,2,3,4,5], [1,3,5])
);


