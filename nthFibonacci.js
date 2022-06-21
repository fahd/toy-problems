const memoize = (cb) => {
  let cache = {};
  return function (value) {
    if (!cache.hasOwnProperty(value)) cache[value] = cb(value);
    return cache[value];
  }
}

// TIME-COMPLEXITY: O(n) space
// SPACE COMPLEXITY: O(n) space

const NthFibonacci = memoize(function (n) {
  if (n === 1) return 0;
  else if (n === 2) return 1;
  return NthFibonacci(n - 1) + NthFibonacci(n - 2);
});

