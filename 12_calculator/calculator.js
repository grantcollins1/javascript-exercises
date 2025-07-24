const add = function(num1, num2) {
	return num1+ num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, curItem) => total + curItem, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curItem) => total * curItem);
};

const power = function(num, power) {
  let total = num;
	for (let i = 1; i < power; i++) {
    total *= num;
  }
  return total;
};

const factorial = function(num) {
	let curNum = num;
  let total = 1;
  while (curNum > 1) {
    total *= curNum;
    curNum -= 1;
  }
  return total;
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
