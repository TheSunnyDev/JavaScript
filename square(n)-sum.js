// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  let res = 0;
  let arr = numbers.map(x => x*x);
  arr.forEach(x => res += x);
  return res
}
