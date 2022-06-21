// TIME-COMPLEXITY: O(nlog(n))
// SPACE-COMPLEXITY: O(1)
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // if fastest, return the maximum possible total speed
  // else, return minimum total speed
  var totalSpeed = 0;
  let len = blueShirtSpeeds.length;

  // [2, 3, 5, 5, 9]
  // [1, 2, 3, 6, 7]
  //              ^
  //  MIN = 26

  // [2, 3, 5, 5, 9]
  // [7, 6, 3, 2, 1]
  //  ^
  //  MAX = 7 + 6 + 5 + 5 + 9 = 32

  if (fastest) {
    redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => b - a);
    for (let i = 0; i < len; i++){
      let redShirt = redShirtSpeeds[i];
      let blueShirt = blueShirtSpeeds[i];
      totalSpeed += Math.max(redShirt, blueShirt);
    }
  }
  else {
    redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b);
    for (let i = 0; i < len; i++){
      let redShirt = redShirtSpeeds[i];
      let blueShirt = blueShirtSpeeds[i];
      totalSpeed += Math.max(redShirt, blueShirt);
    }
  }

  return totalSpeed;
}

console.log(
  'tandemBicycle', tandemBicycle([1,1,1,1,1], [2,2,2,2,2], true)
);
