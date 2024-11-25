// 17. Write a program to sort an array in ascending order using the sort() method.

const nums = [4, 1, 3, 2, 0];

const sortedNums = nums.sort((a, b) => a - b);
console.log(sortedNums); //[ 0, 1, 2, 3, 4 ]
