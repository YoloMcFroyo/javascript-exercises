const removeFromArray = function(array, ...excluded) {
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if (!excluded.includes(array[i])){
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
