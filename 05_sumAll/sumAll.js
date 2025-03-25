const sumAll = function(...integers) {
  if(integers.length > 2){
    return 'ERROR';
  }
  if(!Number.isInteger(integers[0]) || !Number.isInteger(integers[1])){
    return 'ERROR';
  }
  if(integers[0] < 0 || integers[1] < 0){
    return 'ERROR';
  }

  let end = Math.max(integers[0], integers[1]);
  let start = Math.min(integers[0], integers[1]);
  let runningTotal = 0;

  for(let curNumber = start; curNumber <= end; curNumber++){
    runningTotal += curNumber;
  }
  return runningTotal;
};

// Do not edit below this line
module.exports = sumAll;
