function permutations(nums) {
  const results = [];
  const temp = [];
  const set = new Set();

  const backtrack = () => {

    if (temp.length === nums.length) {
      results.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++){
      let el = nums[i];
      if (set.has(el)) continue;
      else {
        set.add(el);
        temp.push(el);
        backtrack();
        temp.pop();
        set.delete(el);
      }
    }
  }

  backtrack();
  return results;
}

console.log(
  'permutations',
  permutations(['A','B', 'C'])
);
