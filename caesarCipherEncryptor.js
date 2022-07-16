// TIME COMPLEXITY = O(n)
// SPACE COMPLEXITY = O(1)
function caesarCipherEncryptor(string, key) {
  let str = '';
  for (char of string){
    // e.g. 96
    let charCode = char.charCodeAt(0);
    let newAmount = key % 26;
    let newCharCode = charCode + newAmount;
    if (newCharCode > 122) newCharCode = 96 + (newCharCode - 122);
    let newChar = String.fromCharCode(newCharCode);
    str += newChar;
  }
  return str;
}
