//02.Write a program to create a new array using the filter() method, where each element is doubled

const numbers = [12, 16, 22, 13, 14, 15];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); //[ 24, 32, 44, 26, 28, 30 ]

//using common js

const newArr = [];

for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] * 2);
}

console.log(newArr); // [ 24, 32, 44, 26, 28, 30 ]
