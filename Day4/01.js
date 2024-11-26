//01.Write a program to create a new array using the filter() method, containing only some numbers which are greater than 4

const numbers = [12, 5, 14, 21, 3, 2, 1, 4];

const filteredArr = numbers.filter((num) => num > 4);
console.log(filteredArr); //[ 12, 5, 14, 21 ]
