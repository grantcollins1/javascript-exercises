const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const stringArray = string.split('');
  let cleanStringArray = stringArray.map((char) => char.toLowerCase());
  cleanStringArray = cleanStringArray.filter((char) => alphanumerical.includes(char))
  console.log(cleanStringArray);
  let normalArray = [...cleanStringArray];
  cleanStringArray.reverse();
  const reversal = cleanStringArray.join('');
  const normal = normalArray.join('');
  return normal === reversal;
};

// Do not edit below this line
module.exports = palindromes;
