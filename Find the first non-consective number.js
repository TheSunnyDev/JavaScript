// Your task is to find the first element of an array that is not consecutive.

Solution:
function firstNonConsecutive (arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] + 1 !== arr[i]) return arr[i];
    }
  return null;
}