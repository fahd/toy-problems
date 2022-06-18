const queries = [1, 2, 2, 3, 6];

// TIME-COMPLEXITY: O(nlog(n))
// SPACE-COMPLEXITY: O(1)
function minimumWaitingTime(queries) {

  queries = queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;
  let nextWaitingTime = 0;

  for (let i = 0; i < queries.length; i++){
    let duration = queries[i];
    totalWaitingTime += nextWaitingTime;
    nextWaitingTime += duration;
  }

  return totalWaitingTime;
}

console.log(
  'minimumWaitingTime:',
  minimumWaitingTime(queries)
);





