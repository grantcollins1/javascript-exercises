const fibonacci = function(num) {
  let arr = [0, 1];
  num = Number(num);
  if (num < 0) {
    return "OOPS";
  }
  for (i = 0; i < num; i++) {
    arr.push(arr[i] + arr[i+1]);
  }
  return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
