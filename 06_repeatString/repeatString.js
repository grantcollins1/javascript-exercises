const repeatString = function(string, num) {
  let total = '';
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    total += string;
  }
  return total;
};

// Do not edit below this line
module.exports = repeatString;
