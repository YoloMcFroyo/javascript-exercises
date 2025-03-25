const palindromes = function (word) {
  let l = 0;
  let r = word.length;
  while(l < r){
    while(!/[a-zA-Z0-9]/.test(word.charAt(l)) && l < r){
      l++;
    }
    while(!/[a-zA-Z0-9]/.test(word.charAt(r)) && l < r){
      r--;
    }
    if(word.charAt(l).toLowerCase() !== word.charAt(r).toLowerCase()){
      return false;
    }
    l++;
    r--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
