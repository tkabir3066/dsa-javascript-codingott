//04.Write a program to find largest number of an array

const numbers = [17, 15, 14, 9, 20, 11, 28];

let max = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max); //28
