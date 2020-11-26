// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
  let [pos, neg, zer] = [0, 0, 0];

  arr.forEach((el) => (el < 0 ? neg++ : el > 0 ? pos++ : zer++));

  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zer / arr.length).toFixed(6));
}
