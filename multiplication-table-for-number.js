// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// Solution:

multiTable = number => [...Array(10)].map((_, index) => `${index + 1} * ${number} = ${(index + 1) * number}`).join('\n')