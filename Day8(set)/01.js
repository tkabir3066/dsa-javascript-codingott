// 01.Write a program to remove duplicate from an array

function removeDuplicates(arr) {
  const unique = new Set(arr);

  return unique;
}

const arr = ["saurav", "ravi", "janiya", "ravi", "saurav", "mavi"];
const result = removeDuplicates(arr);
console.log(result); //Set { 0: 'saurav', 1: 'ravi', 2: 'janiya', 3: 'mavi' }
