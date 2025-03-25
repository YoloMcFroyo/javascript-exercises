const repeatString = function( word, numRepeated) {
  if(numRepeated < 0) return 'ERROR'
  let builtString = '';
  for(let i = 0; i < numRepeated; i++){
    builtString += word;
  }
  return builtString;
};

// Do not edit below this line
module.exports = repeatString;
