const sumAll = function(intOne, intTwo) {
  let larger = intOne;
  let smaller = intTwo;
  if (!Number.isInteger(intOne) || !Number.isInteger(intTwo) || intTwo < 0 || intOne < 0) {
    return "ERROR";
  }
  let total = 0;
  if (intTwo > intOne) {
    larger = intTwo;
    smaller = intOne;
  }
  for (let i = smaller; i <= larger; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
