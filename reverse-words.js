// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Solution:
const reverseWords = str =>
 str.split(' ').map(element => [...element].reverse().join('')).join(' ')
