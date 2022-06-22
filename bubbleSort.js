// TIME COMPLEXITY: O(n^2)
// SPACE COMPLEXITY: O(1)
function bubbleSort(array) {
  let isSorted = false;
  for (let i = 0; i < array.length; i++){
    let el = array[i];
    let next = array[i + 1];
    if (el > next) {
      [array[i + 1], array[i]] = [array[i], array[i + 1]];
      isSorted = true;
    }
  }
  return !isSorted ? array : bubbleSort(array);
}