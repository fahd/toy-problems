// TIME COMPLEXITY: O(log(n))
// SPACE COMPLEXITY: O(1)
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let middleValue = array[mid];
    if (middleValue === target) return mid;
    else if (middleValue > target) {
      end = mid - 1;
    }
    else if (middleValue < target) {
      start = mid + 1;
    }
  }

  return -1;
}


console.log(
  binarySearch([1,2,3,4,5,6], 7)
);
