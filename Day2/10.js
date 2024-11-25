// 10. Write a program to check if an element exists in an array.
const arr = [1, 5, 14];

// using common js

const count = arr.indexOf(5);
console.log(count); //1

if (count !== -1) {
  console.log("Element exists ");
} else {
  console.log("Element does not exist");
}

// using ES6
// console.log(arr.includes(14)); //true
const isExist = arr.includes(14);

if (isExist) {
  console.log("Element exist");
} else {
  console.log("Element does not exist");
}
