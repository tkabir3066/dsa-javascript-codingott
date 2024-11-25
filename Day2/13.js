// 13. Write a program to create a new array using the filter() method, containing only even numbers from a given array.

const numbers = [2, 5, 8, 12, 15];

const filteredArr = numbers.filter((num) => num % 2 === 0);

console.log(filteredArr); //[ 2, 8, 12 ]
