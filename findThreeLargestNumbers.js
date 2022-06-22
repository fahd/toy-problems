// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

function findThreeLargestNumbers(array) {
  let output = [null, null, null];

  for (const child of array){
    if (output[2] === null || child > output[2]){
      shift(output, child, 2);
    }
    else if (output[1] === null || child > output[1]){
      shift(output, child, 1);
    }
    else if (output[0] === null || child > output[0]){
      shift(output, child, 0);
    }
  }

  return output;
}

function shift(array, el, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx){
      array[i] = el;
    }
    else {
      array[i] = array[i + 1];
    }
  }
}