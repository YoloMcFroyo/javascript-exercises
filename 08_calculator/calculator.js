const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let rollingSum = 0;
	for(let i = 0; i < nums.length; i++){
    rollingSum += nums[i];
  }
  return rollingSum;
};

const multiply = function(nums) {
  rollingSum = 1;
  for(let i = 0; i < nums.length; i++){
    rollingSum *= nums[i];
  }
  return rollingSum;
};

const power = function(num1, num2) {
  let rollingPower = 1;
	for(let i = 0; i < num2; i++){
    rollingPower *= num1;
  }
  return rollingPower;
};

const factorial = function(num1) {  
  let rollingSum = 1;
  for(let i = num1; i > 0; i--){
    rollingSum *= i;
  }
  return rollingSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
