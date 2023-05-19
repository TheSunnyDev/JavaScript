// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).


Solution:
function array(string) {
    const num = string.split(',')
    str = num.slice(1, num.length - 1).join(' ')
    if (str === '') return null;
    return str;
  }