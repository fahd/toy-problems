// TIME COMPLEXITY: O(n^2)
// SPACE COMPLEXITY: O(1)

function insertionSort(array) {
  for (let i = 0; i < array.length; i++){
    let curr = array[i];
    for (j = i - 1; array[j] > curr && j > -1; j--){
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}

console.log(
  insertionSort([0, -1, -100, 5, 3, 100, 2, 6])
);
