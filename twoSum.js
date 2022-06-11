// Time Complexity
// O(n)

// Space Complexity
// O(1)

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


console.log(
  twoNumberSum([3,5, -4, 8, 11, 1, -1 , 6], 10)
);
