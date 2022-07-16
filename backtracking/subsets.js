// find all subsets
// Time Complexity O(2^n), n = # of subsets

function subsets(nums) {
  let results = [];
  let temp = [];

  function backtrack(idx) {
    results.push([...temp]);

    for (let i = idx; i < nums.length; i++){
      let char = nums[i];

      temp.push(char);
      backtrack(i + 1);
      temp.pop();
    }
  }

  backtrack(0);
  return results;
}

console.log(
  subsets([
    'A',
    'B',
    'C'
  ])
);
