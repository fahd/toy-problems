// TIME-COMPLEXITY: O(n)
// SPACE-COMPLEXITY: O(n/d) => n/d = depth of arrays present in original array

function productSum(array, depth = 1) {
  let sum = 0;
  for (const child of array){
    if (Array.isArray(child)){
      sum += (depth + 1) * productSum(child, depth + 1);
    } else{
      sum += child;
    }
  }
  return sum;
}


console.log(
  productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])
);
