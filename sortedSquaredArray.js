/*
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
*/


// TIME-COMPLEXITY: O(n)
// SPACE-COMPLEXITY: O(n)

const sortedSquaredArray = (array) => {
  const sortedSquares = new Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;
  let i = array.length - 1;
  while (i >= 0) {
    let leftValue = array[left];
    let rightValue = array[right];

    if (Math.abs(leftValue) > Math.abs(rightValue)) {
      sortedSquares[i] = leftValue ** 2;
      left++;
    }
    else {
      sortedSquares[i] = rightValue ** 2;
      right--;
    }
    i--;
  }
  return sortedSquares;
} 

// [1, 2, 3, 5, 6, 8, 9]
//                 r
//  l
//                 i
// [0, 0, 0, 0, 0, 0, 81]

console.log(
  'sortedSquaredArray', sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])
);

