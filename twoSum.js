// Approach 1
// Time Complexity | O(n)
// Space Complexity | O(1)

function twoNumberSum(array, targetSum) {
  let output = [];
  let set = new Set();

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let diff = targetSum - item;
    if (set.has(diff)) {
      output.push(item, diff);
      break;
    }
    if (!set.has(item)) set.add(item);
  }

  return output;
}


// Approach 2
// Time Complexity: O(nlog(n))
// Space Complexity: O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let currentSum = array[left] + array[right];
    if (currentSum === targetSum) return [array[left], array[right]];
    else if (currentSum < targetSum) left++;
    else if (currentSum > targetSum) right--;
  }
  return [];
}




console.log(
  twoNumberSum([3,5, -4, 8, 11, 1, -1 , 6], 10)
);

