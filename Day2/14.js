// 14. Write a program to use the reduce() method to calculate the sum of an array of numbers.

const nums = [2, 5, 7];

const result = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(result); //14
