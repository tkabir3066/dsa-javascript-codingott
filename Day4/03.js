//03.Write a program to add all elements of an array

const numbers = [12, 13, 10, 6, 9, 17];

//using common js
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log(sum); //67

//using ES6

const total = numbers.reduce((prev, next) => {
  return prev + next;
}, 0);

console.log(total); //67
