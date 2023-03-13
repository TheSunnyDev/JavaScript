// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// Solution:

function between(a, b) {
    let res = [a];
    while(a < b){
      a += 1;
      res.push(a)
    }
    return res
  }