const combinations = (nums, length) => {
  const results = [];
  const temp = [];

  const backtrack = (idx) => {
    if (temp.length === length) {
      results.push([...temp]);
      return;
    }

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
  combinations([
    'A',
    'B',
    'C'
  ], 2)
);

