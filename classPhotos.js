// TIME-COMPLEXITY:  2 * O(nlog(n)) = O(nlog(n))
// SPACE-COMPLEXITY: O(1)
function classPhotos(redShirtHeights, blueShirtHeights) {
  let len = redShirtHeights.length;
  let maxBackRow = '';
  redShirtHeights = redShirtHeights.sort((a,b) => a - b);
  blueShirtHeights = blueShirtHeights.sort((a,b) => a - b);
  
  for (let i = 0; i < len; i++){
    let red = redShirtHeights[i];
    let blue = blueShirtHeights[i];
    if (red === blue) return false;
    let currentBackRow = red > blue ? 'red' : 'blue';
    maxBackRow = maxBackRow || currentBackRow;
    if (maxBackRow !== currentBackRow) return false;
  }
  return true;
}